import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './public/Login';
import { Route, Router, Routes } from 'react-router-dom';
import Navbar from './layout/Navbar';

import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import HomePage from "./public/HomePage";
import JsonData from "./data/data.json";

interface IProps { }

interface IState {
    activeSidebar: boolean;

    landingPageData: any;
}


class App extends React.Component<IProps, IState> {
    constructor(props: IProps | Readonly<IState>) {
        super(props);

        this.state = {
            activeSidebar: true,

            landingPageData: { ...JsonData }
        };
    }

    setSidebar(activeSidebar: boolean) {

        this.setState({ activeSidebar: activeSidebar })

    }

    render() {
        let { landingPageData } = this.state;

        return (
            <>
                {/* ADMIN SECTION */}
                {/* <Navbar
                    setSidebar={(activeSidebar: boolean) => this.setSidebar(activeSidebar)}
                />

                <div className={this.state.activeSidebar ? 'app_page active' : 'app_page'}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/product" element={<Products />} />
                        <Route path="/reports" element={<Reports />} />
                    </Routes>
                </div>

                <div className={this.state.activeSidebar ? 'app_footer active' : 'app_footer'}>
                      <div className='footer-text'>Author: Dungpt</div>
                </div> */}

                {/* PUBLIC SECTION */}
                <HomePage />

            </>
        )
    }
}

export default App;
