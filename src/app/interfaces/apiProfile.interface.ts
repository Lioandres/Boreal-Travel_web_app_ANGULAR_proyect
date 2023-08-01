export interface ApiProfile {
        status: number,
        error: boolean,
        message: string,
        data: {
            profile: {
                id: number,
                name: string,
                role: string
            }
        }
}