import {
  Breadcrumb,
  Layout,
  Form,
  Icon,
  Input,
  Button,
  Checkbox,
  Row,
  Col,
  Select,
  Table,
  Empty,
  Tag,
  Tabs
} from "antd";
import Center from "react-center";
import { NavLink } from "react-router-dom";
import { Header, Icon as Ic, Segment } from "semantic-ui-react";
const { TabPane } = Tabs;
const columns = [
  {
    title: "ลำดับ",
    render: text => (
      <span>
        {text.no}
      </span>
    )
  },
  {
    title: "รายการ",
    render: text => (
      <span>
        {text.title}
        <br />
        รูปแบบ : {text.category}
        <br />
        ประเภทเอกสาร : {text.type}
        {/* <br />
        การกระทำ : {text.uploadType == "new" ? (<Tag color="#87d068">อัปโหลดเอกสารใหม่</Tag>) : (<Tag color="#108ee9">อัปเดทเอกสาร</Tag>)} */}
      </span>
    )
  },
  {
    title: "รายละเอียด",
    render: text => (
      <span>
        ชื่อ : {text.Department}
        <br />
        รหัสพนักงาน: {text.Division}
        <br />
        ฝ่าย : {text.Department}
        <br />
        กอง : {text.Division}
      </span>
    )
  },
  {
    title: "สถานะ",
    className: "column-Document",
  render: text => <span>{text.status}</span>
  },
  {
    title: "Action",
    className: "column-Document",
    render: text => text.uploadType == "new" ? (<NavLink to="/list/detail"> <Button shape="circle" icon="question" /></NavLink>) : text.uploadType == "update" ?  (<NavLink to="/list/detailUpdate"> <Button shape="circle" icon="question" /></NavLink>) :  text.uploadType == "newer" ? (<NavLink to="/list/upload"> <Button shape="circle" icon="question" /></NavLink>) : (<NavLink to="/list/reject"> <Button shape="circle" icon="question" /></NavLink>)
  }
];
import TextArea from "antd/lib/input/TextArea";
import * as React from "react";
const { Search } = Input;
const { Option } = Select;
type State = {};
const { Content } = Layout;
type Props = {};
export class ListQA extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  public render() {
    const data = [];
      data.push({
        no: "1",
        title: "CAAT-AGA-AIM.PDF",
        name: "ศศิน นวพา",
        id: "1201",
        Department: "AGA",
        Division: "AA",
        uploadType: "new",
        type: "Checklist",
        category: "เอกสารที่ผู้จัดการฝ่ายรับรอง",
        status: "รอการตรวจสอบ"
      },{
        no: "2",
        title: "CAAT-AGA-AIM-001.PDF",
        name: "ศศิน นวพา",
        id: "1201",
        Department: "AGA",
        Division: "AA",
        uploadType: "newer",
        type: "Checklist",
        category: "เอกสารที่ผอ. หรือรองผอ. รับรอง",
        status: "QA อนุมัติเอกสารฉบับร่าง"
      })
    const dataApprove = []
      dataApprove.push({
        no: "1",
        title: "CAAT-AGA-AIM-001.PDF",
        name: "สมศรี ผิวงาม",
        id: "1202",
        Department: "AGA",
        Division: "AA",
        uploadType: "update",
        type: "Checklist",
        category: "เอกสารที่ผู้จัดการฝ่ายรับรอง",
        status: "อนุมัติ"
      })
      const dataReject = []
      dataReject.push({
        no: "1",
        title: "CAAT-AGA-AIM-002.PDF",
        name: "สมศรี ผิวงาม",
        id: "1202",
        Department: "AGA",
        Division: "AA",
        uploadType: "reject",
        type: "Checklist",
        category: "เอกสารที่ผู้จัดการฝ่ายรับรอง",
        status: "ไม่อนุมัติ"
      })
    return (
      <Content
      style={{
        margin: "24px 16px",
        padding: 24,
        background: "#fff",
        minHeight: 280
      }}
    >
      <Header as="h2">
        <Ic name="file alternate outline" />
        <Header.Content>
          รายการตรวจสอบเอกสาร
          <Header.Subheader>สถานะการตรวจสอบเอกสารจาก QA</Header.Subheader>
        </Header.Content>
      </Header>
      <hr />

      <Segment piled color="yellow">
        <Row gutter={16}>
          <Col span={6}>
            <span style={{ float: "right" }}>ฝ่าย :</span>
          </Col>
          <Col span={6}>
            {" "}
            <Select placeholder="-กรุณาเลือก-" style={{ width: 250 }}>
              <Option value="AGA">AGA</Option>
              <Option value="AA">AA</Option>
              <Option value="BB">BB</Option>
            </Select>
          </Col>
          <Col span={3}>
            <span style={{ float: "right" }}>กอง :</span>
          </Col>
          <Col span={9}>
            {" "}
            <Select
              placeholder="-กรุณาเลือก-"
              style={{ width: 250, float: "left" }}
            >
              <Option value="AA">AA</Option>
              <Option value="BB">BB</Option>
            </Select>
          </Col>
        </Row>
        <br />
        <Row gutter={16}>
          <Col span={6}>
            <span style={{ float: "right" }}>รูปแบบ :</span>
          </Col>
          <Col span={6}>
            {" "}
            <Select placeholder="-กรุณาเลือก-" style={{ width: 250 }}>
            <Option value="Public">เอกสารที่ผู้จัดการฝ่ายรับรอง</Option>
                <Option value="Internal">เอกสารที่ผอ. หรือรองผอ. รับรอง</Option>
            </Select>
          </Col>
          <Col span={3}>
            <span style={{ float: "right" }}>ประเภทเอกสาร :</span>
          </Col>
          <Col span={9}>
            {" "}
            <Select
              placeholder="-กรุณาเลือก-"
              style={{ width: 250, float: "left" }}
            >
             <Option value="Regulation">Checklist</Option>
                  <Option value="Guidance">Guidance</Option>
                  <Option value="Public">Department manual & Procedure</Option>
            </Select>
          </Col>
        </Row>
        {/* <br />
        <Row gutter={16}>
            <Center>
          <Col span={6}>
            <span style={{ float: "right" }}>การกระทำ :</span>
          </Col>
          <Col span={6}>
            <Select placeholder="-กรุณาเลือก-" style={{ width: 250 }}>
            <Option value="ทั้งหมด">ทั้งหมด</Option>
            <Option value="อัปโหลดเอกสารใหม่">อัปโหลดเอกสารใหม่</Option>
            <Option value="อัปเดทเอกสารใหม่">อัปเดทเอกสารใหม่</Option>
            </Select>
          </Col>
          </Center>
        </Row> */}
        <br />
        <Row gutter={16}>
          <Col span={6} />
          <Col span={6}>
            {" "}
            <Button type="primary" icon="search" style={{ float: "right" }}>
              ค้นหา
            </Button>
          </Col>
          <Col span={6}>
            <Button icon="close">ล้างค่า</Button>
          </Col>
          <Col span={6} />
        </Row>
      </Segment>

      <Tabs defaultActiveKey="1" style={{ textAlign: "center" }} type="card">
        <TabPane
          tab={
            <span >
              <Icon type="info-circle" />
              รอการตรวจสอบ
            </span>
          }
          key="1"
        >
          <Table
            style={{ padding: "0 40px 0 40px" }}
            columns={columns}
            dataSource={data}
            pagination={false}
            locale={{
              emptyText: (
                <Empty
                  description="ไม่พบข้อมูล"
                  // image={require("../../image/empty.gif")}
                />
              )
            }}
          />
        </TabPane>
        <TabPane
          tab={
            <span>
              <Icon type="check-circle" />
              อนุมัติ
            </span>
          }
          key="2"
        >
          <Table
            style={{ padding: "0 40px 0 40px" }}
            columns={columns}
            dataSource={dataApprove}
            pagination={false}
            locale={{
              emptyText: (
                <Empty
                  description="ไม่พบข้อมูล"
                  // image={require("../../image/empty.gif")}
                />
              )
            }}
          />
        </TabPane>
        <TabPane
          tab={
            <span>
              <Icon type="close-circle" />
              ไม่อนุมัติ
            </span>
          }
          key="3"
          className="rejectTab"
        >
          <Table
            style={{ padding: "0 40px 0 40px" }}
            columns={columns}
            dataSource={dataReject}
            pagination={false}
            locale={{
              emptyText: (
                <Empty
                  description="ไม่พบข้อมูล"
                  // image={require("../../image/empty.gif")}
                />
              )
            }}
          />
        </TabPane>
      </Tabs>
    </Content>
    );
  }
}
