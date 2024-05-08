import { zodResolver } from '@hookform/resolvers/zod';
import { v4 as uuidv4 } from 'uuid';

import { FormProvider, useForm } from 'react-hook-form';
import { Item, ItemSchema } from '../../App';
import { useShopContext } from '../../contexts/shopContext';
import { PriceField } from './PriceField';
import { TextArea } from './TextArea';
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
    const { register, handleSubmit, reset } = formMethods;
    const { addNewItem } = useShopContext();

    const onSubmit = (data: Item) => {
        addNewItem({
            ...data,
            id: uuidv4(),
        });
        reset();
    };

    return (
        <FormProvider {...formMethods}>
            <form className="item-form" onSubmit={handleSubmit(onSubmit)}>
                <TextField label="Name" field="name" placeholder="name of item" />
                <TextArea />
                <PriceField />
                <button className="submit-button">Submit</button>
            </form>
        </FormProvider> 
    );
};
