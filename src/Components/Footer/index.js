import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./sty.css";

export default function Footer() {
  return (
    <>
      <div className="toppad">
        <div className="sd">
          <br />
          <Container>
            <Row>
              <Col>
                <p class="font-weight-bold">CONTACT US</p>
                <p class="font-weight-bold">บริษัท ออลล์เว็บ เทคโนโลยี จำกัด</p>
                <p class="font-weight-bold">สาขาปทุมธาน </p>
                14880 หมู่ 1 ต.บ้านกลาง อ.เมืองปทุมธานี จ.ปทุมธานี 1200 โns.
                081-5359230 , 099-2863635
                <p class="font-weight-bold">สาขานครราชสีมา</p>
                327924 ถสืบศิริ ตในเมือง อเมือง จนครราชสีมา 30000
                โnS.044-353-569, 044-353-298 มือถือ 081-535-9230
              </Col>
              <Col>
                <p class="font-weight-bold">
                  Allweb technology Company Limited
                </p>
                14880 Moo 1 Banklang, Mueng Pathum Thani, Pathum Thani 12000
                327924 Suebsiri Rd., T.Nimueng,
                A.Mueng,NakhonRatchasima,Thailand 30000 E-mail
                allweb.technology@gmail.com Tel.+6644353569,+6644353298,
                +66815359230 ID Line allwebcctv
                <br />
                <tbody>
                  <tr>
                    <td>
                      <img
                        src="./Picture/Footer/line-P-poun.jpg"
                        alt=""
                        height="50%"
                      ></img>
                    </td>

                    <td>
                      <img
                        src="./Picture/Footer/line-icon.png"
                        alt=""
                        width="30%"
                      ></img>
                      <br />

                      <img
                        src="./Picture/Footer/Facebook-Logo.png"
                        alt=""
                        width="25%"
                      ></img>
                    </td>
                  </tr>
                </tbody>
              </Col>
            </Row>
          </Container>
          <br />
        </div>
      </div>
    </>
  );
}
