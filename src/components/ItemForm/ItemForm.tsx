import { FormProvider } from 'react-hook-form';
import { PriceField } from './PriceField';
import { TextArea } from './TextArea';
import { TextField } from './TextField';
import { useShopForm } from './useShopForm';

export const ItemForm = () => {
    const { formMethods, onSubmit } = useShopForm();
    return (
        <FormProvider {...formMethods}>
            <form className="item-form" onSubmit={formMethods.handleSubmit(onSubmit)}>
                <TextField label="Name" field="name" placeholder="name of item" />
                <TextField label="Vendor" field="vendor" placeholder="name of vendor" />
                <TextArea />
                <PriceField />
                <button className="submit-button">Submit</button>
            </form>
        </FormProvider>
    );
};
