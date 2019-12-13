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
    DatePicker,
    Tabs
  } from "antd";
  const { MonthPicker, RangePicker } = DatePicker;
  import { NavLink } from "react-router-dom";
  import Center from "react-center";
  const { TabPane } = Tabs;
  import { PaginationConfig } from "antd/lib/table";
  import { Header, Icon as Ic, Segment } from "semantic-ui-react";
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
          <br />
          {
            text.docStatus && (
            <p>สถานะเอกสาร : {text.docStatus}</p>
            )
          }
          <p>
         การกระทำ :  <Tag color="blue">อัปโหลดเอกสาร</Tag></p>

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
      render: text => text.uploadType == "new" ? (<NavLink to="/list/detailFirst"> <Button shape="circle" icon="question" /></NavLink>) : (<NavLink to="/list/detailSecond"> <Button shape="circle" icon="question" /></NavLink>)
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
  export class ListWaitQA extends React.Component<Props, State> {
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
      },{
        no: "2",
        title: "AGA-AL-TLA-V2.PDF",
        name: "รวิศ อรรถมาศ",
        id: "1225",
        Department: "AGA",
        Division: "AA",
        uploadType: "new",
        type: "Manual",
        category: "เอกสารที่ผอ. หรือรองผอ. รับรอง",
        status: "รอการตรวจสอบ",
        docStatus: "เอกสารฉบับร่าง (Draft version)"
      })

      const children = [];
      children.push(<Option key={1}>กฎหมายการบิน</Option>);
      children.push(<Option key={2}>ความปลอดภัย</Option>);
      children.push(<Option key={3}>มาตรฐานสนามบิน</Option>);
      //   const dataApprove = [];
      //   dataApprove.push({
      //     no: "2",
      //     title: "AGA-AL-TTLA-2รายการสร้าง.pdf",
      //     Department: "AGA",
      //     Division: "AA",
      //     type: "Form",
      //     uploadType: "update",
      //     status: "approve"
      //   });
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
              รายการเอกสารที่รอตวจสอบ
              <Header.Subheader>รายการเอกสารที่รอ QA ตรวจสอบ</Header.Subheader>
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
  