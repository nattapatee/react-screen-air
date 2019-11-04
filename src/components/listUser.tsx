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
  Tag
} from "antd";
import Center from "react-center";
import { NavLink } from "react-router-dom";

import { Header, Icon as Ic } from "semantic-ui-react";
const columns = [
  {
    title: "ลำดับ",
    width: "200px",
    render: text => <span>{text.no}</span>
  },
  {
    title: "รายการ",
    width: "400px",

    render: text => <span>{text.title}</span>
  },
  {
    title: "รายละเอียด",
    width: "400px",

    render: text => (
      <span>
        Type of Document :{" "}
        {text.type == "Form" ? (
          <Tag color="blue">{text.type}</Tag>
        ) : (
          <Tag color="green">{text.type}</Tag>
        )}
        <br />
        Comment: {text.Division}
      </span>
    )
  },
  {
    title: "การกระทำแบบ",
    className: "column-Document",
    render: text => (
      <span>
        {text.uploadType == "new" ? (
          <Tag color="#87d068">New upload Document</Tag>
        ) : (
          <Tag color="#108ee9">Update Document</Tag>
        )}
      </span>
    )
  },
  {
    title: "สถานะการตอบรับ",
    className: "column-Document",
    render: text => (
      <span>
        {text.status == "reject" ? (
          <span style={{ color: "red" }}>
            <Icon type="close-circle" style={{ marginRight: "5px" }} />
            Reject
          </span>
        ) : (
          <span style={{ color: "green" }}>
            <Icon type="check-circle" style={{ marginRight: "5px" }} />
            Approve
          </span>
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
export class ListUser extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  public render() {
    const data = [];
    data.push({
      no: "1",
      title: "CAAT-AGA-AIM.PDF",
      Department: "AGA",
      Division: "AA",
      type: "Manual",
      uploadType: "new",
      status: "reject"
    });
    const dataApprove = [];
    dataApprove.push({
      no: "2",
      title: "AGA-AL-TTLA-2รายการสร้าง.pdf",
      Department: "AGA",
      Division: "AA",
      type: "Form",
      uploadType: "update",
      status: "approve"
    });
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
          <Ic name="search" />
          <Header.Content>
            รายการตรวจสอบสถานะ
            <Header.Subheader> สถานะการตรวจสอบเอกสารจาก QA</Header.Subheader>
          </Header.Content>
        </Header>
        <hr />
        <br />
        <Header as="h2">
          <Ic name="close" />
          <Header.Content>Reject</Header.Content>
        </Header>
        <hr />

        <Table
          style={{ padding: "0 80px 0 80px" }}
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
        <br />
        <Header as="h2">
          <Ic name="checkmark" />
          <Header.Content>Approve</Header.Content>
        </Header>
        <hr />
        <Table
          style={{ padding: "0 80px 0 80px" }}
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
      </Content>
    );
  }
}
