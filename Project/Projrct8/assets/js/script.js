// var chartData = {
//     labels: ["美國", "日本", "泰國", "琉球", "紐西蘭", "澳洲"],
//     data: [8, 22, 13, 15, 17, 21]
// };


var chartData;
var apiUrl = "https://raw.githubusercontent.com/chuang630cm40630/FileStorage/master/ChartData.json";

// var json = JSON.stringify(chartData);


var ctx = document.getElementById("barChart"); //抓canvas elements
var myChart = new Chart(ctx, {
    // 長條圖
    // type: 'bar',
    // 折線圖
    // type: 'line',
    // 園餅圖
    type: 'bar',

    data: {
        labels: [],
        datasets: [{
            label: '旅遊行程投票',
            data: [],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        }
    }
});

var request = $.ajax({
    url: apiUrl,
    method: "GET",
    //data: { id: menuId },
    dataType: "json"
});
//成功
request.done(function (chartData) {
    //$("#log").html(response);
    //alert(123)

    myChart.data.labels = chartData.labels;
    myChart.data.datasets[0].data = chartData.data
    myChart.update()
});

//失敗
request.fail(function (jqXHR, textStatus) {
    //alert("Request failed: " + textStatus);

});


var ctx2=$("#barChart2")
var myChart2 = new Chart(ctx2, {
    // 長條圖
    // type: 'bar',
    // 折線圖
    // type: 'line',
    // 園餅圖
    type: 'bar',

    data: {
        labels: [],
        datasets: [{
            label: '旅遊行程投票',
            data: [],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        }
    }
});

var request2 = $.ajax({
    url: apiUrl + 'abc',
    method: "GET",
    //data: { id: menuId },
    dataType: "json"
});
//成功
request2.done(function (chartData) {
    //$("#log").html(response);
    //alert(123)

    myChart.data.labels = chartData.labels;
    myChart.data.datasets[0].data = chartData.data
    myChart.update()
});

//失敗
request2.fail(function (jqXHR, textStatus) {
    //alert("Request failed: " + textStatus);

});