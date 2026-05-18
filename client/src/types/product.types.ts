export interface Variant {
  size: string;
  color: string;
  sku: string;
  price: number;
  stock: number;
}

export interface Product {
  _id: string;
  name: string;
  category: string;
  description?: string;
  variants: Variant[];
  isActive: boolean;
}

export interface CartItem {
  productId: string;
  sku: string;
  name: string;
  unitPrice: number;
  quantity: number;
  discount: number;
}