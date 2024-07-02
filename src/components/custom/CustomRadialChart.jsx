import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const CustomRadialChart = ({ labels, series, colors }) => {
  const chartRef = useRef(null); // Use useRef to keep a reference to the chart instance

  useEffect(() => {
    const getChartOptions = () => ({
      series: series,
      colors: colors,
      chart: {
        height: "380px",
        width: "100%",
        type: "radialBar",
        sparkline: {
          enabled: true,
        },
      },
      plotOptions: {
        radialBar: {
          track: {
            background: '#E5E7EB',
          },
          dataLabels: {
            show: false,
          },
          hollow: {
            margin: 0,
            size: "32%",
          }
        },
      },
      grid: {
        show: false,
        padding: {
          left: 2,
          right: 2,
          top: -23,
          bottom: -20,
        },
      },
      labels: labels,
      legend: {
        show: true,
        position: "bottom",
        fontFamily: "Inter, sans-serif",
      },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
      },
      yaxis: {
        show: false,
        labels: {
          formatter: function (value) {
            return value + '%';
          }
        }
      }
    });

    // Cleanup function to destroy the chart before re-initializing
    const cleanupChart = () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };

    // Check if the chart instance already exists
    if (!chartRef.current && typeof ApexCharts !== 'undefined') {
      const chartElement = document.querySelector("#radial-chart");
      if (chartElement) {
        chartRef.current = new ApexCharts(chartElement, getChartOptions());
        chartRef.current.render();
      }
    } else {
      cleanupChart(); // Destroy the existing chart
      const chartElement = document.querySelector("#radial-chart");
      if (chartElement) {
        chartRef.current = new ApexCharts(chartElement, getChartOptions());
        chartRef.current.render();
      }
    }

    // Cleanup function to be called on component unmount
    return () => cleanupChart();
  }, [labels, series, colors]); // Re-run effect when labels, series, or colors change

  return <div className="py-6" id="radial-chart"></div>;
};

export default CustomRadialChart;