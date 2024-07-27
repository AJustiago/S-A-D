package main

import (
	"time"

	Config "hackjakarta/Config"
	Controller "hackjakarta/Controller"

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

	api := route.Group("/hackjakarta")
	{
		// User API
		api.GET("/user/:id", Controller.DetailUser)
	}

	route.Run()
}
