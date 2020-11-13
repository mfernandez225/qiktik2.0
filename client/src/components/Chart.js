import React from "react";
import {Line} from "react-chartjs-2";

function Chart({chartData}) {  

  return (
    <div>
      <Line
        data={{
          labels:  chartData.labels,
          datasets: [
            {
              label: "Closing Price",
              data:chartData.close,
              borderColor: ["#5debe7"],
              fill: false,
              pointBackgroundColor: "white",
              borderWidth: 2,
            },
            {
              label: "High Price",
              data:chartData.high,
              borderColor: ["#efc764"],
              fill: false,
              pointBackgroundColor: "white",
              borderWidth: 2,
            },
            {
              label: "Low Price",
              data:chartData.low,
              fill: false,
              borderColor: ["#e93232"],
              pointBackgroundColor: "white",
              borderWidth: 2,
            },
          ],
        }}
        options={{
          legend: {
            display: true,
            position: "top",
            labels: {
              fontColor: "#fff",
              fontSize: 16,
            },
          },
          tooltips: {
            displayColors: false,
            bodyFontSize: 20,
            titleFontSize: 15,

            xPadding: 20,
            yPadding: 20,
            callbacks: {
              label: (tooltipItem) => {
                return `$ ${tooltipItem.value}`;
              },
            },
          },
        }}
      />
    </div>
  );
}

export default Chart;
