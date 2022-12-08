class SongSerializer < ActiveModel::Serializer
  attributes :id, :notes, :name, :user_id

  has_many :comments
end
