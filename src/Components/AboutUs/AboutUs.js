import React from 'react';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div>
            <div className="about-info">
                <h1>Something About us</h1>
                <p>The best About Us pages accomplish their goals through telling a story about a brand.Every story needs a protagonist, and so does every About Us page. In some cases, that might be you or your founding team. In others, you might treat your business as its own character with a distinct story.Either way, stories are all about representing change—starting in one place and ending up in another—which is something your About Us page should also do as visitors scroll through it.</p>
            </div>

            <div class='container-fluid'>
                <div class="card mx-auto">                    
                    <img className='mx-auto img-thumbnail' src="https://allmaxnutrition.com/wp-content/uploads/chasesavoie-massivemuscles.png" />                
                </div>
            </div>

            <div className="about-info"><h3>Stay with us</h3></div>

        </div>
    );
};

export default AboutUs;