export interface APIToken {
    status:  number;
    error:   boolean;
    message: string;
    data:    Data;
}

export interface Data {
    token: string;
}
