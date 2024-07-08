

const radialChartData = {
    series: [90, 85, 70],
    labels: ["Done", "In progress", "To do"],
    colors: ["#1C64F2", "#16BDCA", "#FDBA8C"]
};

const tableData = {
    members : [
        { Name: "John Doe", Id: 1, Nic: "123456789V", MemberShipType: "Monthly" },
        { Name: "Jane Smith", Id: 2, Nic: "987654321V", MemberShipType: "Quarterly" },
        { Name: "Michael Brown", Id: 3, Nic: "456123789V", MemberShipType: "SemiAnnual" },
        { Name: "Emily White", Id: 4, Nic: "321456987V", MemberShipType: "Annual" },
        { Name: "David Wilson", Id: 5, Nic: "789123456V", MemberShipType: "Monthly" },
        { Name: "David Wilson", Id: 5, Nic: "789123456V", MemberShipType: "Monthly" },

 
      ],
    columns : [
        { Header: "Name", accessor: "Name" },
        { Header: "ID", accessor: "Id" },
        { Header: "NIC", accessor: "Nic" },
        { Header: "Membership Type", accessor: "MemberShipType" }
      ]
}

const lineChartData = {
    categories: ['Week 01 July', 'Week 02 July', 'Week 03 July', 'Week 04 July', 'Week 05 July', 'Week 06 July'],
    series: [
        {
          name: "Income",
          data: [6500, 6418, 6456, 6526, 6356, 6456],
          color: "#1A56DB",
        },
        {
          name: "Monthly Members",
          data: [6456, 6356, 6526, 6332, 6418, 6500],
          color: "#7E3AF2",
        },
        {
            name: "Semi-Annual Members",
            data: [6526, 6418, 6332, 6456, 6500, 6356],
            color: "#FDBA8C",
        },
        {
          name: "Quarterly Members",
          data: [6332, 6526, 6418, 6356, 6456, 6418],
          color: "#16BDCA",
        },
        {
          name: "Annual Members",
          data: [6418, 6456, 6356, 6418, 6526, 6332],
          color: "#F3AF2G",
        },
      ]
}

  export {
    tableData,
    radialChartData,
    lineChartData
  }