import React from 'react';
import { Route, Routes} from 'react-router-dom';
import './App.css';

import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js';
import Promo from '../Promo/Promo';
import Content from '../Content/Content'
import Sidebar from '../Sidebar/Sidebar';

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
                            <>
                                <Content/>
                                <Sidebar/>
                            </>

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
