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
  Modal,
  Table,
  Empty
} from "antd";
import Center from "react-center";
import { NavLink } from "react-router-dom";
import { Header, Icon as Ic } from "semantic-ui-react";

import TextArea from "antd/lib/input/TextArea";
import * as React from "react";
const { Search } = Input;
const { Option } = Select;
const columns = [
  {
    title: "Tag",
    width: "400px",
    render: text => <span>{text.tagName}</span>
  },
  {
    title: "Action",
    width: "300px",

    render: text => (
      <span>
      <Button icon="edit" style={{marginRight: 10}}>
      แก้ไข
    </Button>
    <Button type="danger" icon="delete">
      ลบ
    </Button>
      </span>
    )
  },
  {
    title: "Create by",
    width: "200px",

    render: text => <span>{text.name}<br />{text.time}</span>
  }
];
type State = {
  visible: boolean;
  tagName: string
};
const { Content } = Layout;
type Props = {};
export class Config extends React.Component<Props, State> {
  public data = [{
    tagName: "มาตรฐานการบิน",
    name: "ขนมหวาน หวัง",
    time: "11/10/2562 09:00"
  },
  {
    tagName: "ตวามปลอดภัยการบิน",
    name: "ขนมหวาน หวัง",
    time: "11/10/2562 09:20"
  },
  {
    tagName: "ควารู้ทั่วไป",
    name: "ขนมหวาน หวัง",
    time: "11/10/2562 09:30"
  }];
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      tagName: ""
    };
  }
  public onTagName = e => {
    this.setState({tagName: e.target.value})
  }
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    this.data.push(
      {
        tagName: this.state.tagName,
        name: "ขนมหวาน หวัง",
        time: "11/10/2562 09:50"
      }
    )
    this.setState({
      visible: false,
      tagName: ""
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  componentDidMount = () => {

  }
  public render() {
  
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
            จัดการ Tag
            <Header.Subheader>จัดการ Tag ของรายงาน Training</Header.Subheader>
          </Header.Content>
        </Header>
        <hr />
        <br />
        <Row>
          <Col span={4} />
          <Col span={5} style={{ textAlign: "right", marginTop: "5px" }}>
            ค้นหา :
          </Col>
          <Col span={10}>
            <Search
              placeholder="ค้นหา keyword"
              onSearch={value => console.log(value)}
              style={{ width: 400, marginLeft: "5px" }}
            />
          </Col>
          <Col span={4} />
        </Row>
        <br />
        <Button
          onClick={this.showModal}
          type="primary"
          style={{ float: "right", margin: "-20px 30px" }}
        >
          <Icon type="plus" /> เพิ่มข้อมูล
        </Button>
        <Table
              style={{ padding: "0 40px 0 40px" ,marginTop: 20}}
              columns={columns}
              dataSource={this.data}
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
        <Modal
          title="เพิ่ม Tag"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText="บันทึก"
          cancelText="ยกเลิก"
        >
          <Row>
            <Col span={3}>ชื่อ Tag :</Col>
            <Col span={9}><Input placeholder="กรอกชื่อ Tag" style={{width: "100%"}} onChange={this.onTagName}/></Col>
          </Row>
        </Modal>
      </Content>
    );
  }
}
