import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/PieChart.css';
import TopNavbar from './components/TopNavbar';
import SideNavbar from './components/SideNavbar';
import Dashboard from './components/Dashboard';

const App = () => {
    const [selectedGraph, setSelectedGraph] = useState(0);

    const handleSelectGraph = (graphIndex) => {
        setSelectedGraph(graphIndex);
    };

    return (
        <div>
            <TopNavbar />
            <div className="container-fluid mt-5">
                <div className="row d-flex">
                    <div className="col-lg-2">
                        <SideNavbar onSelectGraph={handleSelectGraph} />
                    </div>
                    <div className="col-lg-10">
                        <Dashboard selectedGraph={selectedGraph} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
