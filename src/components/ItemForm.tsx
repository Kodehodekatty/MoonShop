import { zodResolver } from '@hookform/resolvers/zod';
import { v4 as uuidv4 } from 'uuid';

import { useForm } from 'react-hook-form';
import { Item, ItemSchema } from '../App';
import { useShopContext } from '../contexts/shopContext';

const defaultValues: Item = {
    name: '',
    price: 0,
    description: '',
    id: uuidv4(),
};

export const ItemForm = () => {
    const { register, handleSubmit } = useForm({
        defaultValues,
        resolver: zodResolver(ItemSchema),
    });

    const { addNewItem } = useShopContext();

    return (
        <form
            className="item-form card"
            onSubmit={handleSubmit((data) =>
                addNewItem({
                    ...data,
                    id: uuidv4(),
                })
            )}
        >
            <div className="field">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" {...register('name')} />
            </div>
            <div className="field">
                <label htmlFor="description">Description</label>
                <input type="text" id="description" {...register('description')} />
            </div>
            <div className="field">
                <label htmlFor="price">Price</label>
                <input type="number" id="price" {...register('price', { valueAsNumber: true })} />
            </div>
            <button className="submit-button">Submit</button>
        </form>
    );
};
