import React from 'react'
import './Home.css'
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "./Search";

function Home() {
    return (
        <div className="home">
            <div className="home_header">
                <div className="home_headerLeft">
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
                </div>
                <div className="home_headerRight">
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Images</Link>
                    <AppsIcon />
                    <Avatar />
                </div>
            </div>
            <div className="home_body">
                <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt=""/>
                <div className="home_inputContainer">
                    <Search  />
                </div>
            </div>
            <div className="search_footer">
                <div className="search_footerTitre">
                    <p>Morocco | Google Clone By El Arram Mouloud </p>
                </div>
                <div className="search_footerBotton">
                    <div className="home_headerFooterLeft">
                        <Link to="/about">About</Link>
                        <Link to="/Advertising">Advertising</Link>
                        <Link to="/Business">Business</Link>
                        <Link to="/How Search works">How Search works</Link>
                    </div>
                    <div className="home_headerFooterRight">
                        <Link to="/Privacy">Privacy</Link>
                        <Link to="/Terms">Terms</Link>
                        <Link to="/Settings">Settings</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
