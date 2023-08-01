export interface ApiUserList {
    status:   number;
    error:    boolean;
    messages: string;
    data:     ApiUser[];
}
export interface ApiUser {

    id_user: number,
    user_name: string,
    user_email: string,
    user_password: string,
    user_role: string,
    created_at: Date,
    updated_at: Date
}
