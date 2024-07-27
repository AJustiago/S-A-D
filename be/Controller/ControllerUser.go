package Controller

import (
	"database/sql"
	"net/http"
	"strconv"

	"hackjakarta/Dto"
	repo "hackjakarta/Repository/users"
	utils "hackjakarta/Utils"

	"github.com/gin-gonic/gin"
)

func DetailUser(c *gin.Context) {
	idParam := c.Param("id")
	id, err := strconv.ParseInt(idParam, 10, 64)
	if err != nil {
		c.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"status": "error", "message": "Invalid ID format"})
		return
	}

	detail, err := repo.DetailUser(id)
	if err != nil {
		if err == sql.ErrNoRows {
			c.JSON(http.StatusNotFound, gin.H{"status": "error", "message": "Data not found"})
		} else {
			c.JSON(http.StatusInternalServerError, gin.H{"status": "error", "message": err.Error()})
		}
		return
	}

	c.JSON(http.StatusOK, gin.H{"status": "success", "user": detail})
}

func RegisterUser(c *gin.Context) {
	var params Dto.RegisterUser
	if err := c.ShouldBindJSON(&params); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"status": "error", "message": err.Error()})
		return
	}

	// Validasi input menggunakan validator
	if err := utils.Validate.Struct(params); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"status": "error", "message": err.Error()})
		return
	}

	// Validasi unique email
	exist, err := repo.CheckEmail(params.Email)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"status": "error", "message": err.Error()})
		return
	}

	if exist {
		c.JSON(http.StatusBadRequest, gin.H{"status": "error", "message": "Email already regostered"})
		return
	}

	// Validasi unique username
	exist, err = repo.CheckUsername(params.Username)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"status": "error", "message": err.Error()})
		return
	}

	if exist {
		c.JSON(http.StatusBadRequest, gin.H{"status": "error", "message": "Username unavailable"})
		return
	}

	res, err := repo.RegisterUser(params)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"status": "error", "message": err.Error()})
		return
	}

	if !res {
		c.JSON(http.StatusInternalServerError, gin.H{"status": "error", "message": "Failed to register user"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"status": "success", "message": "User registered successfully"})
}
