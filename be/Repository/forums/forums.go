package forums

import (
	Config "hackjakarta/Config"
)

func DetailForum(id int64) (result Forum, err error) {
	const query = `SELECT
						A.id,
						A.title,
						A.content,
						A.building,
						A.user_id,
						A.created_time
					FROM public.forums A 
					WHERE A.id = $1`

	row := Config.DB.QueryRow(query, id)

	if err = row.Scan(
		&result.Id,
		&result.Title,
		&result.Content,
		&result.Building,
		&result.UserId,
		&result.CreatedTime,
	); err != nil {
		return
	}

	return
}

func DetailForumReplies(forumId int64) (result []ForumReply, err error) {
	var replyData ForumReply
	const query = `SELECT
						A.id,
						A.forum_id,
						A.reply_id,
						A.content,
						A.user_id,
						A.created_time,
						(SELECT COUNT(*) FROM replies A1 WHERE A1.reply_id = A.id) AS reply_count
					FROM public.replies A
					WHERE A.forum_id = $1 AND A.reply_id IS NULL
					ORDER BY A.created_time DESC`
	rows, err := Config.DB.Query(query, forumId)
	if err != nil {
		return
	}

	defer rows.Close()

	for rows.Next() {
		if err = rows.Scan(
			&replyData.Id,
			&replyData.ForumId,
			&replyData.ReplyId,
			&replyData.Content,
			&replyData.UserId,
			&replyData.CreatedTime,
			&replyData.ReplyCount,
		); err != nil {
			return
		}
		result = append(result, replyData)
	}

	return
}

func DetailReplies(replyId int64) (result []ForumReply, err error) {
	var replyData ForumReply
	const query = `SELECT
						A.id,
						A.forum_id,
						A.reply_id,
						A.content,
						A.user_id,
						A.created_time,
						(SELECT COUNT(*) FROM replies A1 WHERE A1.reply_id = A.id) AS reply_count
					FROM public.replies A
					WHERE A.reply_id = $1
					ORDER BY A.created_time DESC`
	rows, err := Config.DB.Query(query, replyId)
	if err != nil {
		return
	}

	defer rows.Close()

	for rows.Next() {
		if err = rows.Scan(
			&replyData.Id,
			&replyData.ForumId,
			&replyData.ReplyId,
			&replyData.Content,
			&replyData.UserId,
			&replyData.CreatedTime,
			&replyData.ReplyCount,
		); err != nil {
			return
		}
		result = append(result, replyData)
	}

	return
}
