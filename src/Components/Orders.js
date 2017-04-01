import React, {Component} from 'react';
import DashHead from './DashHead';
import { connect } from 'react-redux';
import {Table, Column, Cell} from 'fixed-data-table'
import ReactTable from 'react-table'
import OrderSearch from './OrderSearch'
import moment from 'moment';

import { Link } from 'react-router-dom'

export default class Orders extends Component {
    constructor(props){
        super(props);
        this.state = {
            search_query: '',
            values: []
        }
    }    
    onChangePage(e){
        this.props.getOrders(e.page +1);
    }

    onSearchSubmit = (e) => {
        e.preventDefault();
        this.props.searchOrders(this.state.search_query);
    }

    onChangeSearchQuery = (e) => {
        this.setState({search_query: e.target.value})
        this.setState({values: this.state.values.concat(e.target.value)})
        console.log(this.state.values)
        if (e.target.value.length > 2) {
            this.props.searchOrders(e.target.value);
        }
    }

    onButtonFilter = (e) => {
        console.log(e.currentTarget.dataset.filter);
        this.props.getOrders(1, e.currentTarget.dataset.filter)
    }
    
    render() {

        const values = this.state.values.map((item)=> <li>item</li>);

        let getOrder = this.props.getOrder
        const columns = [
            {
                header: 'Order',
                accessor: 'number',
                sortable: false,
                render: (props, getOrder) => <Link to={`/orders/${props.value}`}>{props.value}</Link>}, 
            {
                header: 'Status',
                sortable: false,
                accessor: 'status'},
            {
                header: 'Custumer',
                sortable: false,
                id: 'id',
                accessor: d => `${d.billing.first_name} ${d.billing.last_name}` },
            {
                header: 'Date Created',
                sortable: false,
                accessor: 'date_created',
                render: props => moment.utc(props.value).local().format('DD-MM-YYYY, h:mma')
            },
             {
                header: 'Total',
                sortable: false,
                accessor: 'total',
                render: props => `$${props.value}`
            }
        ]
        return (
            <div className="col-md-9 content">
                <DashHead title="Orders"></DashHead>
                <hr className="m-t"/>
                <OrderSearch 
                    onSearchSubmit={this.onSearchSubmit} 
                    onChangeSearchQuery={this.onChangeSearchQuery} 
                    values={values} 
                    onButtonFilter={this.onButtonFilter}
                />
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