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
    Tabs,
    DatePicker
  } from "antd";
  import Center from "react-center";
  import { NavLink } from "react-router-dom";
  import { Header, Icon as Ic, Segment } from "semantic-ui-react";
  const { TabPane } = Tabs;
  const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
  import { PaginationConfig } from "antd/lib/table";

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
        title: "ชื่อไฟล์",
        render: text => (
          <span>
           {text.title}
          </span>
        )
      },
    {
      title: "รายละเอียด",
      render: text => (
        <span>
          รูปแบบ : {text.category}
          <br />
          ประเภทเอกสาร : {text.type}
          {
            text.docStatus && (
            <p>สถานะเอกสาร : {text.docStatus}</p>
            )
          }
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
        title: "เจ้าหน้าที่ผู้ตรวจสอบ",
        className: "column-Document",
      render: text => <span>{text.staff}</span>
      },
    {
      title: "Action",
      className: "column-Document",
      render: text => text.uploadType == "new" ? (<NavLink to="/list/detail"> <Button shape="circle" icon="question" /></NavLink>) : (<NavLink to="/list/detailUpdate"> <Button shape="circle" icon="question" /></NavLink>)
    }
  ];
  import TextArea from "antd/lib/input/TextArea";
  import * as React from "react";
  const { Search } = Input;
  const { Option } = Select;
  type State = {
    pagination: PaginationConfig;

  };
  const { Content } = Layout;
  type Props = {};
  export class ReportQA extends React.Component<Props, State> {
    constructor(props) {
      super(props);
      this.state = {
        pagination: {
            showTotal: total => `ทั้งหมด ${total} รายการ`
          }
      };
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
          status: "รอการตรวจสอบ",
          staff: "ขนมหวาน หวัง"
        },
        {
          no: "2",
          title: "CAAT-AIR-AIM.PDF",
          name: "สมชาย ใจดี",
          id: "1432",
          Department: "AIR",
          Division: "ABB",
          uploadType: "update",
          type: "Manual",
        category: "เอกสารที่ผอ. หรือรองผอ. รับรอง",
          status: "อนุมัติ",
          staff: "ขนมหวาน หวัง",
          docStatus: "เอกสารฉบับร่าง (Draft version)"

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
              <span style={{ float: "right" }}>ชื่อพนักงาน :</span>
            </Col>
            <Col span={6}>
              <Input                 style={{ width: 250, float: "left" }}
/>
            </Col>
            <Col span={3}>
              <span style={{ float: "right" }}>รหัสพนักงาน :</span>
            </Col>
            <Col span={9}>
            <Input                 style={{ width: 250, float: "left" }}
/>
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
          <br />
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
          </Row>
          <br />
          <Row gutter={16}>
              <Center>
            <Col span={6}>
              <span style={{ float: "right" }}>วันที่อนุมัติ/ไม่อนุมัติ :</span>
            </Col>
            <Col span={6}>
            <RangePicker />
            </Col>
            </Center>
          </Row>
          <br />
          <Row gutter={16}>
              <Center>
            <Col span={6}>
              <span style={{ float: "right" }}>สถานะ :</span>
            </Col>
            <Col span={6}>
              <Select placeholder="-กรุณาเลือก-" style={{ width: 250 }}>
              <Option value="ทั้งหมด">ทั้งหมด</Option>
              <Option value="รอตรวจสอบ">รอตรวจสอบ</Option>
              <Option value="อนุมัติ">อนุมัติ</Option>
              <Option value="ไม่อนุมัติ">ไม่อนุมัติ</Option>
              </Select>
            </Col>
            </Center>
          </Row>
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
        <Button style={{float: "right"}} icon="export">Export Excel</Button>
<br />
<br />
            <Table
              style={{ padding: "0 40px 0 40px" }}
              columns={columns}
              dataSource={data}
              pagination={this.state.pagination}
              locale={{
                emptyText: (
                  <Empty
                    description="ไม่พบข้อมูล"
                    // image={require("../../image/empty.gif")}
                  />
                )
              }}
            />
    
      </Content>
      );
    }
  }
  