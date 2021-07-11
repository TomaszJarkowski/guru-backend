import { IOrders } from './../interface/models/orders.interface';

export type IOrderRequest = Omit<IOrders, 'date'>;
