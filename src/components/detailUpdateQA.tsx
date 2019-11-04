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
  Modal,
  Radio
} from "antd";
import Center from "react-center";
import { Route, Switch, NavLink } from "react-router-dom";

import { Header, Icon as Ic, Segment } from "semantic-ui-react";

import TextArea from "antd/lib/input/TextArea";
import * as React from "react";
const { Search } = Input;
const { Option } = Select;
type State = {
  visible: boolean;
  visibleApprove: boolean;
  value: string
};
const { Content } = Layout;
const data = [
  {
    title: "14 มิ.ย. 62 สร้างโดย : อ๊บ ไสไม้"
  },
  {
    title: "15 มิ.ย. 62 สร้างโดย : จอน คอน"
  }
];
type Props = {};
export class DetailUpdateQA extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      visibleApprove: false,
      value: ""
    };
  }
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  showModalApprove = () => {
    this.setState({
        visibleApprove: true
    });
  };
  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
      visibleApprove: false
    });
  };
  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };
  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
      visibleApprove: false
    });
  };
  public render() {
    const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
      };
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
              <br />
              <Row>
                <Col span={2} />
                <Col span={4} style={{ textAlign: "right" }}>
                  รายละเอียดการแก้ไข :
                </Col>
                <Col span={8} style={{ paddingLeft: "5px" }}>
                  ปาสคาล ซูเปอร์อีแต๋นโปรเจ็ค คันยิดยุคละอ่อนดีพาร์ตเมนต์ติ่มซำ
                  เทคโนแครตคลับโนติสโนติส พันธุวิศวกรรมพงษ์ คอมเมนท์
                  โปสเตอร์ซีนออโต้แจมกลาส เบนโล
                  คอร์รัปชั่นม้งสตรอเบอร์รีเหี่ยวย่น เพียวโมหจริตยูโร
                  คาปูชิโนสแควร์ เซาท์แรงดูด เดอะโค้กบอยคอตต์คลิปยะเยือก เกมส์
                  เอ็กซ์เพรสจตุคามพาร์ ลิมิตนางแบบ
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
                      avatar={<Avatar src="https://img.icons8.com/bubbles/2x/document.png" />}
                      title="CAAT-AGA-AIM.pdf"
                      description={item.title}
                    />
                  </List.Item>
                  </NavLink>
                )}
              />
              <Center>
                <NavLink to="/list/detailUpdate/compare">
                  <Button type="primary" icon="snippets">
                    เปรียบเทียบเอกสาร
                  </Button>
                </NavLink>
              </Center>
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
        <Modal
          title="Comment"
          visible={this.state.visibleApprove}
          okText="OK"
          cancelText="ยกเลิก"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        > version เอกสาร
        <br />
        <Radio.Group onChange={this.onChange} value={this.state.value}>
      <Radio style={radioStyle} value={1}>
       Major
      </Radio>
      <Radio style={radioStyle} value={2}>
        Minor
      </Radio>
      </Radio.Group>
         
        </Modal>
        <Row>
          <Col span={4} />
          <Col span={16}>
            <Center>
              <Button
                type="primary"
                style={{ marginRight: "20px" }}
                onClick={this.showModalApprove}
                icon="check-circle">
              
                Approve
              </Button>
              <Button onClick={this.showModal} icon="close-circle">Reject</Button>
            </Center>
          </Col>
          <Col span={4} />
        </Row>
      </Content>
    );
  }
}
