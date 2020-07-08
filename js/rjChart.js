const rjChart = document.querySelector('#rjChart');

service.get('/brazil/uf/rj')
.then(function (response) {
    const data = response.data;
    renderChartState(data);
})
.catch(function (error) {
    console.log(error);
})

function renderChartState(data) {
    const date = new Date(data.datetime).toLocaleDateString();
    const pieData = {
        type: 'doughnut',
        data: {
            labels: [
                'Casos', 'Suspeitos', 'Mortes'
            ],
            datasets: [{
                data: [data.cases, data.suspects, data.deaths],
                backgroundColor:[
                    'rgba(89, 165, 216, 0.6)',
                    'rgba(254, 255, 7, 0.6)',
                    'rgba(220, 21, 40, 0.6)'
                ],
                borderColor: [
                    'rgba(89, 165, 216, 0.6)',
                    'rgba(254, 255, 7, 0.6)',
                    'rgba(220, 21, 40, 0.6)'
                ]
            }],
        },    
        options: {
            title: {
                display: true,
                text: ['Casos de covid-19 no Rio de Janeiro', 'Atualizado em '+ date],
                fontSize: 22,
                fontStyle: 'italic'
            },
        }
    };

    new Chart(rjChart, pieData);
}
