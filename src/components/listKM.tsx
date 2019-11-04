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

import { Header, Icon as Ic, Segment } from "semantic-ui-react";
const columns = [
  {
    title: "ลำดับ",
    width: "200px",
    render: text => <span>{text.no}</span>
  },
  {
    title: "ชื่อหลักสูตร",
    width: "400px",

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
    width: "400px",

    render: text => <span>{text.date}</span>
  },
  {
    title: "เจ้าหน้าที่ผู้บันทึก",
    width: "400px",
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
    title: "สถานะการตรวจสอบ",
    width: "500px",

    render: text => (
      <div>
        <Row style={{ marginBottom: 2 }}>
          <Col span={10}>หัวหน้างาน : </Col>
          <Col span={10}>
            <Tag color="green">{text.status1}</Tag>
          </Col>
        </Row>
        <Row>
          <Col span={10}>Training Division : </Col>
          <Col span={10}>
            {text.status2 == "Acknowleadge" || text.status2 == "Approve"  ? (
              <Tag color="green">{text.status2}</Tag>
            ) : text.status2 == "Reject"  ? (
              <Tag color="red">{text.status2}</Tag>
            ) : (
              <Tag color="gold">{text.status2}</Tag>
            )}
          </Col>
        </Row>
      </div>
    )
  },
  {



    



    title: "รายละเอียด",
    className: "column-Document",
    render: text => (
      <span>
        {text.status2 == "Acknowleadge" || text.status2 == "Approve" ? (
          <NavLink to="/listKM/detailz">
            <Icon type="question-circle" />
          </NavLink>
        ) : text.status2 == "Reject" ? (
          <NavLink to="/listKM/rejct">
            <Icon type="question-circle" />
          </NavLink>
        ) : (
          <NavLink to="/listKM/detail">
          <Icon type="question-circle" />
        </NavLink>
        )}
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
export class ListKM extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  public render() {
    const dataWait = [];
    dataWait.push(
      {
        no: "1",
        title: "ความปลอดภัยและมาตรฐานในการบิน",
        name: "กาสะลอง แสนดี",
        tag: "ความปลอดภัย",
        date: "08/10/2562 - 09/10/2562",
        department: "AGA",
        faculty: "AA",
        status1: "Acknowleadge",
        status2: "รอการตรวจสอบ",
        idStaff: "1101"
      }
     
    );
    const dataReject = [];
    dataReject.push(
      {
        no: "1",
        title: "ความปลอดภัยและมาตรฐานการขับขี่",
        name: "กาสะลอง แสนดี",
        tag: "ความปลอดภัย",
        date: "08/10/2562 - 09/10/2562",
        department: "AGA",
        faculty: "AA",
        status1: "Acknowleadge",
        status2: "Reject",
        idStaff: "1101"
      }
     
    );
    const data = [];
    data.push(
     
      {
        no: "2",
        title: "ความปลอดภัยและมาตรฐานในการขับรถ",
        name: "กาสะลอง แสนดี",
        tag: "ความปลอดภัย",
        date: "31/09/2562 - 02/10/2562",
        department: "AGA",
        faculty: "AA",
        status1: "Acknowleadge",
        status2: "Approve"
      }
    );
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
            รายการรายงาน Training
            <Header.Subheader>สถานะการตรวจสอบรายงาน Training</Header.Subheader>
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
              <Select defaultValue="AGA" style={{ width: 250 }}>
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
                defaultValue="AA"
                style={{ width: 250, float: "left" }}
              >
                <Option value="AA">AA</Option>
                <Option value="BB">BB</Option>
              </Select>
            </Col>
          </Row>
          <br />
          <Row gutter={16}>
            <Col span={9}>
              <span style={{ float: "right" }}>วันที่ Training :</span>
            </Col>
            <Col span={9}>
              {" "}
              <RangePicker format="DD-MM-YYYY" style={{ marginLeft: "5px" }} />
            </Col>
          </Row>
          <br />
          <Row gutter={16}>
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
              dataSource={dataWait}
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
                Approve
              </span>
            }
            key="2"
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
                <Icon type="close-circle" />
                Reject
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
