class CreateSongs < ActiveRecord::Migration[6.1]
  def change
    create_table :songs do |t|
      t.string :notes, array: true, default: []
      t.string :name

      t.timestamps
    end
  end
end
