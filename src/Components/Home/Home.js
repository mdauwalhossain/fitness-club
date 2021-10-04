import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';

import Body from './Body/Body';


const Home = () => {
const [infos , setInfos] = useState([]);
useEffect(() => {
    fetch('./data.json')
    .then(res=>res.json())
    .then(data => setInfos(data))
},[]);



    return (
        <div >
            <div className="show-cards row">
            <Row xs={1} md={2} className="g-4">
            {
                    infos.slice(0,4).map(info => <Body  
                         key= {info._id}
                         info={info}
                                            
                         ></Body>)
                } 
                       
                       </Row>
            </div>
           
        </div>
    );
};

export default Home;