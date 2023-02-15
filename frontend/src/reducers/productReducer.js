
export function productReducer(
    state = [],
    action
) {
    switch (action.type) {
        case "GET_ALL_CART_ITEM"  :
            return action.payload;
        case "ADD_PRODUCT_TO_CART":
            return action.payload;
        default:
            return state;
    }
}
