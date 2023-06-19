const initCount = 0
export default function storeReducer(preState = initCount, action) {
    const { type, data } = action;
    switch (type) {
        case "increament" :
            return preState + data;
        case "decreament" :
            return preState - data;
        default:
            return preState.count;
    }
}