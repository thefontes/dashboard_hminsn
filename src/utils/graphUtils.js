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
        const hue = Math.floor(Math.random() * 360);
        const saturation = 70 + Math.random() * 30;
        const lightness = 50 + Math.random() * 10;

        const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
        colors.push(color);
    }

    return colors;
}

function generatePrimaryColors(numColors) {
    const colors = [];

    for (let i = 0; i < numColors; i++) {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);

        const color = `rgb(${red}, ${green}, ${blue})`;
        colors.push(color);
    }

    return colors;
}
