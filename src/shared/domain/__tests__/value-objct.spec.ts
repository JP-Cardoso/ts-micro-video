import { ValueObject } from "../value-object";

class StringValueObject extends ValueObject {
    constructor(readonly value: string) {
        super();
    };
}

describe('ValueObject unit test', () => {

    test('should be equals', () => {
        const vo1 = new StringValueObject('test');
        const vo2 = new StringValueObject('test');
        expect(vo1.equals(vo2)).toBe(true);
    });
})