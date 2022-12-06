# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts 'Destroying seeds...'
Comment.destroy_all
User.destroy_all
Song.destroy_all

User.create(username: 'Nils', password: "word", email: "nils@gmail.com")
User.create(username: 'Adam', password: "pass", email: "adam@gmail.com" )
User.create(username: 'Alex', password: "password", email:"alex@gmail.com")

Song.create(name: 'Abcd 1234', notes: ["hey", 345])
Song.create(name: 'Hello world', notes: ["Abcd", 1234])

Comment.create(description: 'Fantastic', user_id: 1, song_id: 2)
Comment.create(description: 'Terrible', user_id: 2, song_id:1)