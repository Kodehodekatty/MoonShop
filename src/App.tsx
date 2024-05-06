import { z } from 'zod';
import './App.css';
import { useState } from 'react';
import { ItemForm } from './components/ItemForm';
import { ShopContext } from './contexts/shopContext';

export const ItemSchema = z.object({
    name: z.string().min(1),
    price: z.number().positive(),
    description: z.string().min(1),
    id: z.string().uuid(),
});

export type Item = z.infer<typeof ItemSchema>;

function App() {
    const [items, setItems] = useState<Item[]>([]);

    const [cart, setCart] = useState<string[]>([]);

    const addItemToCart = (id: string) => {
        setCart((prev) => [...prev, id]);
    };

    const addNewItem = (item: Item) => {
        setItems((prev) => [...prev, item]);
    };

    return (
        <ShopContext.Provider value={{ addNewItem }}>
            <div className="container">
                <ItemForm />
            </div>
        </ShopContext.Provider>
    );
}

export default App;
