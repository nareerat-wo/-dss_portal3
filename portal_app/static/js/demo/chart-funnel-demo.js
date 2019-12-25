window.onload = function() {
  var options = {
    animationEnabled: true,
    title: {
      // text: "Recruitment Analysis - April 2017"
    },
    data: [
      {
        type: "funnel",
        indexLabel: "{label} - {y}",
        toolTipContent: "<b>{label}</b>: {y} <b>({percentage}%)</b>",
        neckWidth: 50,
        neckHeight: 0,
        valueRepresents: "area",
        dataPoints: [
          { y: 100, label: "All" },
          { y: 90, label: "Age" },
          { y: 80, label: "Gender" },
          { y: 70, label: "Basic exclusion" },
          { y: 60, label: "Payroll" }
        ]
      }
    ]
  };
  calculatePercentage();
  $("#chartContainer").CanvasJSChart(options);

  function calculatePercentage() {
    var dataPoint = options.data[0].dataPoints;
    var total = dataPoint[0].y;
    for (var i = 0; i < dataPoint.length; i++) {
      if (i == 0) {
        options.data[0].dataPoints[i].percentage = 100;
      } else {
        options.data[0].dataPoints[i].percentage = (
          (dataPoint[i].y / total) *
          100
        ).toFixed(2);
      }
    }
  }
};
