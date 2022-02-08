import React from 'react';
import { Route, Routes} from 'react-router-dom';
import './App.css';

import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js';
import Sidebar from '../Sidebar/Sidebar';
import Content from "../Content/Content";
import Promo from '../Promo/Promo';

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
                        path="my-notes"
                        element = {
                            <Sidebar />,
                            <Content />
                        }
                    >
                    </Route>
                </Routes>
                <Footer />
            </div>
        </div>
    );
}

export default App;
