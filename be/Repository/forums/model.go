package forums

import "time"

type Forum struct {
	Id          int64        `json:"id"`
	Title       string       `json:"title"`
	Content     string       `json:"content"`
	Building    string       `json:"building"`
	UserId      int64        `json:"userId"`
	Username    string       `json:"username"`
	CreatedTime time.Time    `json:"createdTime"`
	ReplyCount  int16        `json:"replyCount"`
	Replies     []ForumReply `json:"replies"`
}

type ForumReply struct {
	Id          int64     `json:"id"`
	ForumId     int64     `json:"forumId"`
	ReplyId     *int64    `json:"replyId"`
	Content     string    `json:"content"`
	UserId      int64     `json:"userId"`
	Username    string    `json:"username"`
	CreatedTime time.Time `json:"createdTime"`
	ReplyCount  int16     `json:"replyCount"`
}
