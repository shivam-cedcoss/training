import { Table } from "antd";
import React, { useEffect, useState } from "react";
import Fetch from "../useFetch";
const columns = [
  {
    title: "Image",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Title",
    dataIndex: "age",
    key: "age",
    width: "12%",
  },
  {
    title: "Product Details",
    dataIndex: "address",
    width: "30%",
    key: "address",
  },
  {
    title: "Template",
    dataIndex: "address",
    width: "30%",
    key: "address",
  },
  {
    title: "Inventory",
    dataIndex: "address",
    width: "30%",
    key: "address",
  },
  {
    title: "Amazon Status",
    dataIndex: "address",
    width: "30%",
    key: "address",
  },
  {
    title: "Activity",
    dataIndex: "address",
    width: "30%",
    key: "address",
  },
];
const data = [
  {
    key: 1,
    name: "John Brown sr.",
    age: 60,
    address: "New York No. 1 Lake Park",
    children: [
      {
        key: 11,
        name: "John Brown",
        age: 42,
        address: "New York No. 2 Lake Park",
      },
      {
        key: 12,
        name: "John Brown jr.",
        age: 30,
        address: "New York No. 3 Lake Park",
        children: [
          {
            key: 121,
            name: "Jimmy Brown",
            age: 16,
            address: "New York No. 3 Lake Park",
          },
        ],
      },
      {
        key: 13,
        name: "Jim Green sr.",
        age: 72,
        address: "London No. 1 Lake Park",
        children: [
          {
            key: 131,
            name: "Jim Green",
            age: 42,
            address: "London No. 2 Lake Park",
            children: [
              {
                key: 1311,
                name: "Jim Green jr.",
                age: 25,
                address: "London No. 3 Lake Park",
              },
              {
                key: 1312,
                name: "Jimmy Green sr.",
                age: 18,
                address: "London No. 4 Lake Park",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 2,
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
];

// rowSelection objects indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
};
const ProductTable = (props) => {
  console.log("props", props);
  const { fetchApi, apidata } = Fetch();

//   useEffect(() => {}, [props.selected]);
  return (
    <>
      <Table
        columns={columns}
        rowSelection={{
          ...rowSelection,
        }}
        dataSource={data}
      />
    </>
  );
};
export default ProductTable;
