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
  List,
  Avatar,
  Modal
} from "antd";
import Center from "react-center";
import { NavLink } from "react-router-dom";

import { Header, Icon as Ic, Segment } from "semantic-ui-react";

import TextArea from "antd/lib/input/TextArea";
import * as React from "react";
const { Search } = Input;
const { Option } = Select;
type State = {
  visible: boolean;
};
const { Content } = Layout;
const data = [
  {
    title: "Ant Design Title 1"
  }
];
type Props = {};
export class DetailQA extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
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
            รายละเอียด
            <Header.Subheader>รายละอียดตรวจสอบเอกสารของ QA</Header.Subheader>
          </Header.Content>
        </Header>
        <hr />
        <br />
        <Row gutter={24}>
          <Col span={16}>
            <Segment
              color="green"
              attached="top"
              style={{ background: "whitesmoke" }}
            >
              รายละเอียดเอกสาร
            </Segment>
            <Segment attached>
              <Row>
                <Col span={2} />
                <Col span={4} style={{ textAlign: "right" }}>
                  Department :
                </Col>
                <Col span={8} style={{ paddingLeft: "5px" }}>
                  AGA
                </Col>
                <Col span={4} />
              </Row>
              <br />
              <Row>
                <Col span={2} />
                <Col span={4} style={{ textAlign: "right" }}>
                  Division :
                </Col>
                <Col span={8} style={{ paddingLeft: "5px" }}>
                  AA
                </Col>
                <Col span={4} />
              </Row>
              <br />
              <Row>
                <Col span={2} />
                <Col span={4} style={{ textAlign: "right" }}>
                  Type of Document :
                </Col>
                <Col span={8} style={{ paddingLeft: "5px" }}>
                  manual
                </Col>
                <Col span={4} />
              </Row>
              <br />
              <Row>
                <Col span={2} />
                <Col span={4} style={{ textAlign: "right" }}>
                  user ผู้อัปโหลด :
                </Col>
                <Col span={8} style={{ paddingLeft: "5px" }}>
                  Kanomwan
                </Col>
                <Col span={4} />
              </Row>
              <br />
              <Row>
                <Col span={2} />
                <Col span={4} style={{ textAlign: "right" }}>
                  upload type :
                </Col>
                <Col span={8} style={{ paddingLeft: "5px" }}>
                  new upload document
                </Col>
                <Col span={4} />
              </Row>
            </Segment>
          </Col>
          <Col span={8}>
            <Segment
              color="grey"
              attached="top"
              style={{ background: "whitesmoke" }}
            >
              version history
            </Segment>
            <Segment attached>
              <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                  <NavLink to="/PDF">
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        <Avatar src="https://img.icons8.com/bubbles/2x/document.png" />
                      }
                      title="CAAT-AGA-AIM.pdf"
                      description="14 มิ.ย. 62 สร้างโดย : อ๊บ ไสไม้"
                    />
                  </List.Item>
                  </NavLink>
                )}
              />
            </Segment>
          </Col>
        </Row>
        <br />
        <Modal
          title="Comment"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <TextArea
            rows={4}
            style={{ width: "100%", marginLeft: "5px", marginRight: "5px" }}
          />
        </Modal>
        <Row>
          <Col span={4} />
          <Col span={16}>
            <Center>
              <Button
                type="primary"
                style={{ marginRight: "20px" }}
                onClick={this.showModal}
                icon="check-circle"
              >
                Approve
              </Button>
              <Button onClick={this.showModal} icon="close-circle">
                Reject
              </Button>
            </Center>
          </Col>
          <Col span={4} />
        </Row>
      </Content>
    );
  }
}
