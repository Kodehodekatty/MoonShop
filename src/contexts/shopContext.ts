import { createContext, useContext } from 'react';
import { Item } from '../App';

type ShopContextType = {
    removeItem: (id: string) => void;

    clearCart: () => void;
    removeItemFromCart: (id: string) => void;
    removeAllItemsFromCart: () => void;
    addNewItem: (item: Item) => void;
    addItemToCart: (id: string) => void;
    addAllItemsToCart: () => void;
    cart: string[];
    items: Item[];
};

export const ShopContext = createContext<ShopContextType | null>(null);

export const useShopContext = () => {
    const context = useContext(ShopContext);
    if (!context) throw new Error('useShopContext must be used inside a shop context');
    return context;
};
