import React from "react";
import "./stylesection2.scss";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const datas = [
  {
    img: "http://allsolutionstech.com/images/stories/sk-0103.jpg",
    title: "บริการติดตั้งตู้สาขาโทรศัพท์",
    descrition:
      "บริการติดตั้งตู้สาขาโทรศัพท์ที่ได้มาตรฐาน มีให้เลือกหลากหลายยี่ห้อ หลากหลายราคา ",
    href: "/printdesign",
  },
  {
    img: "http://allsolutionstech.com/images/stories/sk-0106-1.jpg",
    title: "เครื่องสแกนลายนิ้วมือ เครื่องสแกนแบบบัตรทาบ",
    descrition: "ระบบรักษาความปลอดภัย และระบบลงเวลาของพนักงาน",
    href: "/printdesign",
  },
  {
    img: "http://allsolutionstech.com/images/stories/sk-0109.jpg",
    title: "สัญญาณกันขโมย",
    descrition:
      " บริการออกแบบ ให้คำแนะนำและบริการติดตั้งสัญญาณกันขโมย  สำหรับที่อยู่อาศัย อาคาร สำนักงาน โรงงาน แบบครบวงจร",
    href: "/printdesign",
  },
  {
    img: "http://allsolutionstech.com/images/stories/sk-0105.jpg",
    title: "ป้ายไฟ",
    descrition: "จัดทำป้ายไฟต่างๆหลากหลายแบบ",
    href: "/printdesign",
  },
];

export default function section2() {
  return (
    <>
      <div className="main">
        <div className="h-text ">
          <h1 className="heading">บริการของเรา</h1>
          <p>
            บริษัท ออลล์เว็บ เทคโนโลยี่ จำกัด เรามีงานดีไซน์ที่หลากหลายทันสมัย
          </p>
        </div>

        {/* <div className="section">
          {datas.map(function (data, i) {
            return (
              <Row>
                <Link to={data.href} className="card">
                  <div className="card1">
                    <div className="post">
                      <img className="post-image" src={data.img} />
                      <div className="post-content">
                        <p className="post-header">{data.title}</p>
                        <p className="post-text">{data.descrition}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </Row>
            );
          })}
        </div> */}
        <div className="container">
          <Row>
            {datas.map(function (data, i) {
              return (
                <Col xs={12} sm={4}>
                  <Link to={data.href} className="card">
                    <div className="img-card">
                      <img src={data.img} />
                    </div>
                    <div className="card-content">
                      <h4 className="card-title">{data.title}</h4>
                      <p className>{data.descrition}</p>
                    </div>
                    <div className="card-read-more">
                      <a
                        href="http://www.fostrap.com/2016/03/bootstrap-3-carousel-fade-effect.html"
                        className="btn btn-link btn-block"
                      >
                        Read More
                      </a>
                    </div>
                  </Link>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </>
  );
}
