import React, {Component} from 'react';

const DashHead = ({title}) => {
    return (
        <div className="dashhead">
            <div className="dashhead-titles">
                <h6 className="dashhead-subtitle">StorePal</h6>
                <h2 className="dashhead-title">{title}</h2>
            </div>
        </div>
    );
}

export default DashHead;