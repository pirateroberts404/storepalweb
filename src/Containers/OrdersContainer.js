import { connect } from 'react-redux'
import Orders from '../Components/Orders'
import { getAllOrders, getOrder }  from '../Actions/ActionCreators';

const mapStateToProps = (state) => {
  return {
    orders: state.orders
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getOrders: page =>  dispatch(getAllOrders(page)),
    getOrder: id => dispatch(getOrder(id))
  }
}

const OrdersList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Orders)

export default OrdersList