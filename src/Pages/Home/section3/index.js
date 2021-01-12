import React from "react";
import "./section3.scss";
import { Container, Row, Col } from "react-bootstrap";

const datas = [
  {
    img: "https://images.unsplash.com/photo-1547744037-b80bdba1b6f0",
    title: "Hello World",
    descrition:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    href: "/printdesign",
  },
  {
    img: "https://images.unsplash.com/photo-1547744037-b80bdba1b6f0",
    title: "Hello World2",
    descrition:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    href: "/printdesign",
  },
  {
    img: "https://images.unsplash.com/photo-1547744037-b80bdba1b6f0",
    title: "Hello World2",
    descrition:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    href: "/printdesign",
  },
];

export default function section3() {
  return (
    <>
      <div className="h-text">
        <h1>ลูกค้าของเรา</h1>
        <p>
          บริษัท ออลล์เว็บ เทคโนโลยี่ จำกัด เรามีงานดีไซน์ที่หลากหลายทันสมัย
        </p>
      </div>
      <div className="container">
        <div className="container3">
          <div className="card">
            <img
              src="https://i.loli.net/2019/10/18/buDT4YS6zUMfHst.jpg"
              alt="Sora"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Sora</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="#" className="btn">
                More
              </a>
            </div>
          </div>
          <div className="card">
            <img
              src="https://i.loli.net/2019/10/18/Ujf6n75o8TtIsWX.jpg"
              alt="Umi"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Umi</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="#" className="btn">
                More
              </a>
            </div>
          </div>
          <div className="card">
            <img
              src="https://i.loli.net/2019/10/18/uXF1Kx7lzELB6wf.jpg"
              alt="Mori"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Mori</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="#" className="btn">
                More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
