
import './App.css';

import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js';
import Sidebar from '../Sidebar/Sidebar';
import Content from "../Content/Content";

function App() {
    return (
        <div className="page">
            <div className='app-wrapper'>
                <Header />
                <Sidebar />
                <Content />
                <Footer />
            </div>

        </div>
    );
}

export default App;
