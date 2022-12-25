
export function productReducer(
    state = [],
    action
) {
    switch (action.type) {
        case "ADD_PRODUCT_TO_CART":
            console.log("Dispatch ");
            return action.payload;
        default:
            return state;
    }
}
