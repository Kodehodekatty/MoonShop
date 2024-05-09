import { Trash2 } from 'lucide-react';
import { useShopContext } from '../../contexts/shopContext';
import { TableData } from './TableData';
import { TableHeadData } from './TableHeadData';

export const ItemList = () => {
    const { items, cart, clearCart } = useShopContext();

    // ads the total price
    const total = cart.reduce((acc, cur) => {
        const itemPrice = items.find((item) => item.id === cur)?.price || 0;
        return acc + itemPrice;
    }, 0);

    return (
        <div className="card">
            <div className="number-of-items-container">
                <h2>Item list</h2>
                <div className="number-of-items">
                    <p>
                        {!items.length
                            ? 'no items'
                            : items.length === 1
                              ? items.length + ' item'
                              : items.length + ' items'}
                    </p>
                    <button className="remove-all-items-button">
                        <Trash2 onClick={() => clearCart()} />
                    </button>
                </div>
            </div>
            <div className="item-table-container">
                <table className="item-table">
                    <thead>
                        <TableHeadData />
                    </thead>
                    <tbody>
                        {!items.length && <p className="table-placeholder">empty</p>}
                        {items.map((item) => {
                            return <TableData item={item} />;
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
