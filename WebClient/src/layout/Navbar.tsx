import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

interface IProps {
    setSidebar: Function;
}

interface IState {
    sidebar: Boolean;
}

class Navbar extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);

        this.state = {
            sidebar: true
        };
    }

    showSidebar() {
        let sidebar = this.state.sidebar;

        this.setState({ sidebar: !sidebar });

        this.props.setSidebar(!sidebar)
    }

    render() {
        let { sidebar } = this.state;

        return (
            <>
                <IconContext.Provider value={{ color: '#fff' }}>
                    <div className='navbar'>
                        <Link to='#' className='menu-bars'>
                            <FaIcons.FaBars onClick={() => this.showSidebar()} />
                        </Link>
                    </div>
                    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                        <ul className='nav-menu-items' onClick={() => this.showSidebar()}>
                            <li className='navbar-toggle'>
                                <div className='navbar-text'>ITM</div>
                                <Link to='#' className='menu-bars'>
                                    <AiIcons.AiOutlineClose />
                                </Link>
                            </li>
                            {SidebarData.map((item, index) => {
                                return (
                                    <li key={index} className={item.cName}>
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </IconContext.Provider>
            </>
        )
    }
}

export default Navbar;
