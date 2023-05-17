package datastore

import (
	"crypto/tls"
	"fmt"
	"os"

	"github.com/go-redis/redis/v8"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"uOBCServer/pkg/models"
)

var (
	DB    *gorm.DB
	cache *redis.Client
)

func InitDB() {
	var err error

	// Connect to PostgreSQL
	dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s sslmode=require TimeZone=UTC",
		os.Getenv("DB_HOST"),
		os.Getenv("DB_USER"),
		os.Getenv("DB_PASSWORD"),
		os.Getenv("DB_NAME"),
		os.Getenv("DB_PORT"),
	)
	DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("failed to connect to PostgreSQL database")
	}
	fmt.Println("Connected to PostgreSQL database succesfully")

	err = DB.AutoMigrate(&models.GormPerson{}, &models.GormClassData{})
	if err != nil {
		panic("failed to migrate PostgreSQL database schema")
	}
	fmt.Println("Database schema migrated successfully")

	// Connect to Redis
	cache = redis.NewClient(&redis.Options{
		Addr:      os.Getenv("REDIS_HOST") + ":" + os.Getenv("REDIS_PORT"),
		Password:  os.Getenv("REDIS_PASSWORD"),
		DB:        0,
		TLSConfig: &tls.Config{InsecureSkipVerify: true},
	})

	_, err = cache.Ping(cache.Context()).Result()
	if err != nil {
		panic("failed to connect to Redis")
	}
	fmt.Println("Connected to Redis cache succesfully")
}
