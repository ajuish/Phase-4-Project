import React, {useEffect, useState} from 'react'
// import {useLocation} from 'react-router-dom'
import { KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';
import { useNavigate } from 'react-router-dom';
import _ from 'lodash';
import SoundfontProvider from './SoundfontProvider';
import PianoWithRecording from './PianoWithRecording';

function DisplayPiano() {

  const navigate = useNavigate()
  const currentUser = sessionStorage.getItem("user_id")
  const [recording, setRecording] = useState({
      mode: 'RECORDING',
      events: [],
      currentTime: 0,
      currentEvents: [],
    })
  
    
  const [scheduledEvents, setScheduledEvents] = useState([])
  console.log(scheduledEvents)

  const firstNote = MidiNumbers.fromNote('c3');
  const lastNote = MidiNumbers.fromNote('f5');

  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const soundfontHostname = 'https://d1pzp51pvbm36p.cloudfront.net';

  const noteRange = {
    first: MidiNumbers.fromNote('c3'),
    last: MidiNumbers.fromNote('f4'),
  };

  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: firstNote,
    lastNote: lastNote,
    keyboardConfig: KeyboardShortcuts.HOME_ROW,
  });

  useEffect(() => {
    if (currentUser == null) {
     navigate("/login")
    } 
  },[currentUser, navigate])

  // class App extends React.Component {

  
    // constructor(props) {
    //   super(props);
  
    //   this.scheduledEvents = [];
    // }
  
    const getRecordingEndTime = () => {
      if (recording.events.length === 0) {
        return 0;
      }
      return Math.max(
        ...recording.events.map(event => event.time + event.duration),
      );
    };
  
    // const setRecording = value => {
    //   this.setState({
    //     recording: Object.assign({}, recording, value),
    //   });
    // };
  
    const onClickPlay = () => {
      setRecording({
        mode: 'PLAYING',
      });
      const startAndEndTimes = _.uniq(
        _.flatMap(recording.events, event => [
          event.time,
          event.time + event.duration,
        ]),
      );
      startAndEndTimes.forEach(time => {
        setScheduledEvents(scheduledEvents.push( 
          setTimeout(() => {
            const currentEvents = recording.events.filter(event => {
              return event.time <= time && event.time + event.duration > time;
            });
            setRecording({
              currentEvents,
            });
          }, time * 1000),
        ))
      });
      // Stop at the end
      setTimeout(() => {
        onClickStop();
      }, getRecordingEndTime() * 1000);
    };
  
    const onClickStop = () => {
      scheduledEvents.forEach(scheduledEvent => {
        clearTimeout(scheduledEvent);
      });
      setRecording({
        mode: 'RECORDING',
        currentEvents: [],
      });
    };
  
    const onClickClear = () => {
      onClickStop();
      setRecording({
        events: [],
        mode: 'RECORDING',
        currentEvents: [],
        currentTime: 0,
      });
    };
  
      return (
        <div>
          <h1 className="h3">react-piano recording + playback demo</h1>
          <div className="mt-5">
            <SoundfontProvider
              instrumentName="acoustic_grand_piano"
              audioContext={audioContext}
              hostname={soundfontHostname}
              render={({ isLoading, playNote, stopNote }) => (
                <PianoWithRecording
                  recording={recording}
                  setRecording={setRecording}
                  noteRange={noteRange}
                  width={300}
                  playNote={playNote}
                  stopNote={stopNote}
                  disabled={isLoading}
                  keyboardShortcuts={keyboardShortcuts}
                />
              )}
            />
          </div>
          <div className="mt-5">
            <button onClick={onClickPlay}>Play</button>
            <button onClick={onClickStop}>Stop</button>
            <button onClick={onClickClear}>Clear</button>
          </div>
          <div className="mt-5">
            <strong>Recorded notes</strong>
            <div>{JSON.stringify(recording.events)}</div>
          </div>
        </div>
      );
  }
// }

export default DisplayPiano