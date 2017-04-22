import { ProductReview } from './product-review';

export class Product {
    id: number;
    name: string;
    category: string;
    price: string;
    pictures: Array<string> = [];
    description: string;
    reviews: Array<ProductReview> = [];
}
