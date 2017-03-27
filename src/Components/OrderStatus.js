import React, { Component } from 'react';
import Select from 'react-select';

class OrderStatus extends Component { 
    
    constructor(props) {
        super(props);
        this.state = {
            display_select: false,
            selected: props.status
        }
        this.order_status = props.status;
        this.payment = props.payment;
        this.onClick = this.onClick.bind(this);
        this.selectChange = this.selectChange.bind(this);
    }

    onClick = (e) => {
        e.preventDefault();
        this.setState({display_select: true})
        console.log("click");        
    }

    selectChange = (val) => {
        console.log(val);
    }

    onCancelClick = (e) => {
        this.setState({display_select: false});
    }

    onSaveClick = (e) => {
        console.log("Save");
    }

    displaySelect = () => {
        var options = [
            { value: 'pending', label: 'Pending' },
            { value: 'completed', label: 'Completed' }
        ];
        const styles = {
            select: {
                marginTop: 5,
                marginBottom: 5
            },
            buttonCancel: {
                marginRight: 10
            },
            mainDiv: {
                marginBottom: 10
            }
        }
         
        return(
            <div className="row" style={styles.mainDiv}>
                <div className="col-md-4">
                    <Select
                        name="form-field-name"
                        value={this.state.selected}
                        options={options}
                        style={styles.select}
                        clearable={false}
                        onChange={this.selectChange}
                    />
                    <button className="btn btn-danger" style={styles.buttonCancel} onClick={this.onCancelClick}>
                        <span className="icon icon-cross"></span>Cancel</button>
                    <button className="btn btn-success" onClick={this.onSaveClick}>
                        <span className="icon icon-save"></span>Save</button>
                </div>
            </div>
        )
    }
    
    render() {
        let order_status = this.order_status;
        if (order_status === 'on-hold'){
            order_status = 'on_hold';
        }
        const styles = {
            text: {fontSize: 18, color: 'green', fontWeight:500, textTransform: 'CAPITALIZE', paddingLeft: 5},
            first_text: {fontSize: 18, fontWeight:500},
            icon: { fontSize: 14, paddingLeft: 5}
        }

        return(
            <div className="order-status">
                <span style={styles.first_text}>Order Status:
                    <a href="#" style={styles.text} onClick={this.onClick}>{this.order_status} 
                        <span className="icon icon-edit" style={styles.icon}></span>
                    </a>
                </span><br />
                {this.state.display_select ? this.displaySelect() : ''}
                <span>Paid via {this.payment}</span><br />
            </div>
        )
    }
}

export default OrderStatus;