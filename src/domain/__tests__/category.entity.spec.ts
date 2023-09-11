import { Category } from "../category.entity"

describe('category unit tests', () => {

    test('constructor', () => {
        const category = new Category({
            name: 'Movie'
        })
        expect(category.category_id).not.toBeDefined();
        expect(category.name).toBe('Movie');
        expect(category.description).toBeNull();
        expect(category.is_active).toBeTruthy();
        expect(category.creted_at).toBeInstanceOf(Date);

    })
})