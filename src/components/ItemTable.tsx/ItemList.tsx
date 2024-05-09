import { useShopContext } from '../../contexts/shopContext';
import { TableData } from './TableData';

export const ItemList = () => {
    const { addItemToCart, items, cart, removeItemFromCart, removeItem } = useShopContext();

    // ads the total price
    const total = cart.reduce((acc, cur) => {
        const itemPrice = items.find((item) => item.id === cur)?.price || 0;
        return acc + itemPrice;
    }, 0);

    return (
        <div className="card">
            <div className="item-table-container">
                <h2>Item list</h2>
                <p className="number-of-items">
                    ( {!items.length ? 'no items added' : items.length + ' items'} )
                </p>
            </div>
            <table className="item-table">
                <thead>
                    <tr className="table-header">
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {!items.length && <p className="table-placeholder">empty</p>}
                    {items.map((item) => {
                        return <TableData item={item} />;
                    })}
                </tbody>
            </table>
            <div className="price-wrapper">
                <p className="total-price"> Total: {total} kr</p>
            </div>
        </div>
    );
};
