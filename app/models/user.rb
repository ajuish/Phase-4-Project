class User < ApplicationRecord
    has_many :comments
    has_many :songs, through: :comments
end
