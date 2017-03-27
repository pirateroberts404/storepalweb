import React from 'react';

const OrderStatus = ({status, payment}) => {
    if (status == 'on-hold'){
        status = 'on_hold';
    }
    return(
        <div className="col-md-12">
            <div className="panel panel-primary">
                <div className="panel-body">
                    <span style={{fontSize: 18, fontWeight:500}}>Order Status: <span style={{fontSize: 18, color: 'green', fontWeight:500, textTransform: 'CAPITALIZE'}}>{status}</span></span><br />
                    <span>Paid via {payment}</span>
                </div>
            </div>
        </div>
    )
}

export default OrderStatus;