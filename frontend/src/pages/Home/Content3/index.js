import { Row, Col } from "antd";
import { SingleItem } from "../../../component/SingleItem/SingleItem";
export const Content3 = () => {
  return (
    <div className="wrap">
      <div className="container">
        <Row gutter={[40, 24]}>
          <Col span={8}>
            <h1 className="heading">On Sale</h1>
            <Row gutter={[40, 24]}>
              <SingleItem />
              <SingleItem />
            </Row>
          </Col>
          <Col span={8}>
            <h1>Best Seller</h1>
            <Row gutter={[40, 24]}>
              <SingleItem />
              <SingleItem />
            </Row>
          </Col>
          <Col span={8}>
            <h1>Top Viewed</h1>
            <Row gutter={[40, 24]}>
              <SingleItem />
              <SingleItem />
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};
