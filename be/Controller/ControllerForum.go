package Controller

import (
	"database/sql"
	"net/http"
	"strconv"

	"hackjakarta/Dto"
	repo "hackjakarta/Repository/forums"
	utils "hackjakarta/Utils"

	"github.com/gin-gonic/gin"
)

func BrowseForum(c *gin.Context) {
	var params Dto.BrowseForum

	params.Building = c.Query("building")
	params.Search = c.Query("search")

	browse, err := repo.BrowseForum(params)
	if err != nil {
		if err == sql.ErrNoRows {
			c.JSON(http.StatusNotFound, gin.H{"status": "error", "message": "Data not found"})
		} else {
			c.JSON(http.StatusInternalServerError, gin.H{"status": "error", "message": err.Error()})
		}
		return
	}

	c.JSON(http.StatusOK, gin.H{"status": "success", "forum": browse})
}

func DetailForum(c *gin.Context) {
	idParam := c.Param("id")
	id, err := strconv.ParseInt(idParam, 10, 64)
	if err != nil {
		c.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"status": "error", "message": "Invalid ID format"})
		return
	}

	detail, err := repo.DetailForum(id)
	if err != nil {
		if err == sql.ErrNoRows {
			c.JSON(http.StatusNotFound, gin.H{"status": "error", "message": "Data not found"})
		} else {
			c.JSON(http.StatusInternalServerError, gin.H{"status": "error", "message": err.Error()})
		}
		return
	}

	replies, err := repo.DetailForumReplies(id)
	if err != nil {
		if err == sql.ErrNoRows {
			c.JSON(http.StatusNotFound, gin.H{"status": "error", "message": "Data not found"})
		} else {
			c.JSON(http.StatusInternalServerError, gin.H{"status": "error", "message": err.Error()})
		}
		return
	}

	detail.Replies = replies

	c.JSON(http.StatusOK, gin.H{"status": "success", "forum": detail})
}

func DetailReplies(c *gin.Context) {
	idParam := c.Param("id")
	id, err := strconv.ParseInt(idParam, 10, 64)
	if err != nil {
		c.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"status": "error", "message": "Invalid ID format"})
		return
	}

	detail, err := repo.DetailReplies(id)
	if err != nil {
		if err == sql.ErrNoRows {
			c.JSON(http.StatusNotFound, gin.H{"status": "error", "message": "Data not found"})
		} else {
			c.JSON(http.StatusInternalServerError, gin.H{"status": "error", "message": err.Error()})
		}
		return
	}

	c.JSON(http.StatusOK, gin.H{"status": "success", "replies": detail})
}

func CreateForum(c *gin.Context) {
	var params Dto.CreateForum
	if err := c.ShouldBindJSON(&params); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"status": "error", "message": err.Error()})
		return
	}

	// Input validation with validator
	if err := utils.Validate.Struct(params); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"status": "error", "message": err.Error()})
		return
	}

	// Get userId from jwt middleware
	userId, exists := c.Get("userId")
	if !exists {
		c.JSON(http.StatusInternalServerError, gin.H{"status": "error", "message": "Failed to get user Id"})
		return
	}

	params.UserId = userId.(int64)

	result, err := repo.CreateForum(params)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"status": "error", "message": err.Error()})
		return
	}

	if !result {
		c.JSON(http.StatusInternalServerError, gin.H{"status": "error", "message": "Failed to create forum"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"status": "success", "message": "Forum created successfully"})
}

func CreateReply(c *gin.Context) {
	var params Dto.CreateReply
	if err := c.ShouldBindJSON(&params); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"status": "error", "message": err.Error()})
		return
	}

	// Input validation with validator
	if err := utils.Validate.Struct(params); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"status": "error", "message": err.Error()})
		return
	}

	// Get userId from jwt middleware
	userId, exists := c.Get("userId")
	if !exists {
		c.JSON(http.StatusInternalServerError, gin.H{"status": "error", "message": "Failed to get userId"})
		return
	}

	params.UserId = userId.(int64)

	result, err := repo.CreateReply(params)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"status": "error", "message": err.Error()})
		return
	}

	if !result {
		c.JSON(http.StatusInternalServerError, gin.H{"status": "error", "message": "Failed to create forum"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"status": "success", "message": "Forum created successfully"})
}
