import React from 'react';
import _ from 'lodash';
import { KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css'
import Profile from './Profile'

// import DimensionsProvider from './DimensionsProvider';
import SoundfontProvider from './SoundfontProvider';
import PianoWithRecording from './PianoWithRecording';

// webkitAudioContext fallback needed to support Safari
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const soundfontHostname = 'https://d1pzp51pvbm36p.cloudfront.net';

const noteRange = {
  first: MidiNumbers.fromNote('c3'),
  last: MidiNumbers.fromNote('f4'),
};
const keyboardShortcuts = KeyboardShortcuts.create({
  firstNote: noteRange.first,
  lastNote: noteRange.last,
  keyboardConfig: KeyboardShortcuts.HOME_ROW,
});

class PianoMidi extends React.Component {
  state = {
    recording: {
      mode: 'RECORDING',
      events: [],
      currentTime: 0,
      currentEvents: [],
    },
    songname: "",
    deleteSong: function(id){
                  const filterSongs = this.state.songs.filter(song => song.id != id)
                  this.setState({songs: filterSongs})
                },
    songs:[],
    setSongs: function(song){
               this.setState({songs: [...this.state.songs, song]})
              },
    editSong: function(updatedSong){
                this.setState({songs: this.state.songs.map(
                    song => song.id === updatedSong.id ? updatedSong : song
                )})
              }
  };

  constructor(props) {
    super(props);

    this.scheduledEvents = [];
  }

  componentDidMount() {
    fetch('/songs')
    .then(resp => resp.json())
    .then(data => this.setState({songs: data}))
  }

  getRecordingEndTime = () => {
    if (this.state.recording.events.length === 0) {
      return 0;
    }
    return Math.max(
      ...this.state.recording.events.map(event => event.time + event.duration),
    );
  };

  setRecording = value => {
    this.setState({
      recording: Object.assign({}, this.state.recording, value),
    });
  };

  onClickPlay = () => {
    this.setRecording({
      mode: 'PLAYING',
    });
    const startAndEndTimes = _.uniq(
      _.flatMap(this.state.recording.events, event => [
        event.time,
        event.time + event.duration,
      ]),
    );
    startAndEndTimes.forEach(time => {
      this.scheduledEvents.push(
        setTimeout(() => {
          const currentEvents = this.state.recording.events.filter(event => {
            return event.time <= time && event.time + event.duration > time;
          });
          this.setRecording({
            currentEvents,
          });
        }, time * 1000),
      );
    });
    // Stop at the end
    setTimeout(() => {
      this.onClickStop();
    }, this.getRecordingEndTime() * 1000);
  };

  onClickStop = () => {
    this.scheduledEvents.forEach(scheduledEvent => {
      clearTimeout(scheduledEvent);
    });
    this.setRecording({
      mode: 'RECORDING',
      currentEvents: [],
    });
  };

  onClickClear = () => {
    this.onClickStop();
    this.setRecording({
      events: [],
      mode: 'RECORDING',
      currentEvents: [],
      currentTime: 0,
    });
  };

  onClickSave = () => {
    fetch("/songs",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      // notes does not post properly but songs does
      body: JSON.stringify({
        notes: this.state.recording.events, 
        name: this.state.songname,
        user_id: sessionStorage.getItem("user_id")
      })  
    })
    .then(resp => resp.json())
    .then((song) => this.setState({songs: [...this.state.songs, song]}))
    this.setState({songname:""})
  }

  handleChange = e => {
    this.setState({songname: e.target.value})
  }

  render() {
    return (
      <div>
        {/* <h1 className="h3">react-piano recording + playback demo</h1> */}
        <div className="piano">
          <SoundfontProvider
            instrumentName="acoustic_grand_piano"
            audioContext={audioContext}
            hostname={soundfontHostname}
            render={({ isLoading, playNote, stopNote }) => (
              <PianoWithRecording
                recording={this.state.recording}
                setRecording={this.setRecording}
                noteRange={noteRange}
                width={500}
                class = "ui container center aligned"
                playNote={playNote}
                stopNote={stopNote}
                disabled={isLoading}
                keyboardShortcuts={keyboardShortcuts}
              />
            )}
          />
        </div>
        <div className="mt-5">
          <button onClick={this.onClickPlay}>Play</button>
          <button onClick={this.onClickStop}>Stop</button>
          <button onClick={this.onClickClear}>Clear</button>
          <button onClick={this.onClickSave}>Save</button>
          <div>
            <form>
              <input
                onChange= {this.handleChange}
                value = {this.state.songname}
                type="text"
                name="name"
                placeholder="Enter Song Name"
              >
              </input>
            </form>
          </div>
        </div>
        <div className="mt-5">
          <strong>Recorded notes</strong>
          <div>{JSON.stringify(this.state.recording.events)}</div>
        </div>
        <Profile 
          setRecording={this.setRecording} 
          onPlaySong={this.onClickPlay} 
          songs={this.state.songs}
          setSongs={this.state.setSongs.bind(this)}
          deleteSingleSong={this.state.deleteSong.bind(this)}
          editSong={this.state.editSong.bind(this)}
        />
      </div>
    );
  }
}

export default PianoMidi
