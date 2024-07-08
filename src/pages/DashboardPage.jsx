import React, { useEffect } from "react";
import CustomTable from "../components/custom/CustomTable"; // Adjust the import path as necessary
import { tableData, radialChartData, lineChartData } from "../configs/testData";
import CustomRadialChart from "../components/custom/CustomRadialChart";
import CustomLineChart from "../components/custom/CustomLineChart";
import { getAllMembershipsAction } from "../redux/actions/MembershipActions";
import { useDispatch } from "react-redux";

function DashboardPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMembershipsAction());
  }, [dispatch]);

  return (
    <div className="container border-b  px-4 pt-6 border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
      <div className="flex-row mb-4">
        <div className="col-span-full">
          <h1 className="text-xl font-semibold text-gray-900  dark:text-white sm:text-2xl">
            Welcome back, Admin!
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-8">
          
          <div className="mb-4 rounded-lg bg-stone-50 p-4 shadow dark:bg-gray-800 dark:border-2 dark:border-cyan-200 sm:p-6 xl:p-8">
          <h4 className="text-sm mb-3 text-gray-900  dark:text-white sm:text-2xl">
           Latest Membership Updates
          </h4>
            <CustomTable columns={tableData.columns} data={tableData.members} />
          </div>
        </div>
        <div className="col-span-4">
        <div className="mb-4  ml-4 rounded-lg bg-stone-50 p-4 shadow dark:bg-gray-800 dark:border-2 dark:border-cyan-200 sm:p-6 xl:p-8">
          <CustomRadialChart
            colors={radialChartData.colors}
            labels={radialChartData.labels}
            series={radialChartData.series}
          />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 mb-2">
        <div className="col-span-12">
        <div className="mb-4 rounded-lg bg-stone-50 p-4 shadow dark:bg-gray-800 dark:border-2 dark:border-cyan-200 sm:p-6 xl:p-8">
          <CustomLineChart categories={lineChartData.categories} series={lineChartData.series} />
        </div>
        </div>
      </div>
    </div>
  );
}
export default DashboardPage;
