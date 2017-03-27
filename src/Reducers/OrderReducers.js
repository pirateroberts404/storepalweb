const orders = (state = {
  data:[], 
  loading_orders: true,
  single_order_data: {},
  loading_single_order: true,
  pages: null,
 }, action) => {
   console.log("CONSOLE LOG: " + action.type);
  switch (action.type) {
    case "GET_ALL_ORDERS_FULFILLED":
      return {...state, data: action.payload.data, loading_orders: false, pages: action.payload.headers['x-wp-totalpages'] }
    case "GET_ALL_ORDERS_PENDING":
      return {...state, data: [], loading_orders: true }
    case "GET_ORDER_PENDING":
      return {...state, single_order_data: {}, loading_single_order: true }
    case "GET_ORDER_FULFILLED":
      return {...state, single_order_data: action.payload.data, loading_single_order: false }
    default:
      return state
  }
}
export default orders;
