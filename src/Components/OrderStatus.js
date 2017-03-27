import React, { Component } from 'react';

class OrderStatus extends Component { 
    
    constructor(props) {
        super(props);
        this.state = {
            display_select: false
        }
        this.order_status = props.status;
        this.payment = props.payment;
        this.onClick = this.onClick.bind(this);
    }

    onClick = (e) => {
        e.preventDefault();
        this.setState({display_select: true})
        console.log("click");        
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
            <div className="col-md-12">
                <div className="panel panel-primary">
                    <div className="panel-body">
                        <span style={styles.first_text}>Order Status:
                            <a href="#" style={styles.text} onClick={this.onClick}>{this.order_status} 
                                <span className="icon icon-edit" style={styles.icon}></span>
                            </a>
                        </span><br />
                        {this.state.display_select ? <div>yolo</div> : ''}
                        <span>Paid via {this.payment}</span><br />
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderStatus;