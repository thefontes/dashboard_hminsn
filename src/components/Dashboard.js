import React, { useEffect, useState } from 'react';
import PieChart from './PieChart';
import {obterInternacoes, obterPartos} from "../api/Dashboard";
import {generateGraph} from "../utils/graphUtils";

const Dashboard = ({ selectedGraph }) => {
    const [internacoes, setInternacoes] = useState([]);
    const [partos, setPartos] = useState([]);

    useEffect(() => {
       obterPartos().then(result => {
           setPartos(result)
       })
       obterInternacoes().then(result => {
           setInternacoes(result)
       })
    }, []);



    const internacoesGrahp = generateGraph("caso", "quantidade", internacoes)
    const partosGrahp = generateGraph("tipo_parto", "numero", partos)

   const handlerGraph = (title, data) => {
        return (
            <div className="row">
                <div className="col-lg-12">
                    <div className="card shadow-sm mb-4">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <PieChart data={data} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container-fluid mt-5" style={{ height: 'calc(100vh - 56px)', overflowY: 'auto' }}>
            {selectedGraph === 0 && handlerGraph("Internações", internacoesGrahp)}
            {selectedGraph === 1 && handlerGraph("Partos", partosGrahp)}
        </div>
    );
};

export default Dashboard;
