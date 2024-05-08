import { Trash2 } from 'lucide-react';
import { useShopContext } from '../contexts/shopContext';

export const ItemList = () => {
    const { addItemToCart, items, cart, removeItemFromCart, removeItem } = useShopContext();

    // ads the total price
    const total = cart.reduce((acc, cur) => {
        const itemPrice = items.find((item) => item.id === cur)?.price || 0;
        return acc + itemPrice;
    }, 0);

    return (
        <div className="card">
            <div className="item-list-container">
                <h2>Item list</h2>{' '}
                <p className="number-of-items">
                    ( {!items.length ? 'no items added' : items.length + ' items'} )
                </p>
            </div>

            <ul className="item-list">
                <div className="list-header">
                    <p>name</p> <p>Description</p> <p> Price</p>
                </div>
                {items.map((item) => {
                    const isChecked = cart.includes(item.id);
                    const onClick = isChecked ? removeItemFromCart : addItemToCart;

                    return (
                        <li key={item.id}>
                            <div className="name-wrapper">
                                {item.name} <p className="ref"> ref:{item.id.slice(15, 20)}</p>
                            </div>

                            <p className="description">{item.description}</p>
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
            <div className="price-wrapper">
                <p className="total-price"> Total: {total} kr</p>
            </div>
        </div>
    );
};
