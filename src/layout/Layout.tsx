import React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import {Home} from "../Pages/Home";
import {About} from "../Pages/About";
import {Contacts} from "../Pages/Contacts";
import {Notfound} from "../Pages/Notfound";

const Layout = () => {
    return (
        <div>
            <header>
                <div className="Riot">
                    <div className="palka">
                        <Link to="/">Home</Link>
                        <Link to="/About">About</Link>
                        <Link to="/Contacts">Contacts</Link>
                    </div>
                </div>
            </header>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/Contacts" element={<Contacts/>}/>
                <Route path="*" element={<Notfound/>}/>
            </Routes>

        </div>
    );
};

export default Layout;