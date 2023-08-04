export const generateGraph = (key, value, data) => {
    return  {
        labels: data.map(item => item[key]),
        datasets: [
            {
                data: data.map(item => Number(item[value])),
                backgroundColor: generateBeautifulRandomColors(data.length),
            },
        ],
    }
}

const generateBeautifulRandomColors = (numColors) => {
    const colors = [];

    for (let i = 0; i < numColors; i++) {
        const hue = Math.floor(Math.random() * 360); // Valor de 0 a 359 para representar o matiz (cor).
        const saturation = 70 + Math.random() * 30; // Valores de saturação entre 70 e 100.
        const lightness = 50 + Math.random() * 10; // Valores de luminosidade entre 50 e 60.

        const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
        colors.push(color);
    }

    return colors;
}

function generatePrimaryColors(numColors) {
    const colors = [];

    for (let i = 0; i < numColors; i++) {
        const red = Math.floor(Math.random() * 256); // Valor aleatório de 0 a 255 para a componente vermelha (R).
        const green = Math.floor(Math.random() * 256); // Valor aleatório de 0 a 255 para a componente verde (G).
        const blue = Math.floor(Math.random() * 256); // Valor aleatório de 0 a 255 para a componente azul (B).

        const color = `rgb(${red}, ${green}, ${blue})`;
        colors.push(color);
    }

    return colors;
}
