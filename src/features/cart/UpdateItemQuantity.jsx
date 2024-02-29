import Button from "../../ui/Button.jsx";
import {useDispatch} from "react-redux";
import {decreaseItemQuantity, increaseItemQuantity} from "./cartSlice.js";

// eslint-disable-next-line react/prop-types
function DeleteItem({pizzaId}) {
    const dispatch = useDispatch();
    return (<div className="flex gap-1 items-center md:gap-3">
        <Button type="round" onClick={() => dispatch(decreaseItemQuantity(pizzaId))}>-</Button>
        <Button type="round" onClick={() => dispatch(increaseItemQuantity(pizzaId))}>+</Button>
    </div>);
}

export default DeleteItem;
