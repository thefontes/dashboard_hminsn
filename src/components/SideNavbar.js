import React, { useState } from 'react';
import '../styles/SideNavbar.css';

const SideNavbar = ({ onSelectGraph }) => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleClick = (graphIndex) => {
        onSelectGraph(graphIndex);
        setSelectedItem(graphIndex);
    };

    return (
        <nav className="sidebar">
            <ul className="nav-list">
                <li className={`nav-item${selectedItem === 0 ? ' selected' : ''}`} onClick={() => handleClick(0)}>
                    <a href="#" className="nav-link">Internações</a>
                </li>
                <li className={`nav-item${selectedItem === 1 ? ' selected' : ''}`} onClick={() => handleClick(1)}>
                    <a href="#" className="nav-link">Tipo de Partos</a>
                </li>
                <li className={`nav-item${selectedItem === 2 ? ' selected' : ''}`} onClick={() => handleClick(2)}>
                    <a href="#" className="nav-link">Readimissões</a>
                </li>
                <li className={`nav-item${selectedItem === 3 ? ' selected' : ''}`} onClick={() => handleClick(3)}>
                    <a href="#" className="nav-link">Complicações</a>
                </li>
            </ul>
        </nav>
    );
};

export default SideNavbar;
