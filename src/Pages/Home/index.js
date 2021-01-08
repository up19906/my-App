import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <div>
      <img src="Picture/spec.gif " alt="spec" className="hero-img"></img>
      <div className="hero-text">
        <h1>
          Graphic design in allweb. <br />
          Specialists in branding, digital marketing and website.
        </h1>
        <br />
        <Link to="/portfolio">
          <button className="button">
            <span>View Portfolio</span>
          </button>
        </Link>
      </div>

      <div className="h-text">
        <h1>Featured design projects</h1>
        <p>
          บริษัท ออลล์เว็บ เทคโนโลยี่ จำกัด มีความภาคภูมิใจอย่างยิ่งที่ บริษัท
          ต่างๆ มอบความไว้วางใจให้เรา
        </p>
      </div>
      <div className="body">
        <div>
          <Container>
            <Row>
              <Col>
                <img
                  src="Picture/Interactive Design/appphone.gif"
                  alt="sent"
                  className="img-radius "
                ></img>
              </Col>
              <Col>
                <p>
                  Pizza Company Thailand’s biggest franchise restaurant company,
                  with over 270 restaurants, asked us to assist with updating
                  its packaging design and brand guidelines.
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  Pizza Company Thailand’s biggest franchise restaurant company,
                  with over 270 restaurants, asked us to assist with updating
                  its packaging design and brand guidelines.
                </p>
              </Col>
              <Col>
                <img
                  src="Picture/Interactive Design/appphone.gif"
                  alt="sent"
                  className="img-radius "
                ></img>
              </Col>
            </Row>
          </Container>
          <br />
          <br />
          <hr className="new" />
          <br />
          <div className="h-text">
            <h1>Our Services</h1>
            <p>
              บริษัท ออลล์เว็บ เทคโนโลยี่ จำกัด เรามีงานดีไซน์ที่หลากหลายทันสมัย
            </p>
          </div>
          <br />
          <Container className="pad">
            <Row className="center">
              <Col>
                <img src="Picture/Group-1410.svg" alt="Logo"></img>
                <p>
                  {" "}
                  แบรนด์ที่ประสบความสำเร็จต้องการความคาดหวังและกระตุ้นให้ผู้บริโภคเลือกแบรนด์ของตน
                </p>
              </Col>
              <Col>
                <img src="Picture/Group-1410.svg" alt="Logo"></img>
                <p>
                  {" "}
                  แบรนด์ที่ประสบความสำเร็จต้องการความคาดหวังและกระตุ้นให้ผู้บริโภคเลือกแบรนด์ของตน
                </p>
              </Col>
              <Col>
                <img src="Picture/Group-1410.svg" alt="Logo"></img>
                <p>
                  {" "}
                  แบรนด์ที่ประสบความสำเร็จต้องการความคาดหวังและกระตุ้นให้ผู้บริโภคเลือกแบรนด์ของตน
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}
