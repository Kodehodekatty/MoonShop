import { z } from 'zod';
import './App.css';
import { useState } from 'react';
import { ItemForm } from './components/ItemForm';

const ItemSchema = z.object({
    name: z.string().min(1),
    price: z.number().positive(),
    description: z.string().min(1),
    id: z.string().uuid(),
});

type Item = z.infer<typeof ItemSchema>;

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
        <div className="container">
            <ItemForm />
        </div>
    );
}

export default App;
