export type CategoryConstructorProps = {
    category_id?: string;
    name: string;
    description?: string | null;
    is_active?: boolean
    creted_at?: Date;
}

export type CategoryCreateCommand = {
    name: string;
    description?: string | null;
    is_active?: boolean;
}

export class Category {
    category_id: string;
    name: string;
    description: string | null;
    is_active: boolean;
    creted_at: Date;

    constructor(props: CategoryConstructorProps) {
        this.category_id = props.category_id;
        this.name = props.name;
        this.description = props.description ?? null;
        this.is_active = props.is_active ?? true;
        this.creted_at = props.creted_at ?? new Date();
    }

    //factory method
    static create(props: CategoryCreateCommand): Category {
        return new Category(props)
    }

    changeName(name: string): void {
        this.name = name;
    }

    changeDescription(description: string): void {
        this.description = description;
    }

    activate() {
        this.is_active = true;
    }

    deactivate() {
        this.is_active = false;
    }

    toJSON() {
        return {
            category_id: this.category_id,
            name: this.name,
            description: this.description,
            is_active: this.is_active,
            creted_at: this.creted_at
        };
    }

}