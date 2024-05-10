import { useLocalStorage } from '@uidotdev/usehooks';
import { useState } from 'react';
import { Item } from '../App';

export const useShop = () => {
    const [items, setItems] = useLocalStorage<Item[]>('items', []);
    const [cart, setCart] = useState<string[]>([]);

    const addItemToCart = (id: string) => {
        setCart((prev) => {
            if (prev.includes(id)) return prev;
            return [...prev, id];
        });
    };
    const addAllItemsToCart = () => {
        if (cart.length === items.length) {
            console.log();
            removeAllItemsFromCart();
        } else {
            items.forEach((item) => {
                if (!cart.includes(item.id)) {
                    addItemToCart(item.id);
                }
            });
        }
    };
    const removeItemFromCart = (id: string) => {
        setCart((prev) => {
            return prev.filter((itemId) => itemId !== id);
        });
    };

    const removeAllItemsFromCart = () => {
        setCart([]);
    };

    const clearCart = () => {
        setItems([]);
    };

    const addNewItem = (item: Item) => {
        setItems((prev) => [item, ...prev]);
    };

    const removeItem = (id: string) => {
        setItems((prev) => {
            return prev.filter((item) => item.id !== id);
        });
    };

    return {
        addItemToCart,
        addAllItemsToCart,
        removeItemFromCart,
        removeAllItemsFromCart,
        clearCart,
        addNewItem,
        removeItem,
        cart,
        items,
    };
};
