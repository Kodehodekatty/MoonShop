import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { useShopContext } from '../../contexts/shopContext';
import { Item, ItemSchema } from '../../itemValidator';

const defaultValues: Item = {
    name: '',
    vendor: '',
    price: 0,
    description: '',
    id: uuidv4(),
};

export const useShopForm = () => {
    const formMethods = useForm({
        defaultValues,
        resolver: zodResolver(ItemSchema),
    });
    const { reset } = formMethods;
    const { addNewItem } = useShopContext();

    const onSubmit = (data: Item) => {
        addNewItem({
            ...data,
            id: uuidv4(),
        });
        reset();
    };

    return { formMethods, onSubmit };
};
