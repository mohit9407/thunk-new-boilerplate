import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, NavbarBrand, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import './navbar.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {LogoutMethod} from '../../actionMethods/authActionMethods';
import userImg from '../../images/user-pic.png';


class NavBar extends React.Component {
    render() {
        const {user} = this.props;
        return (
            <div>
                <Navbar style={{backgroundColor: '#2196f3'}} dark>
                    <NavbarBrand style={{color: 'white'}}>Website Name</NavbarBrand>
                    {user && <React.Fragment>
                        <div className="right-icons">
                            <UncontrolledDropdown inNavbar>
                                <DropdownToggle nav className={'colorMain-background'}>
                                    <img className="profileImage"
                                         src={userImg}
                                         alt={'profile'}
                                    />
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <Link className='underline' to=''>
                                        <DropdownItem onClick={this.props.LogoutMethod} className=''>Log
                                            Out</DropdownItem>
                                    </Link>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </div>
                    </React.Fragment>
                    }
                </Navbar>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.user
    }
};
const mapDispatchToProps = (dispatch) => bindActionCreators({LogoutMethod}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);