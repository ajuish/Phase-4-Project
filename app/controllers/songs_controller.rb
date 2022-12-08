class SongsController < ApplicationController
    
    def index
        render json: Song.all, status: :ok
    end

    def create
        song = Song.new(
            name: song_params[:name], 
            user_id: song_params[:user_id],
            notes: JSON.parse(song_params[:notes].to_json)
            )
        song.save
        render json: song, status: :created
    end

    private

    def song_params
        params.permit(:name, :user_id, notes: [:midiNumber, :time, :duration])
    end
end
