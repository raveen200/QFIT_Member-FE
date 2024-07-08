import React, { useEffect } from "react";
import CustomTable from "../components/custom/CustomTable";
import { radialChartData, lineChartData } from "../configs/testData";
import CustomRadialChart from "../components/custom/CustomRadialChart";
import CustomLineChart from "../components/custom/CustomLineChart";
import { getAllMembershipsAction } from "../redux/actions/MembershipActions";
import { getAllMembersAction } from "../redux/actions/MemberActions";

import { useDispatch, useSelector } from "react-redux";

function DashboardPage() {
  const dispatch = useDispatch();
  const members = useSelector((state) => state.memberInfo.members.result);
  const memberships = useSelector((state) => state.membershipInfo.memberships) || [];
  const sortedMemberships =
    memberships.length > 0
      ? [...memberships].sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
      : [];

  console.log(sortedMemberships);

  useEffect(() => {
    const fetchMembers = async () => {
      dispatch(getAllMembersAction());
      dispatch(getAllMembershipsAction());
    };
    fetchMembers();
  }, [dispatch]);

  const tableData = {
    memberships: sortedMemberships?.map((membership) => ({
      Name:
        members.find((member) => member.id === membership?.membershipId)?.firstName +
        " " +
        members.find((member) => member.id === membership?.membershipId)?.lastName,
      Id: "G - " + membership?.membershipId,
      Nic: membership?.nic,
      MemberShipType:
        membership?.membershipType === 1
          ? "Monthly"
          : membership?.membershipType === 2
            ? "Quarterly"
            : membership?.membershipType === 3
              ? "Semi-Annually"
              : membership?.membershipType === 4
                ? "Annually"
                : "Corporate"
    })),
    columns: [
      { Header: "Name", accessor: "Name" },
      { Header: "ID", accessor: "Id" },
      { Header: "NIC", accessor: "Nic" },
      { Header: "Membership Type", accessor: "MemberShipType" }
    ]
  };

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
            <CustomTable columns={tableData.columns} data={tableData.memberships} />
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
