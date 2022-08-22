// To parse this data:
//
//   import { Convert, Show } from "./file";
//
//   const show = Convert.toShow(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

import { ExcursionTemplate } from './apiTemplateShowList.interface';

export interface ApiTemplateShow {
    status:   number;
    error:    boolean;
    messages: string;
    data:     ExcursionTemplate;
}



