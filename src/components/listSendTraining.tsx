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
    width: "200px",

    render: text => (
      <span>
        {text.title}
        <br />
        <Tag color="blue">{text.tag}</Tag>
      </span>
    )
  },
  {
    title: "รายงาน",

    render: text => <span>{text.report}</span>
  },
  {
    title: "เจ้าหน้าที่ผู้บันทึก",
    width: "250px",
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
    title: "วันที่ Training",

    render: text => <span>{text.date}</span>
  },
  {
    title: "วันที่กลับมาปฏิบัติงาน",

    render: text => <span>{text.workingDate}</span>
  },
  {
    title: "วันที่หัวหน้างานรับทราบ",

    render: text => <span>{text.acceptDate}</span>
  },
  // {
  //   title: "สถานะการตรวจสอบ",
  //   width: "350px",

  //   render: text => (
  //     <div>
  //       <Row style={{ marginBottom: 2 }}>
  //         <Col span={10}>หัวหน้างาน : </Col>
  //         <Col span={10}>
  //           <Tag color="green">{text.status1}</Tag>
  //         </Col>
  //       </Row>
  //       <Row>
  //         <Col span={10}>Training Division : </Col>
  //         <Col span={10}>
  //           {text.status2 == "Approve" ? (<Tag color="green">{text.status2}</Tag>) : (<Tag color="gold">{text.status2}</Tag>)}
            
  //         </Col>
  //       </Row>
  //     </div>
  //   )
  // },
  {
    title: "ระยะเวลา(วัน)",
    width: "200px",

    render: text => (
     <span>{text.staff}</span>
    )
  },
 
];
import TextArea from "antd/lib/input/TextArea";
import * as React from "react";
const { Search } = Input;
const { Option } = Select;
type State = {};
const { Content } = Layout;
type Props = {};
export class ListSendTraining extends React.Component<Props, State> {
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
        staff: "3",
        dateCheck: "11/10/2562 14.00น.",
        name: "กาสะลอง แสนดี",
        tag: "ความปลอดภัย",
        date: "08/10/2562 - 09/10/2562",
        workingDate: "11/10/2562",
        acceptDate: "15/10/2562",
        department: "AGA",
        faculty: "AA",
        status1: "Acknowledge",
        status2: "Approve",
        disable: false,
        idStaff: "1101"
      },
      {
        no: "2",
        title: "การจัดเก็บเอกสารที่ถูกต้อง",
        report: "รายงานมาตรฐานความปลอดภัย.pdf",
        staff: "2",
        dateCheck: "11/10/2562 15.00น.",

        name: "ซ้องปีป แสนดี",
        tag: "ความรู้",
        date: "07/10/2562",
        workingDate: "08/10/2562",
        acceptDate: "10/10/2562",

        department: "QAD",
        faculty: "BB",
        status1: "Acknowledge",
        status2: "รอการตรวจสอบ",
        disable: true,
        idStaff: "1101"

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
          รายงานสถานะการส่งรายงาน Training
            <Header.Subheader>รายงานสถานะการส่งรายงาน Training</Header.Subheader>
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
            <Col span={6}>
              <span style={{ float: "right" }}>ชื่อพนักงาน :</span>
            </Col>
            <Col span={6}>
              {" "}
              <Input placeholder="ระบุชื่อพนักงาน" />
            </Col>
            <Col span={3}>
              <span style={{ float: "right" }}>รหัสพนักงาน :</span>
            </Col>
            <Col span={9}>
              {" "}
              <Input placeholder="ระบุรหัสพนักงาน" />
            </Col>
          </Row>
          <br />
          <Row gutter={16}>
            <Col span={9}>
              <span style={{ float: "right" }}>วันที่อบรม :</span>
            </Col>
            <Col span={9}>
              {" "}
              <RangePicker format="DD-MM-YYYY" style={{ marginLeft: "5px" }} />
            </Col>
          </Row>
          <br />
          <Row gutter={16}>
            <Col span={6}>
              <span style={{ float: "right" }}>ระยะเวลาที่ส่งรายงาน :</span>
            </Col>
            <Col span={6}>
              {" "}
              <Select style={{ width: 250 }}>
                <Option value="Approve">เท่ากับ</Option>
                <Option value="Reject">มากกว่า</Option>
                                <Option value="Minus">น้อยกว่า</Option>

              </Select>
            </Col>
            <Col span={3}>
              <span style={{ float: "right" }}>จำนวนวัน :</span>
            </Col>
            <Col span={9}>
              {" "}
              <Input placeholder="ระบุจำนวนวัน" />
            </Col>
            {/* <Col span={9}>
              <span style={{ float: "right" }}>ระยะเวลาที่ส่งรายงาน :</span>
            </Col>
            <Col span={9}>
              {" "}
              <Select style={{ width: 250 }}>
                <Option value="Approve">เท่ากับ</Option>
                <Option value="Reject">มากกว่า</Option>
                                <Option value="Minus">น้อยกว่า</Option>

              </Select>
            </Col> */}
          </Row>
          <br />
          {/* <Row gutter={16}>
            <Col span={9}>
              <span style={{ float: "right" }}>Tag :</span>
            </Col>
            <Col span={9}>
              <Select
                mode="tags"
                placeholder="-โปรดเลือก-"
                style={{ width: "100%", marginLeft: "5px" }}
              >
                {children}
              </Select>
            </Col>
          </Row>
          <br />
          <Row gutter={16}>
            <Col span={9}>
              <span style={{ float: "right" }}>วันที่อนุมัติ/ไม่อนุมัติ :</span>
            </Col>
            <Col span={9}>
              {" "}
              <RangePicker format="DD-MM-YYYY" style={{ marginLeft: "5px" }} />
            </Col>
          </Row>
          <br />
          <Row gutter={16}>
            <Col span={6}>
              <span style={{ float: "right" }}>สถานะ :</span>
            </Col>
            <Col span={6}>
              {" "}
              <Select style={{ width: 250 }}>
                <Option value="Approve">Approve</Option>
                <Option value="Reject">Reject</Option>
              </Select>
            </Col>
            <Col span={3}>
              <span style={{ float: "right" }}>เจ้าหน้าที่ผู้ตรวจสอบ :</span>
            </Col>
            <Col span={9}>
              {" "}
              <Select
                defaultValue="-กรุณาเลือก-"
                style={{ width: 250, float: "left" }}
              >
                <Option value="AA">กาสะลอง แสนดี</Option>
                <Option value="BB">สมหวัง หวัง</Option>
              </Select>
            </Col>
          </Row>
          <br /> */}
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
