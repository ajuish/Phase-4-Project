class CommentSerializer < ActiveModel::Serializer
  attributes :id, :description, :user_id, :song_id
end
