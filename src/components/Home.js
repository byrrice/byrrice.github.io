import React from "react";
import "./Home.css";

export default function Home() {
    return (
        <div className="Home">
            <div className="lander">
                <h1>Isaac</h1>
                <p className="text-muted">Life is soup and I'm a spork.</p>
                <div>
                    <a href="https://github.com/byrrice" target="_blank">
                        <i class="icon fa fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/isaacng97/" target="_blank">
                        <i class="icon fa fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}