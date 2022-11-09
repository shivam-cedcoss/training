import { Heading } from "@shopify/polaris";
import { Table } from "antd";
import React, { useEffect, useState } from "react";
import Fetch from "../useFetch";
import classes from "./Table.module.css";
import { Spin } from "antd";
const columns = [
  {
    title: <Heading>Image</Heading>,
    dataIndex: "image",
    render: (record) =>
      record === "" ? (
        <img
          src="https://multi-account.sellernext.com/apps/amazon-multi/fe687731855298b4807ee4a49c3bf27c.png"
          className={classes.product_image}
          alt="No_image"
        />
      ) : (
        <img
          className={classes.product_image}
          src={record}
          alt="productImage"
        />
      ),
    key: "name",
  },
  {
    title: <Heading>Title</Heading>,
    dataIndex: "title",
    key: "age",
    width: "12%",
  },
  {
    title: <Heading>Product Details</Heading>,
    dataIndex: "productDetails",
    render: (record) => (
      <div>
        {record.map((i) => {
          return (
            <>
              <div>Price:{i.price}</div>
              <div>Barcode:{i.barcode}</div>
              <div>SKU:{i.sku}</div>
              <div>
                ASIN:<a href="1">{i.asin !== undefined ? i.asin : "N/A"}</a>
              </div>
            </>
          );
        })}
      </div>
    ),
    width: "30%",
    key: "address1",
  },
  {
    title: <Heading>Template</Heading>,
    dataIndex: "template",
    render: (record) => {
      if (record.type === "simple") {
        return (
          <div>{record.template === undefined ? "N/A" : record.template}</div>
        );
      }
    },
    width: "30%",
    key: "address2",
  },
  {
    title: <Heading>Inventory</Heading>,
    dataIndex: "inventory",
    render: (record) => (
      <div>
        {record.map((i) => {
          return (
            <>
              <div>{i.quantity} in stock</div>
            </>
          );
        })}
      </div>
    ),
    width: "30%",
    key: "address3",
  },
  {
    title: <Heading>Amazon Status</Heading>,
    dataIndex: "inventory",
    render: (record) => (
      <div>
        {record.map((i) => {
          return (
            <>
              <div>{i.status !== undefined ? i.status : "Error"}</div>
            </>
          );
        })}
      </div>
    ),
    width: "30%",
    key: "address4",
  },
  {
    title: <Heading>Activity</Heading>,
    dataIndex: "inventory",
    render: (record) => (
      <div>
        {record.map((i) => {
          return (
            <>
              <div>{i.process_tags !== undefined ? "in progress" : "--"}</div>
            </>
          );
        })}
      </div>
    ),
    width: "30%",
    key: "address5",
  },
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    // console.log(
    //   `selectedRowKeys: ${selectedRowKeys}`,
    //   "selectedRows: ",
    //   selectedRows
    // );
  },
  onSelect: (record, selected, selectedRows) => {
    // console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    // console.log(selected, selectedRows, changeRows);
  },
};
const urls = [
  "",
  "filter[cif_amazon_multi_inactive][1]=Not Listed&",
  "filter[items.status][1]=Inactive&",
  "filter[items.status][1]=Incomplete&",
  "filter[items.status][1]=Active&",
  "filter[cif_amazon_multi_activity][1]=error&"
];
const ProductTable = (props) => {
  const { fetchApi, apidata, loading } = Fetch();

  useEffect(() => {
    let url = `https://multi-account.sellernext.com/home/public/connector/product/getRefineProducts?count=50&${
      urls[props.selected]
    }productOnly=true&target_marketplace=eyJtYXJrZXRwbGFjZSI6ImFsbCIsInNob3BfaWQiOm51bGx9`;
    var options = {
      method: "GET",
      headers: {
        appTag: "amazon_sales_channel",
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiNjMzMjk2ZDYwZDVlMzE3NjI3NThiMmY5Iiwicm9sZSI6ImN1c3RvbWVyIiwiZXhwIjoxNjk4OTA3Mzc0LCJpc3MiOiJodHRwczpcL1wvYXBwcy5jZWRjb21tZXJjZS5jb20iLCJ0b2tlbl9pZCI6IjYzNjIxMTZlNTdiNGE3NjNlYzM5YWY5MiJ9.FXwul26U6GG2d9Wrfh5lNu-ikW_vwZ0tbBdjmoVTWhF3tOibyff7buM3tuIcgOkti9UvBpKtTo-SRU8A5UNEah37q1K1k-GQOSdwYxO1Q4Z9oF5AkIk8whl_-gZymjUqlMO0fjKJie6a_A4vxYk-PF8DEUHHOsc0MHeQA7TuaHR95fbV281SVXcmEP17_snN-eNsdOoP70vqiER3BkLV7Nr78JoSNZ38iqqznHEDKkLAgr2p3qI4OKZ7S6SiQglh1YfZgt4oZho868e8RAuV9QSomVpuuXAmyBHDGbUPrLTqvhj_CnzvQzEiNDnu__oh9UbWkTdZdAZhY_S5uzBMYg",
        "Ced-Source-Id": 476,
        "Ced-Source-Name": "shopify",
        "Ced-Target-Id": 479,
        "Ced-Target-Name": "amazon",
        appCode:
          "eyJzaG9waWZ5IjoiYW1hem9uX3NhbGVzX2NoYW5uZWwiLCJhbWF6b24iOiJhbWF6b24ifQ==",
      },
      payload: {
        count: 50,
        productOnly: true,
        target_marketplace: "eyJtYXJrZXRwbGFjZSI6ImFsbCIsInNob3BfaWQiOm51bGx9",
      },
    };
    fetchApi(url, options);
  }, []);
  console.log(apidata.data);
  const data =
    apidata.data &&
    apidata.data.rows.map((i, index) => {
      return {
        key: index,
        image: i.main_image,
        title: i.title,
        template: i,
        productDetails: i.items,
        inventory: i.items,
      };
    });
  return (
    <>
      {loading ? (
        <div className={classes.spinner}>
          <Spin />
        </div>
      ) : (
        <Table
          columns={columns}
          rowSelection={{
            ...rowSelection,
          }}
          dataSource={data}
        />
      )}
    </>
  );
};
export default ProductTable;
