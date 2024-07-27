package main

import (
	"time"

	Config "hackjakarta/Config"
	Controller "hackjakarta/Controller"
	"hackjakarta/middleware"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	route := gin.Default()

	route.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:4200", "https://8c5f-139-255-66-42.ngrok-free.app/"}, // Ubah sesuai kebutuhan
		AllowMethods:     []string{"GET", "POST", "PUT", "PATCH", "DELETE"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Accept", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))

	Config.ConnectDatabase()

	// User API
	user := route.Group("/user")
	{
		user.GET("/:id", Controller.DetailUser)
		user.POST("/register", Controller.RegisterUser)
		user.POST("/login", Controller.LoginUser)
	}

	// Forum API
	forum := route.Group("/forum")
	{
		forum.GET("/", Controller.BrowseForum)
		forum.GET("/:id", Controller.DetailForum)
		forum.GET("/reply/:id", Controller.DetailReplies)

		forum.Use(middleware.JWTAuthMiddleware())
		{
			forum.POST("/", Controller.CreateForum)
			forum.POST("/reply", Controller.CreateReply)
		}
	}

	route.Run(":8080")
}
