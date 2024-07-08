import React from "react";
import CustomTable from "../components/custom/CustomTable"; // Adjust the import path as necessary
import { tableData, radialChartData, lineChartData } from "../configs/testData";
import CustomRadialChart from "../components/custom/CustomRadialChart";
import CustomLineChart from "../components/custom/CustomLineChart";

function DashboardPage() {

  return (
    <div className="container border-b  px-4 pt-6 border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
      <div className="flex-row mb-4">
        <div className="col-span-full">
          <p className="text-lg text-gray-500 dark:text-gray-300">Welcome back, Admin!</p>
        </div>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-8">
          <CustomTable columns={tableData.columns} data={tableData.members} />
        </div>
        <div className="col-span-4">
          <CustomRadialChart
            colors={radialChartData.colors}
            labels={radialChartData.labels}
            series={radialChartData.series}
          />
        </div>
      </div>
      <div className="grid grid-cols-12 mb-2">
        <div className="col-span-8">
          <CustomLineChart categories={lineChartData.categories} series={lineChartData.series} />
        </div>
      </div>
    </div>
  );
}
export default DashboardPage;
