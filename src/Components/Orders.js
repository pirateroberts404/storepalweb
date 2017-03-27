import React, {Component} from 'react';
import DashHead from './DashHead';
import { connect } from 'react-redux';
import {Table, Column, Cell} from 'fixed-data-table'
import ReactTable from 'react-table'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
var Spinner = require('react-spinkit');

export default class Orders extends Component {
    constructor(props){
        super(props);
        console.log("Orders, Constructor");
    }    
    onChangePage(e){
        console.log("On Change pgae");
        console.log(e);
        this.props.getOrders(e.page +1);
    }

    render() {
        let getOrder = this.props.getOrder
        const columns = [
            {
                header: 'Order Number',
                accessor: 'number',
                sortable: false,
                render: (props, getOrder) => <Link to={`/orders/${props.value}`} onClick={e=>this.props.getOrder(props.value)}>{props.value}</Link>}, 
            {
                header: 'Status',
                sortable: false,
                accessor: 'status'},
            {
                header: 'Date Created',
                sortable: false,
                accessor: 'date_created'},
             {
                header: 'Total',
                sortable: false,
                accessor: 'total'},
        ]
        return (
            <div className="col-sm-9 content">
                <DashHead title="Orders"></DashHead>
                <hr className="m-t"/>
                
                    <ReactTable
                    onChange={this.onChangePage.bind(this)}
                    manual
                    showPageSizeOptions={false}
                    defaultPageSize={10}
                    pages={this.props.orders.pages}
                    loading={this.props.orders.loading_orders}
                    data={this.props.orders.data}
                    noDataText=""
                    columns={columns}
                />
                
            </div>
        );
    }
}