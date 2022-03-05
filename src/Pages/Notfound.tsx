import React from 'react';
import {Link} from "react-router-dom";

export const Notfound = () => {
    return (
        <div>
            <h3>Sorry this page was not found. Go <Link to="/">Home</Link></h3>
        </div>
    );
};

export default {Notfound};