import { ErrorMessage } from '@hookform/error-message';
import { useFormContext } from 'react-hook-form';
import { Item } from '../../App';

export const TextArea = () => {
    const { register } = useFormContext<Item>();
    return (
        <div className="field">
            <label htmlFor="description">Description</label>
            <textarea
                rows={4}
                id="description"
                placeholder="write a short description of the item"
                {...register('description')}
            />
            <ErrorMessage
                name="description"
                render={({ message }) => <p className="error-message">{message}</p>}
            />
        </div>
    );
};
