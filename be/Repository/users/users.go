package users

import (
	Config "hackjakarta/Config"
	"hackjakarta/Dto"
)

func DetailUser(id int64) (result User, err error) {
	const query = `SELECT
						A.id,
						A.first_name,
						A.last_name,
						A.username,
						A.email
					FROM public.users A 
					WHERE A.id = $1`

	row := Config.DB.QueryRow(query, id)

	if err = row.Scan(
		&result.Id,
		&result.FirstName,
		&result.LastName,
		&result.Username,
		&result.Email,
	); err != nil {
		return
	}

	return
}

func RegisterUser(params Dto.RegisterUser) (result bool, err error) {
	const query = `INSERT INTO public.users (
						first_name,
						last_name,
						username,
						email,
						password
					)
					VALUES ($1, $2, $3, $4, $5)`

	tx, err := Config.DB.Begin()
	if err != nil {
		return false, err
	}
	row := tx.QueryRow(
		query,
		params.FirstName,
		params.LastName,
		params.Username,
		params.Email,
		params.Password,
	)

	if err = row.Scan(
		&result,
	); err != nil {
		tx.Rollback()
		return
	}

	return
}

func CheckEmail(email string) (exist bool, err error) {
	const query = `SELECT EXISTS(SELECT 1 FROM users WHERE email = $1)`
	row := Config.DB.QueryRow(query, email)

	if err = row.Scan(&exist); err != nil {
		return
	}
	return
}

func CheckUsername(username string) (exist bool, err error) {
	const query = `SELECT EXISTS(SELECT 1 FROM users WHERE username = $1)`
	row := Config.DB.QueryRow(query, username)

	if err = row.Scan(&exist); err != nil {
		return
	}
	return
}
