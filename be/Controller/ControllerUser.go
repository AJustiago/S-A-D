package Controller

import (
	"database/sql"
	"net/http"
	"strconv"

	repo "hackjakarta/Repository/users"

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
