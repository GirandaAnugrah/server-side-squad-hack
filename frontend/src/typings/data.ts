import { User } from "firebase/auth";
import { Candidates, Recruiters } from "../firebase/auth/models/User";
import { UserRoles } from "../firebase/auth/models/UserRoles";

export interface MainSlice {
	initialLoad: boolean;
	userData: Recruiters | Candidates | null;
	masterUser: Users | null;
	userNow: string;

}

export interface Users {
    fullName: string;
    email: string;
    password: string;
    phoneNumber: string;
    birthdate: string;
    gender: boolean;
    province: string;
    district: string;
    street: string;
    role: UserRoles;
}

export interface LoginData {
	email: string;
	password: string;
}

export interface PersonalData {
	email: string;
	password: string;
	fullName: string;
	phone: string;
	age: string;
	gender: string;
	province: string;
	district: string;
	streetName: string;
	confirmPassword: string;
	role: string;
	minimumWage: number;
	maximumWage: number;
	description: string;
	skils: string[];
	deficiency: string[];
	education: string;
	jobPosition: string;
	firstJob: string;
	secJob: string;
}