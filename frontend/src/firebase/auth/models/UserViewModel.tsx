import { Users } from "./User";


export interface userViewModel {
    loading: boolean,
    user: Users | null,
    error: string | null,
}

