class SongsController < ApplicationController
    
    def create
        song = Song.create(song_params)
        render json: song, status: :created
    end

    private

    def song_params
        params.permit(:name, :user_id, notes: [:midiNumber, :time, :duration])
    end
end
