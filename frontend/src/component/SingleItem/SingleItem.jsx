import { Card, Col } from "antd";
import Meta from "antd/es/card/Meta";
import { Link } from "react-router-dom";

export const SingleItem = ({ productId }) => {
 
  return (
    <Col xl={6} lg={8}>
      <Link to={`/product/${productId}`} >
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="example"
              src={`https://images.asos-media.com/products/ugg-classic-mini-boots-in-black-suede/${productId}-2`}
            />
          }
          className="cart_item"
        >
          <Meta title="Women Hot Collection" description="$29.00" />
        </Card>
      </Link>
    </Col>
  );
};
