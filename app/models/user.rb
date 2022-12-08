class User < ApplicationRecord
    has_many :songs
    has_many :comments, through: :songs

    has_secure_password
end
