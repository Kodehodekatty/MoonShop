import { z } from 'zod';
import './App.css';
import headerImage from './assets/headerImage.svg';
import { ItemForm } from './components/ItemForm/ItemForm';
import { ItemList } from './components/ItemTable.tsx/ItemList';
import { ShopContext } from './contexts/shopContext';
import { useShop } from './hooks/useShop';

export const ItemSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    vendor: z.string().min(1, 'Vendor is required'),
    price: z.number().positive('Price is required'),
    description: z.string().min(1, 'Description is required').max(50, 'too long'),
    id: z.string().uuid(),
});

export type Item = z.infer<typeof ItemSchema>;

function App() {
    const shop = useShop();

    return (
        <ShopContext.Provider value={shop}>
            <div className="container">
                <img className="img-header" src={headerImage} alt="" />
                <div className="content-container">
                    <ItemForm />
                    <ItemList />
                </div>
            </div>
        </ShopContext.Provider>
    );
}

export default App;
