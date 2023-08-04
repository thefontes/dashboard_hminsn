import React from 'react';
import '../styles/TopNavbar.css'; // Importando o arquivo TopNavbar.css

const TopNavbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"> {/* Adicionando a classe 'fixed-top' para fixar o navbar no topo */}
            <div className="container">
                <a className="navbar-brand" href="/">Logo</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Another Link</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default TopNavbar;
