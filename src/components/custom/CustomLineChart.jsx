import React, { useEffect } from "react";
import ApexCharts from "apexcharts";

const CustomLineChart = ({ categories, series }) => {
  useEffect(() => {
    const options = {
        chart: {
          height: "100%",
          maxWidth: "100%",
          type: "line",
          fontFamily: "Inter, sans-serif",
          dropShadow: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        tooltip: {
          enabled: true,
          x: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 6,
        },
        grid: {
          show: true,
          strokeDashArray: 4,
          padding: {
            left: 2,
            right: 2,
            top: -26
          },
        },
        series: series,
        legend: {
          show: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          categories: categories,
          labels: {
            show: true,
            style: {
              fontFamily: "Inter, sans-serif",
              cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
            }
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          show: false,
        },
      }

    const chartElement = document.createElement("div");
    chartElement.id = "line-chart";
    document.querySelector(".line-chart-container").appendChild(chartElement);

    const chart = new ApexCharts(chartElement, options);
    chart.render();

    return () => {
      chart.destroy();
      document.querySelector(".line-chart-container").removeChild(chartElement);
    };
  }, [categories, series]);

  return <div className="line-chart-container h-96"></div>;
};

export default CustomLineChart;
