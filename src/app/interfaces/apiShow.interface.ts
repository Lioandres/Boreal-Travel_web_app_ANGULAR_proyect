import { Excursion } from "./apiShowList.interface";


export interface ApiShow {
    status:   number;
    error:    boolean;
    messages: string;
    data:     Excursion;
}





