import "./style.css";
import { Col, Row, Tabs } from "antd";
import { Card } from "antd";
export const TrendingItem = () => {
  const { Meta } = Card;
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
  return (
    <div className="wrap">
      <div className="container">
        <div className="header">
          <h1>Trending Item</h1>
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
            <Col xl={6} lg={8}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt="example"
                    src="	https://wpthemesgrid.com/themes/free/eshop/images/products/p1.jpg"
                  />
                }
                className="cart_item"
              >
                <Meta title="Women Hot Collection" description="$29.00" />
              </Card>
              {/* <div className="add_to_cart">
                  ADD TO CARD
              </div> */}
            </Col>
            <Col xl={6} lg={8}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt="example"
                    src="https://wpthemesgrid.com/themes/free/eshop/images/products/p3.jpg"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </Col>
            <Col xl={6} lg={8}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt="example"
                    src="https://wpthemesgrid.com/themes/free/eshop/images/products/p5.jpg"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </Col>
            <Col xl={6} lg={8} style={{ marginBottom: "12px" }}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt="example"
                    src="https://wpthemesgrid.com/themes/free/eshop/images/products/p7.jpg"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </Col>
            <Col xl={6} lg={8}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </Col>
            <Col xl={6} lg={8}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </Col>
            <Col xl={6} lg={8}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </Col>
            <Col xl={6} lg={8}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt="example"
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  />
                }
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
