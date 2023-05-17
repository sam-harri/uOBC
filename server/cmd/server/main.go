package main

import (
	"github.com/joho/godotenv"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"log"
	"uOBCServer/pkg/datastore"
	"uOBCServer/pkg/graphql"
)

func main() {

	err := godotenv.Load(".env")
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	e := echo.New()

	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	datastore.InitDB()

	// Seed the sample data
	datastore.SeedSampleData()

	// Set up the GraphQL server
	graphql.SetupGraphQL(e)

	e.Start(":8080")
}
