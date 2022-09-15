export interface ExcursionAdd {
    id_excursion:           string;
    excursions_template_id: string;
    user_id:                string;
    num_max_people:         string;
    price:                  string;
    start:                  string;
    end:                    string;
    created_at?:            Date;
    updated_at?:            Date | null;
}