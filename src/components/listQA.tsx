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
      </span>
    )
  },
  {
    title: "รายละเอียด",
    render: text => (
      <span>
        Department : {text.Department}
        <br />
        Division: {text.Division}
        <br />
        Type of Document: {text.type == "Form" ? <Tag color="blue">{text.type}</Tag> : <Tag color="green">{text.type}</Tag>}
      </span>
    )
  },
  {
    title: "Upload type",
    className: "column-Document",
    render: text => <span>{text.uploadType == "new" ? (<Tag color="#87d068">New upload Document</Tag>) : (<Tag color="#108ee9">Update Document</Tag>)}</span>
  },
  {
    title: "Action",
    className: "column-Document",
    render: text => text.uploadType == "new" ? (<NavLink to="/list/detail">ตรวจสอบ</NavLink>) : (<NavLink to="/list/detailUpdate">ตรวจสอบ</NavLink>)
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
        Department: "AGA",
        Division: "AA",
        type: "Manual",
        uploadType: "new"
      },{
        no: "2",
        title: "AGA-AL-TTLA-2รายการสร้าง.pdf",
        Department: "AGA",
        Division: "AA",
        type: "Form",
        uploadType: "update"
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
          <Ic name="search" />
          <Header.Content>
            รายการตรวจสอบเอกสาร
            <Header.Subheader>รายการตรวจสอบเอกสารของ QA</Header.Subheader>
          </Header.Content>
        </Header>
        <hr />
        <br />
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
      </Content>
    );
  }
}
