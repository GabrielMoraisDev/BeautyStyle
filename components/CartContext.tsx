// context/CartContext.tsx
'use client';

import { createContext, useState, ReactNode, useContext } from 'react';

interface CartContextType {
  productCount: number;
  setProductCount: (count: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [productCount, setProductCount] = useState<number>(0);

  return (
    <CartContext.Provider value={{ productCount, setProductCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
