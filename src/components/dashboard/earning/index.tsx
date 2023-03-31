import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { faker } from "@faker-js/faker";

const Earnings = () => {
  const data = faker.datatype.number({ min: 10, max: 100 });
  const [series, setSeries] = useState([data]);

  const options: any = {
    chart: {
      height: 150,
      type: "radialBar",
      offsetY: -10,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        hollow: {
          size: "50%",
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: -2,

            fontSize: "36px",
            color: "#fff",
            formatter: function (val: any) {
              return val + "%";
            },
            show: true,
          },
        },
        track: {
          show: true,
          startAngle: undefined,
          endAngle: undefined,
          background: "#2B2B36",
          strokeWidth: "97%",
          opacity: 1,
          margin: 5,
          dropShadow: {
            enabled: false,
            top: 0,
            left: 0,
            blur: 3,
            opacity: 0.5,
          },
        },
      },
    },
    colors: ["#A9DFD8"],
  };

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="radialBar"
        height={350}
      />
    </div>
  );
};

export default Earnings;
