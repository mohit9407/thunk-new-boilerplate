import React from 'react';
import {Link} from 'react-router-dom';
import './sideBar.css';

const sidebarComponent = (props) => {
    return (
        <React.Fragment>
            <ul className="nav flex-column">
                <li name="Home" className={props.active === 'Home' ? "nav-item active" : "nav-item active"}>
                    <Link className="nav-link" onClick={props.activeLink} name="Home" to="/"><i className="fa fa-home"/>
                        <span> Home </span>
                    </Link>
                </li>
                <li name="userManage" className={props.active === 'userManage' ? "nav-item active" : "nav-item active"}>
                    <Link className="nav-link" onClick={props.activeLink} name="userManage" to="/ManageUser"><i className="fa fa-user"/>
                        <span> User Management </span>
                    </Link>
                </li>
                <li name="about" className={props.active === 'about' ? "nav-item active" : "nav-item"}
                    onClick={this.activeLink}><Link className="nav-link" name="about" to="/about"><i
                    className="fa fa-2x fa-info"/><span> About </span></Link></li>
            </ul>
        </React.Fragment>
    )
};

export default sidebarComponent;