import { connect } from 'react-redux'
import Orders from '../Components/Orders'
import { getAllOrders, getOrder, getNotes, getSearchOrders }  from '../Actions/ActionCreators';

const mapStateToProps = (state) => {
  return {
    orders: state.orders
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getOrders: (page, filter) =>  dispatch(getAllOrders(page, filter)),
    getOrder: id => dispatch(getOrder(id)),
    getNotes: id => dispatch(getNotes(id)),
    searchOrders: query => dispatch(getSearchOrders(query))
  }
}

const OrdersList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Orders)

export default OrdersList