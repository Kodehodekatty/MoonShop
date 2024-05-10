import { useShopContext } from '../../contexts/shopContext';

export const ItemHeader = () => {
    const { addAllItemsToCart } = useShopContext();

    return (
        <tr className="table-header">
            <th>Name</th>
            <th>Description</th>
            <th>Vendor</th>
            <th>Price</th>

            <th>delete</th>
            <th>
                {' '}
                checkout <input type="checkbox" onChange={() => addAllItemsToCart()} />
            </th>
        </tr>
    );
};
