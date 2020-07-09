const countryChart = document.querySelector('#countryChart');
const countrySub = document.querySelector('#countrySub');

service.get('/brazil')
.then(function (response) {
    const data = response.data.data;
    renderChartCountry(data);
})
.catch(function (error) {
    console.log(error);
})

function renderChartCountry(data) {
    const date = new Date(data.updated_at).toLocaleDateString();
    
    countrySub.innerHTML = 'Atualizado em ' + date;
    const pieData = {
        type: 'doughnut',
        data: {
            labels: [
                'Casos', 'Confirmados', 'Recuperados', 'Mortes'
            ],
            datasets: [{
                data: [data.cases, data.confirmed, data.recovered, data.deaths],
                backgroundColor:[
                    'rgba(89, 165, 216, 0.6)',
                    'rgba(254, 255, 7, 0.6)',                    
                    'rgba(40, 167, 69, 0.6)',
                    'rgba(220, 21, 40, 0.6)',
                ],
                borderColor: [
                    'rgba(89, 165, 216, 0.6)',
                    'rgba(254, 255, 7, 0.6)',                    
                    'rgba(40, 167, 69, 0.6)',
                    'rgba(220, 21, 40, 0.6)',
                ]
            }],
        },    
        options: {
            
        }
    };

    new Chart(countryChart, pieData);
}
