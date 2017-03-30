import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'

export default class SideBar extends Component {
    render() {
        return (
            <div className="col-md-3 sidebar">
                <nav className="sidebar-nav">
                    <div className="sidebar-header">
                        <button
                            className="nav-toggler nav-toggler-md sidebar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#nav-toggleable-md">
                            <span className="sr-only">Toggle nav</span>
                        </button>
                        <a className="sidebar-brand img-responsive" href="../index.html">
                            <span className="icon icon-leaf sidebar-brand-icon"></span>
                        </a>
                    </div>

                    <div className="collapse nav-toggleable-md" id="nav-toggleable-md">
                        <form className="sidebar-form">
                            <input className="form-control" type="text" placeholder="Search..."/>
                            <button type="submit" className="btn-link">
                                <span className="icon icon-magnifying-glass"></span>
                            </button>
                        </form>
                        <ul className="nav nav-pills nav-stacked">
                            <li className="nav-header">Dashboards</li>
                            <li >
                                <Link to="/"><span className="icon icon-home"></span>Overview</Link>
                            </li>
                            <li className="nav-header">Oders</li>
                            <li >
                                <Link to="/orders"><span className="icon icon-list"></span>View Orders</Link>
                            </li>
                        </ul>
                        <hr className="visible-xs m-t"/>
                    </div>
                </nav>
            </div>
        );
    }
}