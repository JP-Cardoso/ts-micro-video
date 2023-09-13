import { ValueObject } from "../value-object";
import {v4 as uuidv4, validate as uuidValidate } from "uuid";

export class Uuid extends ValueObject {
    readonly id: string;

    constructor(id?: string) {
        super();
        this.id = id || uuidv4();
        this.validate();
    };

    private validate() {
        const isVAlid = uuidValidate(this.id);
        if (!isVAlid) {
            throw new InvalidUuidError();
        };
    }
};

export class InvalidUuidError extends Error {
    constructor(msg?: string) {
        super(msg || 'ID must be a valid UUID');
        this.name = "InvalidUuidError"
    }
} 