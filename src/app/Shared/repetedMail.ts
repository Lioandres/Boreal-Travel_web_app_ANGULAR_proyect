

import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function repetedMails(): ValidatorFn {
    return (form: AbstractControl): ValidationErrors |null => {


   
    const email= form.get("email")?.value;

    const emailRepete = form.get("emailRepete")?.value;

     return   (email===emailRepete) ? null : {'emailRepete':true};
}
}