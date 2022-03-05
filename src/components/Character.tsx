import React from 'react';
import Phoenix from "./phoenix/Phoenix";
import Jett from "./jett/Jett";
import Sova from "./sova/Sova";
import Sage from "./sage/Sage";

const Character = () => {
    return (
        <div>
            <Phoenix/>
            <Jett/>
            <Sova/>
            <Sage/>
        </div>
    );
};

export default Character;