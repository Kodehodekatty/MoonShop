import { useShopContext } from '../contexts/shopContext';

export const ItemList = () => {
    const { addItemToCart, items, cart } = useShopContext();

    return (
        <ul className="item-list">
            {items.map((item) => {
                const isChecked = cart.includes(item.id);
                return (
                    <li>
                        <p>{item.name}</p>
                        <p>{item.description}</p>
                        <p>{item.price}</p>
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onClick={() => addItemToCart(item.id)}
                        />
                    </li>
                );
            })}
        </ul>
    );
};
