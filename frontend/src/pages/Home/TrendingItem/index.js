import { Row, Tabs } from "antd";
import { SingleItem } from "../../../component/SingleItem/SingleItem";
import "./style.css";
export const TrendingItem = ({ title, productRecId }) => {
  const menu = [
    {
      label: `MAN`,
      key: "MAN",
    },
    {
      label: `WOMAN`,
      key: "WOMAN",
    },
    {
      label: `KIDS`,
      key: "KIDS",
    },
    {
      label: `ACCESSORIES`,
      key: "ACCESSORIES",
    },
    {
      label: `ESSENTIAL`,
      key: "ESSENTIAL",
    },
    {
      label: `PRICES`,
      key: "PRICES",
    },
  ];
  const productsId = [8650774,
    9306139,
    9961521,
    13238328,
    10485819,
    13238336,
    13238341,
    13238349]
  return (
    <div className="wrap">
      <div className="container">
        <div className="header">
          <h1> {title ? title : "Trending Item"}</h1>
        </div>
        <div className="content">
          <Tabs
            defaultActiveKey="1"
            // onChange={onChange}
            items={menu}
            className="tabs"
          />
        </div>
        <div className="list_product">
          <Row gutter={[16, 16]}>
            {
              productRecId ? (productRecId.map((productId, index) => (
                <SingleItem productId={productId} key={index} />
              ))) : (productsId.map((productId, index) => (
                <SingleItem productId={productId} key={index} />
              )))
            }
          </Row>
        </div>
      </div>
    </div>
  );
};
