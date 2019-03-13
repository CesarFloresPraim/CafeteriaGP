import {Product} from './product.model';

export class Order {
  _id: string;
  user: string;
  droom: string;
  description: string;
  products: Array<Product>;
  dateTime: string;
}
