import React, { useState } from "react";
import { Table } from "flowbite-react";

export default function CustomTable({ columns, data }) {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const goToPreviousPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goToNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <div className="overflow-x-auto w-full">
      <Table>
        <Table.Head>
          {columns.map((column) => (
            <Table.HeadCell key={column.accessor}>{column.Header}</Table.HeadCell>
          ))}
        </Table.Head>
        <Table.Body className="divide-y">
          {currentData.map((row, rowIndex) => (
            <Table.Row key={rowIndex} className="bg-white dark:border-gray-700 dark:bg-gray-800">
              {columns.map((column) => (
                <Table.Cell
                  key={column.accessor}
                  className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {column.Cell ? column.Cell(row) : row[column.accessor]}
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      {totalPages > 1 && (
        <div className="flex font-semibold  dark:text-white  gap-4 justify-end  ml-4 mt-4">
          <button onClick={goToPreviousPage} disabled={currentPage === 1}>
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button onClick={goToNextPage} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      )}
    </div>
  );
}
