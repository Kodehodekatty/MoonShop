import { useFormContext } from 'react-hook-form';
import { Item } from '../../App';
import { ErrorMessage } from '@hookform/error-message';

type Props = {
    label: string;
    field: keyof Item;
};
export const TextField = ({ field, label }: Props) => {
    const { register } = useFormContext<Item>();
    return (
        <div className="field">
            <label htmlFor={field}>{label}</label>
            <input type="text" id={field} {...register(field)} />
            <ErrorMessage
                name={field}
                render={({ message }) => <p className="error-message">{message}</p>}
            />
        </div>
    );
};
