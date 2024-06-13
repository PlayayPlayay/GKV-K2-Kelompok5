PIE = document.getElementById('pieplot');

var data = [{
    labels: ['Jawa Timur', 'Jawa Tengah', 'Jawa Barat', 'Lampung', 'Nusa Tenggara Timur', 'Sumatera Barat', 'Sumatera Utara', 'Sulawesi Selatan', 'Sumatera Selatan', 'Kalimantan Timur', 'Provinsi Lainnya'],
    values: [26.553882308958148, 12.559155814860357, 10.204871182431518, 8.726847737621988, 7.351678842539991, 3.9206050508650656, 3.3470534058405237, 3.331905719355719, 2.274214082902398, 1.9988578123509317, 19.73092804227336],
    type: 'pie'
}];

var layout = {
    title: 'Kontribusi Produksi Pepaya<br><span style="font-size:0.5em;color:gray">Rata-rata tahun 2017 hingga 2021</span>',
    font: {size: 13},
    margin: {t: 100, b: 50, l: 70, r: 70},

};

var config = {responsive: true};
Plotly.newPlot(PIE, data, layout, config);