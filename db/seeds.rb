# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: 'Nils')
User.create(username: 'Adam')
User.create(username: 'Alex')


Song.create(name: 'Abcd 1234', notes: ["hey", 345])
Song.create(name: 'Hello world', notes: ["Abcd", 1234])

Comment.create(description: 'Fantastic', user_id: 1, song_id: 2)
Comment.create(description: 'Terrible', user_id: 2, song_id:1)