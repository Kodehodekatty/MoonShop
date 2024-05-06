import { useShopContext } from '../contexts/shopContext';

export const ItemList = () => {
    const { addItemToCart, items, cart, removeItemFromCart } = useShopContext();

    const total = cart.reduce((acc, cur) => {
        const itemPrice = items.find((item) => item.id === cur)?.price || 0;
        return acc + itemPrice;
    }, 0);

    return (
        <div>
            <ul className="item-list">
                {items.map((item) => {
                    const isChecked = cart.includes(item.id);
                    const onClick = isChecked ? removeItemFromCart : addItemToCart;
                    return (
                        <li>
                            <p>{item.name}</p>
                            <p>{item.description}</p>
                            <p>{item.price}</p>
                            <input
                                type="checkbox"
                                checked={isChecked}
                                onClick={() => onClick(item.id)}
                            />
                        </li>
                    );
                })}
            </ul>
            <p> {total}</p>
        </div>
    );
};
