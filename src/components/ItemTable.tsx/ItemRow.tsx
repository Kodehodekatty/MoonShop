import { Trash2 } from 'lucide-react';
import { useShopContext } from '../../contexts/shopContext';
import { Item } from '../../itemValidator';

type Props = {
    item: Item;
};
export const ItemRow = ({ item }: Props) => {
    const { addItemToCart, cart, removeItemFromCart, removeItem } = useShopContext();
    const isChecked = cart.includes(item.id);
    const onClick = isChecked ? removeItemFromCart : addItemToCart;
    return (
        <tr key={item.id} className='item-row'>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.vendor} kr</td>
            <td>{item.price} kr</td>
            <td>
                <button className="delete-button" onClick={() => removeItem(item.id)}>
                    <Trash2 />
                </button>
            </td>
            <td>
                <input type="checkbox" checked={isChecked} onChange={() => onClick(item.id)} />
            </td>
        </tr>
    );
};
