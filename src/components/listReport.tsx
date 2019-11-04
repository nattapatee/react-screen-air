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
const { TabPane } = Tabs;
import Center from "react-center";
import { NavLink } from "react-router-dom";
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
        รหัสพนักงาน : {text.idStaff}
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
            {text.status1 == "Acknowleadge" ? (
              <Tag color="green">{text.status1}</Tag>
            ) : (
              <Tag color="gold">{text.status1}</Tag>
            )}
          </Col>
        </Row>
        <Row>
          <Col span={10}>Training Division : </Col>
          <Col span={10}>
            <Tag color="gold">{text.status2}</Tag>
          </Col>
        </Row>
      </div>
    )
  },
  {
    title: "ตรวจสอบ",
    width: "200px",

    className: "column-Document",
    render: text =>
      !text.lock ? (
        <span>
          <NavLink to="/listReport/detail">
            <Icon type="question-circle" />
          </NavLink>
        </span>
      ) : (
        <div>
          <Row>
            <Icon type="lock" />
          </Row>
          <Row>Lock by</Row>
          <Row>ณัฐภัทร วินัยดี</Row>
        </div>
      )
  }
];
import TextArea from "antd/lib/input/TextArea";
import * as React from "react";
import AppStorage from "../share/AppStorage";
const { Search } = Input;
const { Option } = Select;
type State = {
  role: string;
};
const { Content } = Layout;
type Props = {};
export class ListReport extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      role: ""
    };
  }
  componentDidMount = () => {
    let value = AppStorage.getAccessToken();
    this.setState({ role: value });
  };
  public render() {
    const data = [];

    if (AppStorage.getAccessToken() == "User") {
      data.push({
        no: "1",
        title: "ความปลอดภัยและมาตรฐานในการบิน",
        name: "กาสะลอง แสนดี",
        idStaff: "1101",
        tag: "ความปลอดภัย",
        date: "08/10/2562 - 09/10/2562",
        department: "AGA",
        faculty: "AA",
        status1:
          AppStorage.getAccessToken() == "User"
            ? "รอการตรวจสอบ"
            : "Acknowleadge",
        status2: "รอการตรวจสอบ",
        lock: false
      });
    } else {
      data.push(
        {
          no: "1",
          title: "ความปลอดภัยและมาตรฐานในการบิน",
          name: "กาสะลอง แสนดี",
          idStaff: "1101",

          tag: "ความปลอดภัย",
          date: "08/10/2562 - 09/10/2562",
          department: "AGA",
          faculty: "AA",
          status1:
            AppStorage.getAccessToken() == "User"
              ? "รอการตรวจสอบ"
              : "Acknowleadge",
          status2: "รอการตรวจสอบ",
          lock: false
        },
        {
          no: "2",
          title: "ความปลอดภัยและมาตรฐานในการขับรถ",
          name: "ซ้องปีป แสนดี",

          idStaff: "1101",

          tag: "ความปลอดภัย",
          date: "08/10/2562 - 09/10/2562",
          department: "AGA",
          faculty: "AA",
          status1:
            AppStorage.getAccessToken() == "User"
              ? "รอการตรวจสอบ"
              : "Acknowleadge",
          status2: "รอการตรวจสอบ",
          lock: true
        }
      );
    }

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
            รายงานที่รอตรวจสอบ
            <Header.Subheader>รายงาน Training ที่รอตรวจสอบ</Header.Subheader>
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
        <Tabs defaultActiveKey="1" style={{ textAlign: "center" }}>
          <TabPane
            tab={
              <span>
                <Icon type="info-circle" />
                รอดำเนินการ
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
                ดำเนินการแล้ว
              </span>
            }
            key="2"
          >
            <Table
              style={{ padding: "0 40px 0 40px" }}
              columns={columns}
              dataSource={[]}
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
