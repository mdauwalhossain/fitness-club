import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import Body from './Body/Body';


const Home = () => {
const [infos , setInfos] = useState([]);
useEffect(() => {
    fetch('./data.json')
    .then(res=>res.json())
    .then(data => setInfos(data))
},[]);



    return (
        <div>
            <div className="show-cards">
                {
                    infos.map(info => <Body 
                         key= {info._id}
                         info={info}
                                            
                         ></Body>)
                }                

            </div>
           
        </div>
    );
};

export default Home;