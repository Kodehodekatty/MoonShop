import { z } from 'zod';
import './App.css';
import { useState } from 'react';
import { ItemForm } from './components/ItemForm/ItemForm';
import { useLocalStorage } from '@uidotdev/usehooks';
import { ShopContext } from './contexts/shopContext';
import { ItemList } from './components/ItemList';
import headerImage from './assets/headerImage.svg';

export const ItemSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    price: z.number().positive('Price is required'),
    description: z.string().min(1, 'Description is required'),
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
        setItems((prev) => [item, ...prev]);
    };

    const removeItem = (id: string) => {
        setItems((prev) => {
            return prev.filter((item) => item.id !== id);
        });
    };

    return (
        <ShopContext.Provider
            value={{ addNewItem, addItemToCart, removeItemFromCart, items, cart, removeItem }}
        >
            <div className="container">
                <img
                    src={headerImage}
                    alt=""
                    style={{ width: '100%', maxHeight: '28rem', objectFit: 'cover' }}
                />
                <div className="content-container">
                    <ItemForm />
                    <ItemList />
                </div>
            </div>
        </ShopContext.Provider>
    );
}

export default App;
