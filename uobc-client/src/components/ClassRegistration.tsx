'use client'
import React, { useState, useEffect } from 'react';
import axiosInstance from '@/app/axiosInstance';
import axios from 'axios';

// Types for class options and form da

type FormData = {
    firstName: string;
    lastName: string;
    email: string;
};

type Person = {
    id: string;
    email: string;
    first_name: string;
    last_name: string;
    registration_time: number;
}

type Class = {
    id: string;
    name: string;
    time: number;
    max_capacity: number;
    registration: Person[];
    waitlist: Person[];
}

// Dummy image URLs - replace with actual URLs or logic to fetch images
const classImages: string[] = [
    'https://placehold.co/400x400/orange/white',
    'https://placehold.co/400x400/blue/white',
    'https://placehold.co/400x400/red/white',
];

const ClassRegistrationForm = () => {
    const [selectedClass, setSelectedClass] = useState<Class | null>(null);
    const [formData, setFormData] = useState<FormData>({ firstName: '', lastName: '', email: '' });
    const [selectedImage, setSelectedImage] = useState<string>('');
    const [registrationStatus, setRegistrationStatus] = useState<string>(' ');
    const [errors, setErrors] = useState<FormData>({ firstName: '', lastName: '', email: '' });
    const [classes, setClasses] = useState<Class[]>([]);

    useEffect(() => {

        const fetchClasses = async () => {
            try {
                console.log('here')
                const response = await axiosInstance.get('/getclasses');
                setClasses(response.data);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching classes:', error);
            }
        };
        fetchClasses();
        const randomImage = classImages[Math.floor(Math.random() * classImages.length)];
        setSelectedImage(randomImage);
    }, []);

    const handleClassChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selected = classes.find(c => c.id === event.target.value);
        setSelectedClass(selected || null);
        setRegistrationStatus(' ')
        if (selected) {
            const randomImage = classImages[Math.floor(Math.random() * classImages.length)];
            setSelectedImage(randomImage);
        } else {
            setSelectedImage('');
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
        // Clear the error for a specific field when the user starts typing
        setErrors({ ...errors, [event.target.name]: '' });
        setRegistrationStatus(' ')
    };

    const handleEnroll = async () => {
        // Check if all fields are filled
        const emptyErrors = {
            firstName: formData.firstName ? '' : 'First Name is required',
            lastName: formData.lastName ? '' : 'Last Name is required',
            email: formData.email ? '' : 'Email is required',
        };

        if (!formData.firstName || !formData.lastName || !formData.email) {
            setErrors(emptyErrors);
            return;
        }

        const registrationData = {
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            class_id: selectedClass ? selectedClass.id : '',
        };
    
        try {
            // Call the enroll API endpoint
            const response = await axiosInstance.post('/register', registrationData);
            setRegistrationStatus(response.data.message); // Display success message
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                // Handle HTTP errors from the server
                setRegistrationStatus(error.response.data.detail);
            } else {
                // Handle other errors (network error, etc.)
                setRegistrationStatus('An error occurred while enrolling. :(');
            }
        }
    
        // Clear form fields after submission
        setFormData({ firstName: '', lastName: '', email: '' });
        setErrors({ firstName: '', lastName: '', email: '' });
    };

    const renderErrorMessage = (errorMessage: string) => (
        <div className="text-xs text-red-600">
            {errorMessage ? <p>{errorMessage}</p> : <span>&nbsp;</span>}
        </div>
    );

    const formatUnixTimestamp = (unixTimestamp: number): string => {
        const date = new Date(unixTimestamp * 1000);

        const dateOptions: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric' };
        const timeOptions: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit', hour12: true };

        const formattedDate = date.toLocaleDateString('en-US', dateOptions);
        let formattedTime = date.toLocaleTimeString('en-US', timeOptions);

        // Remove leading zero from the hour
        formattedTime = formattedTime
            .split(':') // Split by colon to isolate hours, minutes, and AM/PM
            .map((part, index) => (index === 0 ? String(parseInt(part)) : part)) // Parse the hour string as a number to remove leading zero
            .join(':'); // Join back the parts

        return `${formattedDate}, ${formattedTime}`;
    };

    return (
        <div className="block rounded-lg shadow-lg bg-white max-w-md mx-auto mb-5">
            <div
                className="h-40 bg-cover bg-center rounded-t-lg overflow-hidden flex items-center justify-center"
                style={{
                    backgroundImage: `url(${selectedImage})`,
                    filter: 'grayscale(100%)',
                    opacity: '0.5'
                }}
            >
            </div>
            <p className='text-transparent text-xs'></p>
            <div className="p-6">
                {/* Dropdown for class selection */}
                <div className="mb-4">
                    <label htmlFor="class" className="block text-gray-700 text-sm font-bold mb-2">Select a class:</label>
                    <select
                        id="class"
                        name="class"
                        onChange={handleClassChange}
                        value={selectedClass?.id || ''}
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    >
                        <option value="" disabled>Select a class</option>
                        {classes.map((classOption) => (
                            <option key={classOption.id} value={classOption.id}>
                                {classOption.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-4">
                    <p className="text-gray-600">
                        Time: {
                            selectedClass?.time 
                            ? formatUnixTimestamp(selectedClass.time) 
                            : ''
                        }
                    </p>
                    {/* <p className="text-gray-600">Location: {selectedClass?.location}</p> */}
                    <p className="text-gray-600">
                        Slots Available: {
                            selectedClass && selectedClass.max_capacity !== undefined && selectedClass.registration
                            ? Math.max(selectedClass.max_capacity - selectedClass.registration.length, 0)
                            : ''
                        }
                    </p>
                </div>
                {/* Registration form */}
                <div className="mb-4 space-y-1">
                    <div>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-red-900 focus:border-red-900"
                        />
                        {renderErrorMessage(errors.firstName)}
                    </div>
                    <div>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-red-900 focus:border-red-900"
                        />
                        {renderErrorMessage(errors.lastName)}
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-red-900 focus:border-red-900"
                        />
                        {renderErrorMessage(errors.email)}
                    </div>
                </div>

                {/* Enroll button */}
                <div className="mb-4">
                    <button
                        onClick={handleEnroll}
                        className="w-full bg-red-900 border-2 text-white border-transparent font-medium py-2 px-4 rounded transition-all hover:bg-transparent hover:text-red-900 hover:border-red-900 active:scale-95"
                    >
                        {selectedClass?.registration.length === selectedClass?.max_capacity ? 'Join Waitlist' : 'Enroll'}
                    </button>
                </div>

                {/* Fixed height div for registration status message */}
                <div className="h-6">
                    <p className="text-center text-red-900 font-semibold">{registrationStatus}</p>
                </div>
            </div>
        </div>
    );
};

export default ClassRegistrationForm;