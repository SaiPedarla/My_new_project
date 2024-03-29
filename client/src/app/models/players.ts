export class Players {
    _id?: string | null;
    name: string;
    category: string;
    location: string;
    price: number;
    dateCreation?: string;

    constructor(
        name: string,
        category: string,
        location: string,
        price: number
    ) {
        this.name = name;
        this.category = category;
        this.location = location;
        this.price = price;
    }
}
