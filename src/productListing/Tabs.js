import {
  Card,
  Text,
  Tabs,
  TextContainer,
  Badge,
  Frame,
} from "@shopify/polaris";
import { useState, useCallback, useEffect } from "react";
import BannerComp from "../NotlistedBanner/BannerComp";
import classes from "./Tabs.module.css";
import Fetch from "../useFetch";
import Filters from "../filters/Filters";
import ProductTable from "../Table/Table";
const Tab = () => {
  const [selected, setSelected] = useState(0);
  const [badgeData, setBadgedata] = useState({
    not_listed: 0,
    inactive: 0,
    incomplete: 0,
    active: 0,
  });
  const { fetchApi, loading, status, errorMsg, apidata } = Fetch();
  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    []
  );
  useEffect(() => {
    let url =
      "https://multi-account.sellernext.com/home/public/connector/product/getStatusWiseCount?&target_marketplace=eyJtYXJrZXRwbGFjZSI6ImFsbCIsInNob3BfaWQiOm51bGx9";
    var options = {
      method: "GET",
      headers: {
        "Content-type": "application/json",
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
        target_marketplace: "eyJtYXJrZXRwbGFjZSI6ImFsbCIsInNob3BfaWQiOm51bGx9",
      },
    };
    fetchApi(url, options);
  }, []);

  useEffect(() => {
    if (apidata.success) {
      var notListed = 0;
      var inActive = 0;
      var inComplete = 0;
      var Active = 0;

      apidata.data.map((i) => {
        return (
          i._id === null ? (notListed = i.total) : "",
          i._id === "Inactive" ? (inActive = i.total) : "",
          i._id === "Incomplete" ? (inComplete = i.total) : "",
          i._id === "Active" ? (Active = i.total) : "",
          setBadgedata({
            ...badgeData,
            not_listed: notListed,
            inactive: inActive,
            incomplete: inComplete,
            active: Active,
          })
        );
      });
    }
  }, [apidata]);

  const tabs = [
    {
      id: "all-customers-1",
      content: "All",
      accessibilityLabel: "All customers",
      panelID: "all-customers-content-1",
    },
    {
      id: "accepts-marketing-1",
      content: (
        <>
          <span>Not Listed</span>
          <span>
            <Badge>{badgeData.not_listed}</Badge>
          </span>
        </>
      ),
      panelID: "accepts-marketing-content-1",
    },
    {
      id: "repeat-customers-1",
      content: (
        <>
          <span>Inactive</span>
          <span>
            <Badge status="critical">{badgeData.inactive}</Badge>
          </span>
        </>
      ),
      panelID: "repeat-customers-content-1",
    },
    {
      id: "prospects-1",
      content: (
        <>
          <span>Incomplete</span>
          <span>
            <Badge status="warning"> {badgeData.incomplete}</Badge>
          </span>
        </>
      ),
      panelID: "prospects-content-1",
    },
    {
      id: "prospects-2",
      content: (
        <>
          <span>Active</span>
          <span>
            <Badge status="success"> {badgeData.active}</Badge>
          </span>
        </>
      ),
      panelID: "prospects-content-2",
    },
    {
      id: "prospects-3",
      content: "Error",
      panelID: "prospects-content-3",
    },
  ];
  return (
    <>
      <div className={classes.top_listing_para}>
        <TextContainer>
          <Text variant="headingMd" as="h1">
            Listings
          </Text>
          <p>
            The section will enable you to manage all your listings of your
            active Amazon account. The feature helps you view the status of your
            listings along with performing actions like Bulk upload, running
            Sync Status, Amazon Lookup, or linking your unlinked Products by
            getting directed to the Product Linking section.
          </p>
        </TextContainer>
      </div>
      <div className={classes.banner_div}>{<BannerComp />}</div>
      <Frame>
      <Card>
        <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
          <div>{<Filters/>}</div>
          <Card.Section>
            {/* <p>Tab {selected} selected</p> */}
            <div>{<ProductTable selected={selected}/>}</div>
          </Card.Section>
        </Tabs>
        </Card>
      </Frame>
    </>
  );
};
export default Tab;
