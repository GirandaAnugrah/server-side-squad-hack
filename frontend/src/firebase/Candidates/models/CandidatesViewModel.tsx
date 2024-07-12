import { UserRoles } from "../../auth/models/UserRoles";
import { Deficiencies } from "../../enums/Deficiencies";
import { Education } from "../../enums/Education";

export interface CandidatesViewModel {
    interest: string[] | [];
    education: Education | null;
    deficiencies: Deficiencies[] | [];
    minimumSalary: number | null;
    maximumSalary: number | null;
    desiredRole: string | null;
    location: string | null;
    description: string | null;
}