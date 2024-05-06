import { z } from 'zod';
import './App.css';
import { useState } from 'react';
import { ItemForm } from './components/ItemForm';
import { useLocalStorage } from '@uidotdev/usehooks';
import { ShopContext } from './contexts/shopContext';
import { ItemList } from './components/ItemList';

export const ItemSchema = z.object({
    name: z.string().min(1),
    price: z.number().positive(),
    description: z.string().min(1),
    id: z.string().uuid(),
});

export type Item = z.infer<typeof ItemSchema>;

function App() {
    const [items, setItems] = useLocalStorage<Item[]>('items', []);

    const [cart, setCart] = useState<string[]>([]);

    const addItemToCart = (id: string) => {
        setCart((prev) => {
            if (prev.includes(id)) return prev;
            return [...prev, id];
        });
    };

    const removeItemFromCart = (id: string) => {
        setCart((prev) => {
            return prev.filter((itemId) => itemId !== id);
        });
    };

    const addNewItem = (item: Item) => {
        setItems((prev) => [...prev, item]);
    };

    return (
        <ShopContext.Provider
            value={{ addNewItem, addItemToCart, removeItemFromCart, items, cart }}
        >
            <div className="container">
                <ItemForm />
                <ItemList />
            </div>
        </ShopContext.Provider>
    );
}

export default App;
