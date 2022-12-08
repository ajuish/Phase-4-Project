class SongsController < ApplicationController
    
    def create
        binding.pry
        song = Song.create(song_params)
        render json: song, status: :created
    end

    private

    def song_params
        params.permit(:name, notes: [:midiNumber, :time, :duration])
    end
end
