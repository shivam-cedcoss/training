import { Banner } from "@shopify/polaris";
import React, { useEffect } from "react";
import Fetch from "../useFetch";
const BannerComp = () => {
  const { fetchApi, loading, status, errorMsg, apidata } = Fetch();
  useEffect(() => {
    let url =
      "https://multi-account.sellernext.com/home/public/amazon/product/getMatchStatusCount";
    var options = {
      method: "POST",
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
      body: JSON.stringify({
        source: { marketplace: "shopify", shopId: "476" },
        target: { marketplace: "amazon", shopId: "479" },
        target_marketplace: "eyJtYXJrZXRwbGFjZSI6ImFsbCIsInNob3BfaWQiOm51bGx9",
      }),
    };
    fetchApi(url, options);
  }, []);
  return (
    <Banner
      title={
        apidata.success === true ? (
          <div>{apidata.data.not_linked} Products are yet to be linked!</div>
        ) : (
          ""
        )
      }
      action={{ content: "Link Products" }}
      status="warning"
      onDismiss={() => {}}
    >
      <p>
        Link Amazon Listings with Shopify products to manage inventory and
        Amazon orders.
      </p>
    </Banner>
  );
};
export default BannerComp;
