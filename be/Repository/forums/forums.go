package forums

import (
	Config "hackjakarta/Config"
	"hackjakarta/Dto"
)

func DetailForum(id int64) (result Forum, err error) {
	const query = `SELECT
						A.id,
						A.title,
						A.content,
						A.building,
						A.user_id,
						A.created_time,
						(SELECT COUNT(*) FROM replies A1 WHERE A1.forum_id = A.id AND A1.reply_id IS NULL) AS reply_count
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
		&result.ReplyCount,
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

func CreateForum(params Dto.CreateForum) (result bool, err error) {
	const query = `INSERT INTO public.forums (
						title,
						content,
						building,
						user_id
					)
					VALUES ($1, $2, $3, $4)`

	tx, err := Config.DB.Begin()
	if err != nil {
		return false, err
	}
	defer func() {
		if err != nil {
			tx.Rollback()
		} else {
			err = tx.Commit()
		}
	}()

	_, err = tx.Exec(
		query,
		params.Title,
		params.Content,
		params.Building,
		params.UserId,
	)
	if err != nil {
		return false, err
	}

	return true, nil
}

func CreateReply(params Dto.CreateReply) (result bool, err error) {
	const query = `INSERT INTO public.replies (
						forum_id,
						reply_id,
						content,
						user_id
					)
					VALUES ($1, $2, $3, $4)`

	tx, err := Config.DB.Begin()
	if err != nil {
		return false, err
	}
	defer func() {
		if err != nil {
			tx.Rollback()
		} else {
			err = tx.Commit()
		}
	}()

	_, err = tx.Exec(
		query,
		params.ForumId,
		params.ReplyId,
		params.Content,
		params.UserId,
	)
	if err != nil {
		return false, err
	}

	return true, nil
}
