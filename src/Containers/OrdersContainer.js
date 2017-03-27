import { connect } from 'react-redux'
import Orders from '../Components/Orders'
import { getAllOrders, getOrder, getNotes }  from '../Actions/ActionCreators';

const mapStateToProps = (state) => {
  return {
    orders: state.orders
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getOrders: page =>  dispatch(getAllOrders(page)),
    getOrder: id => dispatch(getOrder(id)),
    getNotes: id => dispatch(getNotes(id))
  }
}

const OrdersList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Orders)

export default OrdersList