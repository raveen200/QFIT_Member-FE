import { Table } from "flowbite-react";

// Define props for the component
export default function CustomTable({ columns, data }) {
  return (
    <div className="overflow-x-auto w-full">
      <Table>
        <Table.Head>
          {columns.map((column) => (
            <Table.HeadCell key={column.accessor}>{column.Header}</Table.HeadCell>
          ))}
        </Table.Head>
        <Table.Body className="divide-y">
          {data.map((row, rowIndex) => (
            <Table.Row key={rowIndex} className="bg-white dark:border-gray-700 dark:bg-gray-800">
              {columns.map((column) => (
                <Table.Cell key={column.accessor} className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {column.Cell ? column.Cell(row) : row[column.accessor]}
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}