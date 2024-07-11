import { Deficiencies } from "../../enums/Deficiencies";
import { Education } from "../../enums/Education";
import { UserRoles } from "./UserRoles";

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


export interface Candidates extends Users {
    interest: string[];
    education: Education;
    deficiencies: Deficiencies[];
    minimumSalary: number;
    maximumSalary: number;
    desiredRole: string;
    location: string;
    description: string;
}

export interface Recruiters extends Users {
    jobPosition: string[],
}