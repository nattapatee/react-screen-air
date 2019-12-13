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
    DatePicker
  } from "antd";
  const { MonthPicker, RangePicker } = DatePicker;
  
  import Center from "react-center";
  import { NavLink } from "react-router-dom";
  import { Header, Icon as Ic, Segment } from "semantic-ui-react";
  const columns = [
    {
      title: "ลำดับ",
      width: "5px",
      render: text => <span >{text.no}</span>
    },
    {
      title: "ชื่อหลักสูตร",
      width: "350px",

      render: text => (
        <span>
          {text.title}
          <br />
          <Tag color="blue">{text.tag}</Tag>
        </span>
      )
    },
    {
      title: "วันที่ Training",
      width: "200px",

      render: text => <span>{text.date}</span>
    },
    {
      title: "รายงาน",
  
      render: text => <span>{text.report}</span>
    },
    {
      title: "เจ้าหน้าที่ผู้บันทึก",
      width: "450px",
      render: text => (
        <span>
          ชื่อ : {text.name}
          <br />
          รหัสพนักงาน​ : {text.idStaff}
          <br />
          ฝ่าย : {text.department}
          <br />
          กอง : {text.faculty}
        </span>
      )
    },
    {
      title: "ยอดวิว",
      width: "350px",
  
      render: text => (
        <span>
    {text.view}
        </span>
      )
    }
  ];
  import TextArea from "antd/lib/input/TextArea";
  import * as React from "react";
  const { Search } = Input;
  const { Option } = Select;
  type State = {};
  const { Content } = Layout;
  type Props = {};
  export class ListViewTraining extends React.Component<Props, State> {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    public render() {
      const data = [];
      data.push(
        {
          no: "1",
          title: "ความปลอดภัยและมาตรฐานในการบิน",
          report: "รายงานมาตรฐานความปลอดภัย.pdf",
          staff: "ขนมหวาน หวัง",
          dateCheck: "11/10/2562 14.00น.",
          name: "กาสะลอง แสนดี",
          tag: "ความปลอดภัย",
          date: "08/10/2562 - 09/10/2562",
          department: "AGA",
          faculty: "AA",
          status1: "Acknowledge",
          status2: "Approve",
          disable: false,
          idStaff: "1101",
          view: 10
        },
        {
          no: "2",
          title: "การจัดเก็บเอกสารที่ถูกต้อง",
          report: "รายงานมาตรฐานความปลอดภัย.pdf",
          staff: "ขนมหวาน หวัง",
          dateCheck: "11/10/2562 15.00น.",
  
          name: "ซ้องปีป แสนดี",
          tag: "ความรู้",
          date: "07/10/2562",
          department: "QAD",
          faculty: "BB",
          status1: "Acknowledge",
          status2: "รอการตรวจสอบ",
          disable: true,
          idStaff: "1101",
          view: 4
        }
      );
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
      const children = [];
      children.push(<Option key={1}>กฎหมายการบิน</Option>);
      children.push(<Option key={2}>ความปลอดภัย</Option>);
      children.push(<Option key={3}>มาตรฐานสนามบิน</Option>);
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
              จำนวนการดูเอกสารรายงาน Training (ยอดวิว)
              <Header.Subheader></Header.Subheader>
            </Header.Content>
          </Header>
          <hr />
          <br />
          <Segment piled color="yellow">
            <Row gutter={16}>
              <Col span={6}>
                <span style={{ float: "right" }}>ฝ่าย :</span>
              </Col>
              <Col span={6}>
                {" "}
                <Select defaultValue="-กรุณาเลือก-" style={{ width: 250 }}>
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
                  defaultValue="-กรุณาเลือก-"
                  style={{ width: 250, float: "left" }}
                >
                  <Option value="AA">AA</Option>
                  <Option value="BB">BB</Option>
                </Select>
              </Col>
            </Row>
            <br />
            <Row gutter={16}>
                <Center>
              <Col span={6}>
                <span style={{ float: "right" }}>ชื่อหลักสูตร :</span>
              </Col>
              <Col span={6}>
                <Input />
              </Col>
              </Center>
            
            </Row>
            <br />
            <Row gutter={16}>
                <Center>
              <Col span={6}>
                <span style={{ float: "right" }}>ชื่อเอกสารรายงาน Training :</span>
              </Col>
              <Col span={6}>
                <Input />
              </Col>
              </Center>
            
            </Row>
        <br />
            <Row gutter={16}>
              <Col span={9}>
                <span style={{ float: "right" }}>วันที่ดูเอกสาร :</span>
              </Col>
              <Col span={9}>
                {" "}
                <RangePicker format="DD-MM-YYYY" style={{ marginLeft: "5px" }} />
              </Col>
            </Row>
            <br />
            <Row gutter={16}>
              <Col span={9}>
                <span style={{ float: "right" }}>จำนวนวิว :</span>
              </Col>
              <Col span={9}>
              <Input />

              </Col>
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
          <Button type="primary" icon="export" style={{float: "right"}}>
        Export Excel
      </Button>
      <br />
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
        </Content>
      );
    }
  }
  