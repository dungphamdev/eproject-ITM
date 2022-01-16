import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './public/Login';
import { Route, Router, Routes } from 'react-router-dom';
import Navbar from './layout/Navbar';

interface IProps { }

interface IState {
    activeSidebar: boolean;
}

function Home() {
    return (
        <div className='home'>
            <h1>Home</h1>
        </div>
    );
}

function Products() {
    return (
        <div className='products'>
            <h1>Products</h1>
        </div>
    );
}

function Reports() {
    return (
        <div className='reports'>
            <h1>Reports</h1>
        </div>
    );
}



class App extends React.Component<IProps, IState> {
    constructor(props: IProps | Readonly<IState>) {
        super(props);

        this.state = {
            activeSidebar: true
        };
    }

    setSidebar(activeSidebar: boolean) {

        this.setState({ activeSidebar: activeSidebar })

    }

    render() {

        return (
            <>
                <Navbar
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
                </div>

            </>
        )
    }
}

// function App() {
//     return (
//         <>


//             <Navbar />

//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/product" element={<Products />} />
//                 <Route path="/reports" element={<Reports />} />
//             </Routes>

//         </>
//     );
// }

export default App;
