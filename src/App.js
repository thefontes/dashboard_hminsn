import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import PieChart from './PieChart';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PieChart.css'; // Importando o arquivo de estilo customizado

const App = () => {
    const [internacoes, setInternacoes]=useState([])
    useEffect(()=>{
        const obterInternacoes = async ()=>{
            try {
                const response = await fetch('http://localhost:3002/internacoes')
                const data = await response.json()
                setInternacoes(data)
            } catch (error){
                console.error('Erro ao obter dados da api:', error)
            }
        }
        obterInternacoes()
    }, [])
    const dados1 = {
        labels: internacoes.map(value => value.caso),
        datasets: [
            {
                data: internacoes.map(value => {
                    console.log(value)
                    return Number(value.quantidade)
                }),
                backgroundColor: [
                    'rgba(0, 162, 0, 0.6)',
                    'rgba(255, 0, 0, 1)',
                    'rgba(255, 200, 0, 0.6)',
                    'rgba(0, 192, 192, 0.6)',
                ],
            },
        ],
    };
    const dados2 = {
        labels: ['Maçã', 'Banana', 'Laranja', 'Pêra'],
        datasets: [
            {
                data: [65, 19, 3, 5],
                backgroundColor: [
                    'rgba(0, 162, 0, 0.6)',
                    'rgba(255, 0, 0, 1)',
                    'rgba(255, 200, 0, 0.6)',
                    'rgba(0, 192, 192, 0.6)',
                ],
            },
        ],
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-6">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">Internações</h5>
                            <PieChart data={dados1} />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">Gráfico 2</h5>
                            <PieChart data={dados2} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
export default App;