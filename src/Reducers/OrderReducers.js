const orders = (state = {
  data:[], 
  loading_orders: true,
  single_order_data: {},
  loading_single_order: true,
  pages: null,
  loading_notes: true,
  notes: [],
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
    case "GET_NOTES_PENDING":
      return {...state, notes: [], loading_notes: true }
    case "GET_NOTES_FULFILLED":
      return {...state, notes: action.payload.data, loading_notes: false }
    default:
      return state
  }
}
export default orders;
