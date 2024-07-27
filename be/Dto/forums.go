package Dto

type BrowseForum struct {
	Search   string `json:"search"`
	Building string `json:"content"`
}

type CreateForum struct {
	Title    string `json:"title" validate:"required"`
	Content  string `json:"content" validate:"required"`
	Building string `json:"building" validate:"required"`
	UserId   int64  `json:"userId"`
}

type CreateReply struct {
	ForumId int64  `json:"forumId" validate:"required"`
	ReplyId *int64 `json:"replyId"`
	Content string `json:"content" validate:"required"`
	UserId  int64  `json:"userId"`
}
