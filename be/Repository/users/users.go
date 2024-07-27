package users

import (
	Config "hackjakarta/Config"
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
