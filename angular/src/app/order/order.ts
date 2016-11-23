import { Meal } from '../meal/meal';

export class Order {
    id: number;
    status: string;
    restaurant: string;
    owner: string;
    'created-at': string;
    'ordered-at': string;
    'delivered-at': string;
    meals: Meal[];
}
