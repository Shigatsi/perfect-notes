import React from 'react';
import { Route, Routes} from 'react-router-dom';
import './App.css';

import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js';
import Promo from '../Promo/Promo';
import Content from '../Content/Content'
import Sidebar from '../Sidebar/Sidebar';
import Profile from '../Profile/Profile';

function App() {

    const [ profileIsOpen, setProfileIsOpen ] = React.useState(false);
    function toggleProfile () {
        setProfileIsOpen(!profileIsOpen)
    }

    return (
        <div className="page">
            <div className='app-wrapper'>
                <Header />
                <Routes>
                    <Route
                        path = "/"
                        element={<Promo />}>
                    </Route>
                    <Route
                        path="my-notes/*"
                        element = {
                            <>
                                <Content/>
                                <Sidebar openProfile = {toggleProfile}/>
                            </>

                        }
                    >
                    </Route>
                </Routes>
                <Profile isOpen={profileIsOpen} onClose={toggleProfile}/>
                <Footer />
            </div>
        </div>
    );
}

export default App;
