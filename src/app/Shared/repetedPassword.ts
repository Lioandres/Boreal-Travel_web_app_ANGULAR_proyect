

import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function repetedPasswords(): ValidatorFn {
    return (form: AbstractControl): ValidationErrors |null => {


   
    const password= form.get("user_password")?.value;

    const passwordRepete = form.get("repetedPassword")?.value;

     return   (password===passwordRepete) ? null : {'repetedPassword':true};
}
}


