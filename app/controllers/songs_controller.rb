class SongsController < ApplicationController
    
    def index
        render json: Song.all, status: :ok
    end

    def show
        song = Song.find(params[:id])
        render json: song, status: :ok
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

    def destroy
        song = Song.find(params[:id])
        song.destroy
        render json: song
        head :no_content
    end

    private

    def song_params
        params.permit(:name, :user_id, notes: [:midiNumber, :time, :duration])
    end
end
