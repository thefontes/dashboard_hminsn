import React, { useEffect, useState } from 'react';
import PieChart from './PieChart';
import {obterCesarianas, obterComplicacoes, obterInternacoes, obterPartos, obterReadmissoes} from "../api/Dashboard";
import {generateGraph} from "../utils/graphUtils";

const Dashboard = ({ selectedGraph }) => {
    const [internacoes, setInternacoes] = useState([]);
    const [partos, setPartos] = useState([]);
    const [readmissoes, setReadmissoes] = useState([]);
    const [complicacoes, setComplicacoes] = useState([]);
    const [cesarianas, setCesarianas] = useState([]);

    useEffect(() => {
       obterPartos().then(result => {
           setPartos(result)
       })
       obterInternacoes().then(result => {
           setInternacoes(result)
       })
        obterReadmissoes().then(result => {
            console.log(result)
            setReadmissoes(result)
        })
        obterComplicacoes().then(result => {
            console.log(result)
            setComplicacoes(result)
        });
        obterCesarianas().then(result => {
            console.log(result)
            setCesarianas(result)
        });
    }, []);

    const internacoesGrahp = generateGraph("caso", "quantidade", internacoes)
    const partosGrahp = generateGraph("tipo_parto", "numero", partos)
    const readmissoesGrahp = generateGraph("motivo", "numero", readmissoes)
    const complicacoesGrahp = generateGraph("descricao", "numero", complicacoes)
    const cesarianasGrahp = generateGraph("descricao", "numero", cesarianas)

    console.log(readmissoesGrahp)
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
            {selectedGraph === 2 && handlerGraph("Readmissões", readmissoesGrahp)}
            {console.log(selectedGraph)}
            {selectedGraph === 3 && handlerGraph("Complicações", complicacoesGrahp)}
            {selectedGraph === 4 && handlerGraph("Cesarianas", cesarianasGrahp)}
        </div>
    );
};

export default Dashboard;
