import React from 'react';

interface ProductContextType {
  products: any;
  setProducts: React.Dispatch<React.SetStateAction<any>>;
}

const ProductContext = React.createContext({} as ProductContextType);

export const ProductProvider = ProductContext.Provider;
export const ProductConsumer = ProductContext.Consumer;

export default ProductContext;