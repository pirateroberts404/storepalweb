import React from 'react';

const statusStyle = {
  pending: {color: 'blue', fontSize: '18'},
  processing: {color: 'orange', fontSize: '18'},
  on_hold: {color: 'yellow', fontSize: '18'},
  completed: {color: 'green', fontSize: '18'},
  cancelled: {color: 'red', fontSize: '18'},
  refunded: {color: 'red', fontSize: '18'},
  failed: {color: 'red', fontSize: '18'},
};

// { value: 'pending', label: 'Pending', color:  },
//             { value: 'processing', label: 'Processing' },
//             { value: 'on-hold', label: 'On Hold'},
//             { value: 'cancelled', label: 'Cancelled' },
//             { value: 'refunded', label: 'Refunded' },
//             { value: 'failed', label: 'Failed' },

const OrderStatus = ({status, options}) => {
    if (status == 'on-hold'){
        status = 'on_hold';
    }
    return(
        <span className={`icon icon-check ${status}`} style={statusStyle[status]}>mmStatus</span>
    )
}

export default OrderStatus;