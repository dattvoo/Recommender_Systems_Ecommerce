
export function productReducer(
    state = [],
    action
) {
    switch (action.type) {
        case "ADD_PRODUCT_TO_CART":
            return action.payload;
        default:
            return state;
    }
}
