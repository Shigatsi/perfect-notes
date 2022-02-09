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
                                <Sidebar/>
                            </>

                        }
                    >
                    </Route>
                </Routes>
                <Profile />
                <Footer />
            </div>
        </div>
    );
}

export default App;
