package models

type GormPerson struct {
	ID             uint           `gorm:"primaryKey"`
	Email          string         `gorm:"unique;not null"`
	Name           string         `gorm:"not null"`
	RegistrationID string         `gorm:"not null"`
	ClassDataID    *uint          `gorm:"type:int"`
	Waitlist       bool           `gorm:"default:false"`
	ClassData      *GormClassData `gorm:"foreignKey:ClassDataID"`
}

type GormClassData struct {
	ID               uint `gorm:"primaryKey"`
	Location         *string
	Date             *string
	Slots            *int
	RegisteredNumber *int
	WaitlistSize     *int
	Persons          []GormPerson `gorm:"foreignKey:ClassDataID"`
}

func (GormPerson) TableName() string {
	return "person"
}

func (GormClassData) TableName() string {
	return "class_data"
}
