

export interface ApiShowList {
    status:   number;
    error:    boolean;
    messages: string;
    data:     Excursion[];
}

export interface Excursion {
    id_excursion?:           string;
    excursions_template_id: string;
    user_id:                string;
    num_max_people:         string;
    price:                  string;
    start:                  Date;
    end:                    Date;
    created_at?:             Date;
    updated_at?:             Date | null;
}
