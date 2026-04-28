import { create } from 'zustand';

interface CartItem {
  id: number;
  name: string;
  price: number;
  qty: number;
}

interface CartStore {
  cart: CartItem[];
  addToCart: (product: any) => void;
  clearCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
}

export const useCart = create<CartStore>((set, get) => ({
  cart: [],
  addToCart: (product) => set((state) => {
    const existing = state.cart.find((item) => item.id === product.id);
    if (existing) {
      return { cart: state.cart.map((item) => item.id === product.id ? { ...item, qty: item.qty + 1 } : item) };
    }
    return { cart: [...state.cart, { ...product, qty: 1 }] };
  }),
  clearCart: () => set({ cart: [] }),
  totalItems: () => get().cart.reduce((acc, item) => acc + item.qty, 0),
  totalPrice: () => get().cart.reduce((acc, item) => acc + (item.qty * item.price), 0),
}));