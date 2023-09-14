import { FieldsErrors } from "./class-validator-interface";

export class EnityValidationError extends Error {
    constructor(public error: FieldsErrors, message = 'Validation Error') {
        super(message);
    }

    count() {
        return Object.keys(this.error).length;
    }
}