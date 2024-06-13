BAR = document.getElementById('barplot');
LINE = document.getElementById('lineplot');

// produksi sebagai bar chart dan luas panen sebagai line chart
var data = [{
    x: ['2017', '2018', '2019', '2020', '2021'],
    y: [875106, 887580.1, 986991.33, 1016387.74, 1168265.89],
    type: 'bar',
    name: 'Produksi',
    marker: {
        color: 'rgb(11,102,35)'
    }
}, {
    x: ['2017', '2018', '2019', '2020', '2021'],
    y: [10034, 12712.9, 12851.99, 11827.18, 11313.98],
    type: 'scatter',
    name: 'Luas Panen',
    yaxis: 'y2',
    line: {
        color: 'rgb(255, 127, 0)',
        width: 4,
        shape: 'spline' // Make the line curvy
    },
    marker: {
        color: 'rgb(255, 127, 0)',
        size: 10
    }
}];

var layout = {
    title: 'Produksi dan Luas Panen<br><span style="font-size:0.5em;color:gray">Data dari tahun 2017 hingga 2021</span>',
    xaxis: {
        title: 'Tahun',
        tickmode: 'linear',
        tick0: 2017,
        dtick: 1,
        showgrid: false,
        gridcolor: 'rgba(0, 0, 0, 0.1)',
        gridwidth: 1
    },
    yaxis: {
        title: 'Produksi (Ton)',
        titlefont: {color: 'rgb(11,102,35)'},
        tickfont: {color: 'rgb(11,102,35)'},
        showgrid: true,
        gridcolor: 'rgba(0, 0, 0, 0.1)',
        gridwidth: 1,
        tick0: 0,
        dtick: 200000,
        tickformat: ',.0f',
        range: [0, 1200000],
    },
    yaxis2: {
        title: 'Luas Panen (Ha)',
        titlefont: {color: 'rgb(255, 127, 0)'},
        tickfont: {color: 'rgb(255, 127, 0)'},
        overlaying: 'y',
        side: 'right',
        showgrid: true,
        tick0: 10000,
        dtick: 500,
        tickformat: ',.0f',
        range: [10000, 14000],        
    },
    font: {size: 15},
    margin: {t: 50, b: 50, l: 150, r: 150},
    legend: {x: 5, y: 5, xanchor: 'right', yanchor: 'bottom'},
};

var config = {responsive: true};
Plotly.newPlot(BAR, data, layout, config);
