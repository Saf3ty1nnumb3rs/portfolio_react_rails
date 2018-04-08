import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../overlay.css'

class OverlayNav extends Component {
    render() {
        return (
            <div class="menu-overlay">
            <nav>
                <ul>
                <li><Link to="#">About</Link></li>
                <li><Link to="#">Work</Link></li>
                <li><Link to="#">Services</Link></li>
                <li><Link to="#">Contact</Link></li>
                <li><Link to="#" target="_blank">Home</Link></li>
                </ul>
            </nav>
        </div>
        );
    }
}

export default OverlayNav;