import React, { useState } from 'react';
import useRegister from './auth/hooks/useRegister';
import { Candidates, Recruiters } from './auth/models/User'; // Adjust path as per your setup
import { UserRoles } from './auth/models/UserRoles';
import { Education } from './enums/Education';

// Interface for the initial state of Candidates
const initialCandidateState: Candidates = {
    fullName: '',
    email: '',
    password: '',
    phoneNumber: '',
    birthdate: '',
    gender: true,
    province: '',
    district: '',
    street: '',
    role: UserRoles.CANDIDATES,
    interest: [],
    education: Education.NONE, // Example: Replace with your Education type
    deficiencies: [],
    minimumSalary: 0,
    maximumSalary: 0,
    desiredRole: '',
    location: '',
    description: '',
};

// Interface for the initial state of Recruiters
const initialRecruiterState: Recruiters = {
    fullName: '',
    email: '',
    password: '',
    phoneNumber: '',
    birthdate: '',
    gender: true,
    province: '',
    district: '',
    street: '',
    role: UserRoles.RECRUITERS,
    jobPosition: [],
};

const RegisterForm = () => {
    const [newUser, setNewUser] = useState<Candidates | Recruiters>(initialCandidateState);
    const [isRecruiter, setIsRecruiter] = useState(false); // State to toggle between candidate and recruiter
    const { loading, user, error, register } = useRegister();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await register(newUser);
        } catch (error) {
            console.error('Registration error:', error);
        }
    };

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setNewUser(prevUser => ({
            ...prevUser,
            [name]: name === 'birthdate' ? new Date(value) : value,
            ...(name === 'jobPosition' && { jobPosition: value.split(',') }),
            ...(name === 'interest' && { interest: value.split(',') }),
            ...(name === 'deficiencies' && { deficiencies: value.split(',') }),
        }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsRecruiter(e.target.checked);
        setNewUser(e.target.checked ? initialRecruiterState : initialCandidateState);
    };

    return (
        <form className='w-64 mx-auto flex flex-col' onSubmit={handleSubmit}>
            <input type="email" name="email" value={newUser.email} onChange={handleFormChange} placeholder="Email" required />
            <input type="password" name="password" value={newUser.password} onChange={handleFormChange} placeholder="Password" required />
            <input type="text" name="fullName" value={newUser.fullName} onChange={handleFormChange} placeholder="Full Name" />
            <input type="tel" name="phoneNumber" value={newUser.phoneNumber} onChange={handleFormChange} placeholder="Phone Number" />
            <input type="date" name="birthdate" value={newUser.birthdate ? new Date(newUser.birthdate).toISOString().split('T')[0] : ''} onChange={handleFormChange} placeholder="Birthdate" />
            <input type="text" name="province" value={newUser.province} onChange={handleFormChange} placeholder="Province" />
            <input type="text" name="district" value={newUser.district} onChange={handleFormChange} placeholder="District" />
            <input type="text" name="street" value={newUser.street} onChange={handleFormChange} placeholder="Street" />

            <div className="flex items-center mb-4">
                <input id="default-checkbox" type="checkbox" checked={isRecruiter} onChange={handleCheckboxChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium">Recruiter Role</label>
            </div>

            {!isRecruiter && (
                <div>
                    <input type="text" name="desiredRole" value={(newUser as Candidates).desiredRole} onChange={handleFormChange} placeholder="Desired Role" />
                    <input type="text" name="location" value={(newUser as Candidates).location} onChange={handleFormChange} placeholder="Location" />
                    <input name="description" value={(newUser as Candidates).description} onChange={handleFormChange} placeholder="Description" />
                    <input type="text" name="interest" value={(newUser as Candidates).interest} onChange={handleFormChange} placeholder="Interests (comma-separated)" />
                    <input type="text" name="deficiencies" value={(newUser as Candidates).deficiencies} onChange={handleFormChange} placeholder="Deficiencies (comma-separated)" />
                    <input type="number" name="minimumSalary" value={(newUser as Candidates).minimumSalary} onChange={handleFormChange} placeholder="Minimum Salary" />
                    <input type="number" name="maximumSalary" value={(newUser as Candidates).maximumSalary} onChange={handleFormChange} placeholder="Maximum Salary" />
                </div>
            )}

            {isRecruiter && (
                <div>
                    <input type="text" name="jobPosition" value={(newUser as Recruiters).jobPosition} onChange={handleFormChange} placeholder="Job Position(s)" />
                </div>
            )}

            <button type="submit" disabled={loading}>Register</button>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {user && <p>User registered successfully: {user.email}</p>}
        </form>
    );
};

export default RegisterForm;
