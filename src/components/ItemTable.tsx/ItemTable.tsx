import { Trash2 } from 'lucide-react';
import { useShopContext } from '../../contexts/shopContext';
import { ItemHeader } from './ItemHeader';
import { ItemRow } from './ItemRow';

export const ItemTable = () => {
    const { items, cart, clearCart } = useShopContext();

    // ads the total price
    const total = cart.reduce((acc, cur) => {
        const itemPrice = items.find((item) => item.id === cur)?.price || 0;
        return acc + itemPrice;
    }, 0);

    const itemCountText = !items.length
        ? 'no items'
        : items.length === 1
          ? items.length + ' item'
          : items.length + ' items';

    return (
        <div className="card">
            <div className="number-of-items-container">
                <h2>Item list</h2>
                <div className="number-of-items">
                    <p>{itemCountText}</p>
                    <button className="remove-all-items-button">
                        <Trash2 onClick={() => clearCart()} />
                    </button>
                </div>
            </div>
            <div className="item-table-container">
                <table className="item-table">
                    <thead>
                        <ItemHeader />
                    </thead>
                    <tbody>
                        {!items.length && <p className="table-placeholder">empty</p>}
                        {items.map((item) => {
                            return <ItemRow item={item} />;
                        })}
                    </tbody>
                </table>
            </div>
            <div className="price-wrapper">
                <p className="total-price"> Total: {total} kr</p>
            </div>
        </div>
    );
};
