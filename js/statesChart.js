const statesChart = document.querySelector('#statesChart');
const statesSub = document.querySelector('#statesSub');

service.get('')
.then(function (response) {
    const data = response.data;
    renderChartStates(data);
})
.catch(function (error) {
    console.log(error);
})

function renderChartStates(data) {
    const date = new Date(data.data[0].datetime).toLocaleDateString();
    statesSub.innerHTML = 'Atualizado em ' + date;
    var items = data.data;
    
    barData = {
        labels: items.map(function (value) {
            return value.state;
        }),
        datasets: [
            {
                label: 'Casos',
                backgroundColor: 'rgba(89, 165, 216, 0.2)',
                borderColor: 'rgba(89, 165, 216, 1)',
                borderWidth: 1,
                data: items.map(function (value) {
                    return value.cases;
                })
            },
            {
                label: 'Suspeitos',
                backgroundColor: 'rgba(254, 255, 7, 0.2)',
                borderColor: 'rgba(254, 255, 7, 1)',
                borderWidth: 1,
                data: items.map(function (value) {
                    return value.suspects;
                })
            },
            {
                label: 'Mortes',
                backgroundColor: 'rgba(220, 21, 40, 0.2)',
                borderColor: 'rgba(220, 21, 40, 1)',
                borderWidth: 1,
                data: items.map(function (value) {
                    return value.deaths;
                })
            },
        ]
    }
    
    new Chart(statesChart, {
        type: 'bar',
        data: barData,
        options: {
            
        },
        
    });
}
