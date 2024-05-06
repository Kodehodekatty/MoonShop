import { useShopContext } from '../contexts/shopContext';
import { Trash, Trash2 } from 'lucide-react';

export const ItemList = () => {
    const { addItemToCart, items, cart, removeItemFromCart, removeItem } = useShopContext();

    const total = cart.reduce((acc, cur) => {
        const itemPrice = items.find((item) => item.id === cur)?.price || 0;
        return acc + itemPrice;
    }, 0);

    return (
        <div className="card">
            <h2>Item list</h2>
            <ul className="item-list">
                <li className="list-header">
                    <p className="name-para">Name</p>
                    <p>Description</p>
                    <p>Price</p>
                </li>
                {items.map((item) => {
                    const isChecked = cart.includes(item.id);
                    const onClick = isChecked ? removeItemFromCart : addItemToCart;
                    return (
                        <li key={item.id}>
                            <p className="name-para">{item.name}</p>
                            <p>{item.description}</p>
                            <p>{item.price} kr</p>
                            <input
                                type="checkbox"
                                checked={isChecked}
                                onClick={() => onClick(item.id)}
                            />
                            <Trash2 className="delete-button" onClick={() => removeItem(item.id)} />
                        </li>
                    );
                })}
            </ul>
            <p className="total-price"> Total: {total} kr</p>
        </div>
    );
};
