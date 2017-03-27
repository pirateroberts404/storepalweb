import { connect } from 'react-redux'
import OrderDetailsComponent from '../Components/OrderDetailsComponent'
import { getOrder }  from '../Actions/ActionCreators';

const mapStateToProps = (state) => {
  return {
    orders: state.orders,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getOrder: (id) => dispatch(getOrder(id))
  }
}

const OrderDetail = connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderDetailsComponent)

export default OrderDetail