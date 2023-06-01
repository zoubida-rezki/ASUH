import react from 'react';
import Link from 'next/link';
import React from 'react';
export {Navbar};

function Navbar() { 


    return( 
        <>
        <nav className='navbar navbar-default'>

            <div className="container">
                <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand visible-xs visible-sm" href="http://asuh.phys.uh.edu"><img src="/assets/images/asuhLogo.png" width="100"/></a>
                        <a className="navbar-brand visible-md visible-lg" href="http://asuh.phys.uh.edu"><img src="/assets/images/asuhLogo.png" width="100"/>Astronomy Society at UH  (ASUH)</a>
                </div>

                <div className="collapse navbar-collapse" id="navbar-collapse-1">
                <ul className="nav navbar-nav">
                                <li className="active"><a href="http://asuh.phys.uh.edu">Home</a></li>
                                    <li><a href="http://asuh.phys.uh.edu/news-and-events">News &amp; Events</a></li>
                                    <li><a href="http://asuh.phys.uh.edu/officers">Officers</a></li>
                                    <li><a href="http://asuh.phys.uh.edu/past-events">Past Events</a></li>
                                    <li><a href="http://asuh.phys.uh.edu/resources">Resources</a></li>
                                    <li><a href="http://asuh.phys.uh.edu/donors">Donors</a></li>
                                    <li><a href="http://asuh.phys.uh.edu/donate">Donate</a></li>
                                    <li><a href="http://asuh.phys.uh.edu/asuh-social-media">ASUH Social Media</a></li>
                                    <li><a href="http://asuh.phys.uh.edu/become-member">Become a Member</a></li>
                            </ul>
                </div>
            </div>
        </nav>


        </>
    )
}