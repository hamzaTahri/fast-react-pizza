import {formatCurrency} from '../../utils/helpers';
import DeleteItem from "./DeleteItem.jsx";
import UpdateItemQuantity from "./UpdateItemQuantity.jsx";

// eslint-disable-next-line react/prop-types
function CartItem({item}) {
    // eslint-disable-next-line no-unused-vars,react/prop-types
    const {pizzaId, name, quantity, totalPrice} = item;

    return (
        <li className="py-3 sm:flex sm:items-center sm:justify-between">
            <p className="mb-1 sm:mb-0">
                {quantity}&times; {name}
            </p>
            <div className="flex items-center justify-between sm:gap-6">
                <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
                <UpdateItemQuantity pizzaId={pizzaId} currentQuantity={quantity}/>
                <DeleteItem pizzaId={pizzaId}/>
            </div>
        </li>
    );
}

export default CartItem;
