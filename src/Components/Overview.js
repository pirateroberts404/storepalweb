import React, {Component} from 'react';
import DashHead from './DashHead';

export default class Overview extends Component {
    render() {
        return (
            <div className="col-sm-9 content">
                <DashHead title="Content"></DashHead>
                <hr className="m-t"/>
                <h2>Content</h2>
            </div>
        );
    }
}