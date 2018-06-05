export default function(elementName) {
    var container = document.getElementById(elementName);
    var data = {
      categories: ['2012', '2014', '2016', '2018', '2020'],
      series: [{
        name: '시장 규모 (억원)',
        data: [5000, 3000, 5000, 7000, 6000, 4000]
      }]
    };
    tui.chart.barChart(container, data);
};