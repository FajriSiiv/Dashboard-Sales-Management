import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";
import { faker } from "@faker-js/faker";

function SplineAreaChart() {
  const chartRef = useRef(null);
  const dataArray = Array.from({ length: 8 }, () => {
    return faker.datatype.number({ min: 50, max: 500 });
  });

  const dataArray1 = Array.from({ length: 8 }, () => {
    return faker.datatype.number({ min: 50, max: 500 });
  });
  useEffect(() => {
    const options = {
      colors: ["#A9DFD8", "#F2C8ED"],

      chart: {
        type: "area",
        height: 260,
        stacked: true,
        toolbar: {
          show: false,
        },
        selection: { enabled: false },
        zoom: { enabled: false },
        sparkline: {
          enabled: true,
        },
        dataLabels: {
          enabled: false,
        },
      },
      stroke: {
        curve: "straight",
        width: 2,
      },
      series: [
        {
          name: "Last Month",
          // data: [5, 7, 10, 15, 20, 25, 30, 35, 40, 45],
          data: dataArray,
        },
        {
          name: "This Month",
          // data: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55],
          data: dataArray1,
        },
      ],
      xaxis: {
        categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      },
      yaxis: {
        show: false,
      },
      fill: {
        colors: undefined,
        opacity: 0.5,
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "vertical",
          shadeIntensity: 0.1,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 0.01,
          stops: [0, 70, 100],
          colorStops: [],
        },
        image: {
          src: [],
          width: undefined,
          height: undefined,
        },
        pattern: {
          style: "verticalLines",
          width: 6,
          height: 6,
          strokeWidth: 2,
        },
      },
      markers: {
        size: 3,
        hover: {
          size: 5,
        },
      },
      grid: {
        show: false,
      },
      tooltip: {
        fillSeriesColor: true,
        theme: "dark",
      },
      legend: {
        show: false,
      },
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return <div ref={chartRef}></div>;
}

export default SplineAreaChart;
