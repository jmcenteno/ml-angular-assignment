import { Product } from '../../../products/product';
import { TechSpecs } from './tech-specs';

export class Spaceship extends Product {
    manufacturer: string;
    specs: TechSpecs;
}
