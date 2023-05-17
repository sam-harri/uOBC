// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package models

type ClassData struct {
	ID               string  `json:"id"`
	Location         *string `json:"location,omitempty"`
	Date             *string `json:"date,omitempty"`
	Slots            *int    `json:"slots,omitempty"`
	RegisteredNumber *int    `json:"registeredNumber,omitempty"`
	WaitlistSize     *int    `json:"waitlistSize,omitempty"`
}

type MoveFromWaitlistToRegisteredPayload struct {
	ClassData        *ClassData `json:"classData,omitempty"`
	RegisteredPerson *Person    `json:"registeredPerson,omitempty"`
	WaitlistedPerson *Person    `json:"waitlistedPerson,omitempty"`
}

type Person struct {
	ID             string  `json:"id"`
	Email          string  `json:"email"`
	Name           string  `json:"name"`
	RegistrationID string  `json:"registrationID"`
	ClassDataID    *string `json:"classDataID,omitempty"`
	Waitlist       bool    `json:"waitlist"`
}

type RegisterClassInput struct {
	PersonID    string `json:"personID"`
	ClassDataID string `json:"classDataID"`
}

type RegisterClassPayload struct {
	Person    *Person    `json:"person,omitempty"`
	ClassData *ClassData `json:"classData,omitempty"`
}

type UnregisterClassInput struct {
	PersonID    string `json:"personID"`
	ClassDataID string `json:"classDataID"`
}

type UnregisterClassPayload struct {
	Person    *Person    `json:"person,omitempty"`
	ClassData *ClassData `json:"classData,omitempty"`
}

type WaitlistClassInput struct {
	PersonID    string `json:"personID"`
	ClassDataID string `json:"classDataID"`
}

type WaitlistClassPayload struct {
	Person    *Person    `json:"person,omitempty"`
	ClassData *ClassData `json:"classData,omitempty"`
}
