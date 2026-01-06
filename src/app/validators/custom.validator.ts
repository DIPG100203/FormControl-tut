import { AbstractControl } from "@angular/forms";

export class CustomValidator {
    static validPasword(control: AbstractControl) {
        const value = control.value;
        if (!containsNumber(value)) {
            return { invalid_password: true}
        }
        return null;
    }

    static matchPasswords(control: AbstractControl) {
        const password = control.get('password')?.value;
        const confirmPassword = control.get('confirmPassword')?.value;

        if(password === confirmPassword) {
            return null;
        }
        return { match_passwords: true}
    }
}

function containsNumber(value: string) {
    return value.split('').find(v => isNumber(v)) !== undefined
}

function isNumber(value: any) {
    return !isNaN(parseInt(value, 10))
}