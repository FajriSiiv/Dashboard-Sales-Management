import React, { useState } from "react";
import Chart from "react-apexcharts";

export default function StackedColumnChart(props?: any) {
  const [chartData, setChartData] = useState<any>({
    options: {
      chart: {
        stacked: true,
        animations: {
          enabled: true,
          easing: "easeinout",
          speed: 800,
          animateGradually: {
            enabled: true,
            delay: 150,
          },
          dynamicAnimation: {
            enabled: true,
            speed: 350,
          },
          toolbar: {
            show: false,
          },
        },

        dataLabels: {
          enabled: false,
        },
        // legend: {
        //   show: true,
        // },
        sparkline: {
          enabled: true,
        },
      },
      markers: {
        size: 0,
      },
      plotOptions: {
        bar: {
          borderRadius: 8,
          columnWidth: 40,
        },
      },
      // colors: [props.colors || "#dce6ec"],
      colors: ["#A9DFD8", "#2B2B36"],

      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      },
      title: {
        text: "Level",
        align: "left",
        style: {
          fontSize: "20px",
          fontWeight: "bold",
          fontFamily: "Inter",
          color: "#fff",
        },
      },
    },
    series: [
      {
        name: "Volume",
        data: props.data ? props.data : [30, 40, 25, 50, 49, 21],
      },
      {
        name: "Service",
        data: props.data ? props.data : [30, 40, 25, 50, 49, 21],
      },
    ],
  });
  return (
    <Chart
      options={chartData.options}
      series={chartData.series}
      type="bar"
      height={180}
    />
  );
}
