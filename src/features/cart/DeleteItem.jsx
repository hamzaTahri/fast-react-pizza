import Button from "../../ui/Button.jsx";
import {useDispatch} from "react-redux";
import {deleteItem} from "./cartSlice.js";

// eslint-disable-next-line react/prop-types
function DeleteItem({pizzaId}) {
    const dispatch = useDispatch();
    return (<Button type="small" onClick={()=> dispatch(deleteItem(pizzaId))}>Delete</Button>);
}

export default DeleteItem;
