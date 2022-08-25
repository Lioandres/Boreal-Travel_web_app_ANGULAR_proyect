
export interface ApiTemplateShowList {
    status:   number;
    error:    boolean;
    messages: string;
    data:     ExcursionTemplate[];
}

export interface ExcursionTemplate {
    id_excursion_template?:  string;
    title:                  string;
    img:                    string;
    type:                   string;
    description:            string;
    price_default:          string;
    max_num_people_default: string;
}

