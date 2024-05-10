import { ErrorMessage } from '@hookform/error-message';
import { useFormContext } from 'react-hook-form';
import { Item } from '../../itemValidator';

type Props = {
    label: string;
    field: keyof Item;
    placeholder: string;
};
export const TextField = ({ field, label, placeholder }: Props) => {
    const { register } = useFormContext<Item>();
    return (
        <div className="field">
            <label htmlFor={field}>{label}</label>
            <input type="text" id={field} {...register(field)} placeholder={placeholder} />
            <ErrorMessage
                name={field}
                render={({ message }) => <p className="error-message">{message}</p>}
            />
        </div>
    );
};
