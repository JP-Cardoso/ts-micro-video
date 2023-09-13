import { Uuid } from './../../../shared/domain/value-objects/uuid.vo';
import { Category, CategoryConstructorProps } from "../category.entity"

describe('category unit tests', () => {

    describe('constructor', () => {

        it('should create a category with default values', () => {
            let category = new Category({
                name: "Movie"
            });
            expect(category.category_id).toBeDefined();
            expect(category.name).toBe('Movie');
            expect(category.description).toBeNull();
            expect(category.is_active).toBeTruthy();
            expect(category.created_at).toBeInstanceOf(Date);
        });

        it('should create a category with name and description', () => {

            const input = {
                name: "Rambo",
                description: "Action Movie"
            };

            const category = new Category(input);
            expect(category.category_id).toBeInstanceOf(Uuid);
            expect(category.name).toBe('Rambo');
            expect(category.description).toBe("Action Movie");
            expect(category.is_active).toBeTruthy();
            expect(category.created_at).toBeInstanceOf(Date);
        });

        it('should create a category with all values', () => {
            const created_at = new Date
            const category = new Category(
                {
                    name: "Rambo",
                    description: "Action Movie",
                    is_active: false,
                    created_at
                }
            );
            expect(category.category_id).toBeInstanceOf(Uuid);
            expect(category.name).toBe('Rambo');
            expect(category.description).toBe("Action Movie");
            expect(category.is_active).toBeFalsy();
            expect(category.created_at).toEqual(created_at);
        });
    });

    describe('create command', () => {

        it('should create a category', () => {
            const category = Category.create({
                name: "Movie"
            });
            expect(category.category_id).toBeInstanceOf(Uuid);
            expect(category.name).toBe('Movie');
            expect(category.description).toBeNull();
            expect(category.is_active).toBeTruthy();
            expect(category.created_at).toBeInstanceOf(Date);
        });

        it('should create a category with name and description', () => {
            const input = {
                name: "Rambo",
                description: "Action Movie"
            };

            const category = Category.create(input);
            expect(category.category_id).toBeInstanceOf(Uuid);
            expect(category.name).toBe('Rambo');
            expect(category.description).toBe("Action Movie");
            expect(category.is_active).toBeTruthy();
            expect(category.created_at).toBeInstanceOf(Date);
        });

        it('should create a category with name, description and is_active', () => {
            const input = {
                name: "Rambo",
                description: "Action Movie",
                is_active: true
            };

            const category = Category.create(input);
            expect(category.category_id).toBeInstanceOf(Uuid);
            expect(category.name).toBe('Rambo');
            expect(category.description).toBe("Action Movie");
            expect(category.is_active).toBeTruthy();
            expect(category.created_at).toBeInstanceOf(Date);
        });
    });

    describe('testing methods', () => {

        it('should change name', () => {
            let category = new Category(
                { name: 'Rambo' }
            );
            expect(category.name).toBe('Rambo');

            category.changeName('Bambi');
            expect(category.name).toBe('Bambi')
        });

        it('should change description', () => {
            let category = new Category(
                { name: 'Rambo', description: "Movie Action" }
            );
            expect(category.name).toBe('Rambo');
            expect(category.description).toBe("Movie Action");

            category.changeDescription('War Movie');
            expect(category.name).toBe('Rambo');
            expect(category.description).toBe("War Movie");
        });

        it('should active a category', () => {
            let category = new Category(
                { name: 'Rambo', description: "Movie Action", is_active: false }
            );
            expect(category.is_active).toBeFalsy();

            category.activate();
            expect(category.is_active).toBeTruthy();
        });

        it('should deactive a category', () => {
            let category = new Category(
                { name: 'Rambo', description: "Movie Action", is_active: true }
            );
            expect(category.is_active).toBeTruthy();

            category.deactivate();
            expect(category.is_active).toBeFalsy();

        });
    });

    describe('category_id field', () => {
        const arrange = [
            { category_id: null }, { category_id: undefined }, { category_id: new Uuid() }
        ];

        test.each(arrange)('id = %j', ({ category_id }) => {
            const category = new Category(
                { name: "Movie", category_id: category_id as any }
            );
            expect(category.category_id).toBeInstanceOf(Uuid);
            if (category_id instanceof Uuid) {
                expect(category.category_id).toBe(category_id);
            };
        })
    })
})