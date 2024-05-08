import { ErrorMessage } from '@hookform/error-message';
import { useFormContext } from 'react-hook-form';
import { Item } from '../../App';

export const PriceField = () => {
    const { register } = useFormContext<Item>();
    return (
        <div className="field">
            <label htmlFor="price">Price</label>
            <input type="number" id="price" {...register('price', { valueAsNumber: true })} />
            <ErrorMessage
                name="price"
                render={({ message }) => <p className="error-message">{message}</p>}
            />
        </div>
    );
};
