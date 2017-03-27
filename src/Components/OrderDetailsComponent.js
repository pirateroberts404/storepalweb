import React, {Component} from 'react';
import DashHead from './DashHead';
var Spinner = require('react-spinkit');
import Select from 'react-select';
import OrderStatus from './OrderStatus';
import OrderBody from './OrderBody';

export default class OrderDetailsComponent extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            'value': 'pending'
        }
    }

    componentWillMount(){
        this.props.getOrder(this.props.match.params.id);
    }

    logChange(val) {
        this.setState({value: val.value})
    }

    loadComponentHtml(){
        var options = [
            { value: 'pending', label: 'Pending' },
            { value: 'processing', label: 'Processing' },
            { value: 'on-hold', label: 'On Hold'},
            { value: 'cancelled', label: 'Cancelled' },
            { value: 'refunded', label: 'Refunded' },
            { value: 'failed', label: 'Failed' },
            {}
        ];
        return(
            <div className="row">
                <OrderStatus status={this.props.orders.single_order_data.status}/>
                <OrderBody order={this.props.orders.single_order_data} />
            </div>
        )
    }

    render() {
        console.log(this.props.match)
        return (
            <div className="col-sm-9 content">
                <DashHead title={`Order: ${this.props.match.params.id}`}></DashHead>
                <hr className="m-t"/>
                {this.props.orders.loading_single_order ? 
                    <Spinner spinnerName="three-bounce" />:
                    this.loadComponentHtml()
                }
            </div>
        );
    }
}