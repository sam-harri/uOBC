package datastore

import (
	"math/rand"
	"strconv"
	"time"
	"uOBCServer/pkg/models"
)

func SeedSampleData() {
	var classes []models.GormClassData
	for i := 1; i <= 4; i++ {
		location := "Classroom " + strconv.Itoa(i)
		date := time.Now().AddDate(0, 0, i*7).Format(time.RFC3339)
		slots := 20
		zero := 0

		classData := models.GormClassData{
			Location:         &location,
			Date:             &date,
			Slots:            &slots,
			RegisteredNumber: &zero,
			WaitlistSize:     &zero,
		}

		DB.Create(&classData)
		classes = append(classes, classData)
	}

	for i := 1; i <= 100; i++ {
		randomClassIndex := rand.Intn(len(classes))
		selectedClass := classes[randomClassIndex]
		person := &models.GormPerson{
			Name:           "personname" + strconv.Itoa(i),
			Email:          "personemail" + strconv.Itoa(i) + "@example.com",
			RegistrationID: "reg" + strconv.Itoa(i),
			ClassDataID:    &selectedClass.ID,
			Waitlist:       false,
		}
		if *selectedClass.RegisteredNumber < *selectedClass.Slots {
			*selectedClass.RegisteredNumber++
			DB.Model(&selectedClass).Update("registered_number", selectedClass.RegisteredNumber)
		} else {
			*selectedClass.WaitlistSize++
			person.Waitlist = true
			DB.Model(&selectedClass).Update("waitlist_size", selectedClass.WaitlistSize)
		}

		DB.Create(person)
	}
}
