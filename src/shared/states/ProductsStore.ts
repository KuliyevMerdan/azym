import { observable } from "mobx";
import { Product } from "../types/types";

export class ProductsStore{
    @observable products: Product[] = []
}