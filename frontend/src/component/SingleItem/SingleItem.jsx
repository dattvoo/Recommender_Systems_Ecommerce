import { Card, Col } from "antd";
import Meta from "antd/es/card/Meta";

export const SingleItem = () => {
  return (
    <Col span={24}>
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
    </Col>
  );
};
