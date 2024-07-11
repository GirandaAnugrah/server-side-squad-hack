export interface MainSlice {
	initialLoad: boolean;

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
}