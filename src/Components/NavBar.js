import React from "react";
import ReactTooltip from "react-tooltip";
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export default function NavBar() {
    return (
        <header style={{ background: "#154360" }} >
            <div className="container mx-1 flex justify-between">
                <nav className=" inline-flex">
                    <div className="py-9 mx-3">
                        <NavLink to='/'
                            exact
                            activeClassName="text-white"
                            className="font-mono inline-flex items-center py-3 px-3 mr-4 text-white text-4xl hover:text-green-500  font-bold  tracking-widest">
                            Shubhank Patel
                     </NavLink>
                    </div>

                    <div style={{ textAlign: "right" }} className=" navlink_NavBar_NotName">
                        <NavLink to='/post'
                            activeClassName="text-pink-150 bg-blue-275"
                            className="navlink_NavBar_NotName   mx-3 inline-flex items-center py-3 px-3 my-6 rounded text-white text-2xl hover:text-red-600">
                            Blogs
                     </NavLink>
                        <NavLink to='/project'
                            activeClassName="text-pink-150 bg-blue-275"
                            className="inline-flex  mx-3 items-center py-3 px-3 my-6 rounded text-white text-2xl hover:text-red-600">
                            Projects
                     </NavLink >
                        <NavLink to='/about'
                            activeClassName="text-pink-150 bg-blue-350"
                            className="inline-flex items-center py-3 px-3 my-6 rounded text-white text-2xl hover:text-red-600 ">
                            About Me !
                     </NavLink>
                    </div>
                </nav>
                <div className=" inline-flex py-10 px-3 mr-6">
                    <div><SocialIcon data-tip data-for="emailToolTip" network="email" className=" mr-4 my-social-icon" target="_blank" fgcolor="#000" style={{ height: 35, width: 35 }}></SocialIcon>
                        <ReactTooltip id="emailToolTip" place="top" >shubhank.patel7@gmail.com</ReactTooltip>
                    </div>
                    <div><SocialIcon data-tip data-for="TwitterToolTip" url="https://www.twitter.com/shubhankpatel2" className="mr-4 my-social-icon" target="_blank" fgcolor="#fff" style={{ height: 35, width: 35 }} />
                        <ReactTooltip id="TwitterToolTip" place="top" >Twitter</ReactTooltip>
                    </div>
                    <div>  <SocialIcon data-tip data-for="LinkedInToolTip" url="https://www.linkedin.com/in/shubhank-patel-462b051a9/?originalSubdomain=in" className="mr-4 my-social-icon" target="_blank" fgcolor="#fff" style={{ height: 35, width: 35 }} />
                        <ReactTooltip id="LinkedInToolTip" place="top" >LinkedIn</ReactTooltip>
                    </div>
                </div>
            </div>
        </header>
    );
}