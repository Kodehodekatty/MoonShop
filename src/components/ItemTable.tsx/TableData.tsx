import { Trash2 } from 'lucide-react';
import { Item } from '../../App';
import { useShopContext } from '../../contexts/shopContext';

type Props = {
    item: Item;
};
export const TableData = ({ item }: Props) => {
    const { addItemToCart,cart, removeItemFromCart, removeItem } = useShopContext();
    const isChecked = cart.includes(item.id);
    const onClick = isChecked ? removeItemFromCart : addItemToCart;
    return (
        <tr key={item.id}>
            <td>{item.name}</td>
            <td className="description">{item.description}</td>
            <td>{item.price} kr</td>
            <td>
                <button className="delete-button" onClick={() => removeItem(item.id)}>
                    <Trash2 />
                </button>
                <input type="checkbox" checked={isChecked} onChange={() => onClick(item.id)} />
            </td>
        </tr>
    );
};
