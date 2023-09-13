import { InvalidUuidError, Uuid } from "../uuid.vo";
import { validate as uuidValidate } from 'uuid';
describe('Uuid Unit Tests', () => {

    const validateSpy = jest.spyOn(Uuid.prototype as any, 'validate');

    it('should throw error when uuid is invalid', () => {
        expect(() => {
            new Uuid('invalid-uuid')
        }).toThrowError(new InvalidUuidError());
        expect(validateSpy).toHaveBeenCalledTimes(1);
    });

    it('should create a valid uuid', () => {
        const uuid = new Uuid();
        expect(uuid.id).toBeDefined();
        expect(uuidValidate(uuid.id)).toBeTruthy();
        expect(validateSpy).toHaveBeenCalledTimes(1);
    });

    it('should accept a valid uuid', () => {
        const uuid = new Uuid('a294324a-3f75-4b1c-a155-d63c2cb2bb73');
        expect(uuid.id).toBe('a294324a-3f75-4b1c-a155-d63c2cb2bb73');
        expect(validateSpy).toHaveBeenCalledTimes(1);
    });
})