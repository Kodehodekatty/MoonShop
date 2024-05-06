import { createContext, useContext } from 'react';
import { Item } from '../App';

type ShopContextType = {
    addNewItem: (item: Item) => void;
};

export const ShopContext = createContext<ShopContextType | null>(null);

export const useShopContext = () => {
    const context = useContext(ShopContext);
    if (!context) throw new Error('useShopContext must be used inside a shop context');
    return context;
};
