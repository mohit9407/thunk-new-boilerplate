import React from 'react';
import {connect} from 'react-redux';

import SidebarComponent from '../../components/sidebarComponent/SideBarComponent';

import '../../index.css';

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarShow: true,
            activeLink: '',
            activeclass: `nav-item active`,
            expanded: false
        };
    }

    activeLink = (e) => {
        let target = e.target.name;
        this.setState({
            activeLink: target
        });
    };

    render() {
        return (
            <div className={"col-md-2 col-xs-12 sidebar bg-white hide"} id="sidebar-wrapper">
                <h1 className="">Logo</h1>
                <div className="sidebar-sticky">
                   <SidebarComponent
                        {...this.props}
                        activeLink={this.activeLink}
                    />

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user
    }
};

export default connect(mapStateToProps, null)(SideBar);