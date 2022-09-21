export interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

export interface CartItem {
  id: string;
  quantity: number;
}
