import { zodResolver } from '@hookform/resolvers/zod';
import { v4 as uuidv4 } from 'uuid';

import { FormProvider, useForm } from 'react-hook-form';
import { Item, ItemSchema } from '../../App';
import { useShopContext } from '../../contexts/shopContext';
import { ErrorMessage } from '@hookform/error-message';
import { TextField } from './TextField';

const defaultValues: Item = {
    name: '',
    price: 0,
    description: '',
    id: uuidv4(),
};

export const ItemForm = () => {
    const formMethods = useForm({
        defaultValues,
        resolver: zodResolver(ItemSchema),
    });
    const { register, handleSubmit } = formMethods;
    const { addNewItem } = useShopContext();

    return (
        <FormProvider {...formMethods}>
            <form
                className="item-form card"
                onSubmit={handleSubmit((data) =>
                    addNewItem({
                        ...data,
                        id: uuidv4(),
                    })
                )}
            >
                <TextField label="Name" field="name" />
                <TextField label="Name" field="name" />
                <div className="field">
                    <label htmlFor="description">Description</label>
                    <textarea rows={4} id="description" {...register('description')} />
                    <ErrorMessage
                        name="description"
                        render={({ message }) => <p className="error-message">{message}</p>}
                    />
                </div>
                <div className="field">
                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        id="price"
                        {...register('price', { valueAsNumber: true })}
                    />
                    <ErrorMessage
                        name="price"
                        render={({ message }) => <p className="error-message">{message}</p>}
                    />
                </div>
                <button className="submit-button">Submit</button>
            </form>
        </FormProvider>
    );
};
