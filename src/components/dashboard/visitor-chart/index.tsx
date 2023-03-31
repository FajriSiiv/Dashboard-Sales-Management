import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { faker } from "@faker-js/faker";

const VisitorChart = () => {
  const [series, setSeries] = useState([
    {
      name: "Visitor",
      data: [
        [1630368000000, faker.datatype.number({ min: 50, max: 100 })],
        [1630454400000, faker.datatype.number({ min: 50, max: 100 })],
        [1630540800000, faker.datatype.number({ min: 50, max: 100 })],
        [1630627200000, faker.datatype.number({ min: 50, max: 100 })],
        [1630713600000, faker.datatype.number({ min: 50, max: 100 })],
        [1630800000000, faker.datatype.number({ min: 50, max: 100 })],
        [1630886400000, faker.datatype.number({ min: 50, max: 100 })],
        [1630972800000, faker.datatype.number({ min: 50, max: 100 })],
        [1631059200000, faker.datatype.number({ min: 50, max: 100 })],
        [1631145600000, faker.datatype.number({ min: 50, max: 100 })],
        [1631232000000, faker.datatype.number({ min: 50, max: 100 })],
        [1631318400000, faker.datatype.number({ min: 50, max: 100 })],
        [1631404800000, faker.datatype.number({ min: 50, max: 100 })],
        [1631491200000, faker.datatype.number({ min: 50, max: 100 })],
        [1631577600000, faker.datatype.number({ min: 50, max: 100 })],
        [1631664000000, faker.datatype.number({ min: 50, max: 100 })],
        [1631750400000, faker.datatype.number({ min: 50, max: 100 })],
        [1631836800000, faker.datatype.number({ min: 50, max: 100 })],
        [1631923200000, faker.datatype.number({ min: 50, max: 100 })],
        [1632009600000, faker.datatype.number({ min: 50, max: 100 })],
        [1632096000000, faker.datatype.number({ min: 50, max: 100 })],
        [1632182400000, faker.datatype.number({ min: 50, max: 100 })],
        [1632268800000, faker.datatype.number({ min: 50, max: 100 })],
        [1632355200000, faker.datatype.number({ min: 50, max: 100 })],
        [1632441600000, faker.datatype.number({ min: 50, max: 100 })],
        [1632528000000, faker.datatype.number({ min: 50, max: 100 })],
        [1632614400000, faker.datatype.number({ min: 50, max: 100 })],
        [1632700800000, faker.datatype.number({ min: 50, max: 100 })],
        [1632797200000, faker.datatype.number({ min: 50, max: 100 })],
      ],
    },
  ]);

  const [options, setOptions] = useState<any>({
    colors: ["#A9DFD8"],
    chart: {
      type: "area",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    xaxis: {
      type: "datetime",
      labels: {
        datetimeUTC: true,
        datetimeFormatter: {
          month: "MMM",
        },
      },
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
        stops: [0, 90, 100],
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
    tooltip: {
      fillSeriesColor: true,
      theme: "dark",
      x: {
        format: "MMM",
      },
    },
  });

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="area"
      height={300}
    />
  );
};

export default VisitorChart;
