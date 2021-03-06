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
  Tag,
  Empty,
  Tooltip,
  Timeline
} from "antd";
import Center from "react-center";
import { NavLink } from "react-router-dom";

import { Header, Icon as Ic, Segment } from "semantic-ui-react";

import TextArea from "antd/lib/input/TextArea";
import * as React from "react";
import AppStorage from "../share/AppStorage";
const { Search } = Input;
const { Option } = Select;
type State = {
  visible: boolean;
  tags: string[]
  inputVisible: boolean
  inputValue: string
};
const { Content } = Layout;
const data = [
  {
    title: "Ant Design Title 1"
  }
];
type Props = {};
export class DetailReport extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      tags: ['กฎหมายการบิน', 'ความปลอดภัย'],
      inputVisible: false,
      inputValue: '',
    };
  }
  handleClose = removedTag => {
    const tags = this.state.tags.filter(tag => tag !== removedTag);
    console.log(tags);
    this.setState({ tags });
  };

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  };

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleInputConfirm = () => {
    const { inputValue } = this.state;
    let { tags } = this.state;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    console.log(tags);
    this.setState({
      tags,
      inputVisible: false,
      inputValue: '',
    });
  };
  saveInputRef = input => (this.input = input);

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
    const { tags, inputVisible, inputValue } = this.state;

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
            รายละเอียดรายงาน
            <Header.Subheader></Header.Subheader>
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
              รายละเอียดรายงาน
            </Segment>
            <Segment attached>
              <Row>
                <Col span={2} />
                <Col span={4} style={{ textAlign: "right" }}>
                  หลักสูตร :
                </Col>
                <Col span={8} style={{ paddingLeft: "5px" }}>
                  ความปลอดภัยและมาตรฐานการบิน
                </Col>
                <Col span={4} />
              </Row>
              <br />
              <Row>
                <Col span={2} />
                <Col span={4} style={{ textAlign: "right" }}>
                  สถาบัน :
                </Col>
                <Col span={8} style={{ paddingLeft: "5px" }}>
                  Air School
                </Col>
                <Col span={4} />
              </Row>
              <br />
              <Row>
                <Col span={2} />
                <Col span={4} style={{ textAlign: "right" }}>
                  ประเทศ :
                </Col>
                <Col span={8} style={{ paddingLeft: "5px" }}>
                  Thai
                </Col>
                <Col span={4} />
              </Row>
              <br />
              <Row>
                <Col span={2} />
                <Col span={4} style={{ textAlign: "right" }}>
                  วันที่อบรม :
                </Col>
                <Col span={8} style={{ paddingLeft: "5px" }}>
                  3 ต.ค. 2019
                </Col>
                <Col span={4} />
              </Row>
              <br />
              <Row>
                <Col span={2} />
                <Col span={4} style={{ textAlign: "right" }}>
                วันที่กลับมาปฏิบัติงาน  :
                </Col>
                <Col span={8} style={{ paddingLeft: "5px" }}>
                5 ต.ค. 2019
                </Col>
                <Col span={4} />
              </Row>
              {/* <br />
              <Row>
                <Col span={2} />
                <Col span={4} style={{ textAlign: "right" }}>
                  วันที่ไป Training :
                </Col>
                <Col span={8} style={{ paddingLeft: "5px" }}>
                  20 ก.ย. 2019 - 3 ต.ค. 2019
                </Col>
                <Col span={4} />
              </Row> */}
              <br />
              <Row>
                <Col span={2} />
                <Col span={4} style={{ textAlign: "right" }}>Tag :</Col>
                <Col span={8} style={{ paddingLeft: "5px" }}>
                  {AppStorage.getAccessToken() == "QA" ? (
                    <span>
                     <Tag color="blue">กฎหมายการบิน</Tag>
                     <Tag color="blue">ความปลอดภัย</Tag>
                     </span>
                  ) : (
                    <div>
                    {tags.map((tag, index) => {
                      const isLongTag = tag.length > 20;
                      const tagElem = (
                        <Tag key={tag} closable onClose={() => this.handleClose(tag)}>
                          {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                        </Tag>
                      );
                      return isLongTag ? (
                        <Tooltip title={tag} key={tag}>
                          {tagElem}
                        </Tooltip>
                      ) : (
                        tagElem
                      );
                    })}
                    {inputVisible && (
                      <Input
                        ref={this.saveInputRef}
                        type="text"
                        size="small"
                        style={{ width: 78 }}
                        value={inputValue}
                        onChange={this.handleInputChange}
                        onBlur={this.handleInputConfirm}
                        onPressEnter={this.handleInputConfirm}
                      />
                    )}
                    {!inputVisible && (
                      <Tag onClick={this.showInput} style={{ background: '#fff', borderStyle: 'dashed' }}>
                        <Icon type="plus" /> เพิ่ม tag
                      </Tag>
                    )}
                  </div>
                  ) }
                 
                </Col>
                <Col span={4} />
              </Row>
              <br />
              <Row>
                <Col span={2} />
                <Col span={4} style={{ textAlign: "right" }}>
                  วันที่บันทึก :
                </Col>
                <Col span={8} style={{ paddingLeft: "5px" }}>
                  10/10/2562 : 9.00 
                </Col>
                <Col span={4} />
              </Row>
              <br />
            </Segment>
            {/* <Segment
              color="yellow"
              attached="top"
              style={{ background: "whitesmoke" }}
            >
              รายละเอียดการแก้ไข
            </Segment>
            <Segment attached>
              <Row>
                <Col span={2} />
                <Col span={4} style={{ textAlign: "right" }}>
                    -
                </Col>

              </Row>
            </Segment> */}
            <Segment
              color="yellow"
              attached="top"
              style={{ background: "whitesmoke" }}
            >
              สถานะการตรวจสอบ
            </Segment>
            <Segment attached>
            <Timeline>
    <Timeline.Item color={AppStorage.getAccessToken() == "User" ? "gray" : "green"}><p>หัวหน้างาน : ภพธร ใจงาม</p><p>ตำแหน่ง : Manager</p><p>สถานะ : {AppStorage.getAccessToken() == "User" ? "-" : "Acknowleadge (10/10/2562 : 10.00)"}</p><p>Comment : - </p></Timeline.Item>
    <Timeline.Item color="gray">
      <p>Training Division : - </p>
      <p>ตำแหน่ง : -</p>
      <p>สถานะ : -</p>
      <p>Comment : - </p>
    </Timeline.Item>
   
  </Timeline>
              {/* <Row>
                <Col span={2} />
                <Col span={4} style={{ textAlign: "right" }}>
                  หัวหน้างาน :
                </Col>
                <Col span={8} style={{ paddingLeft: "5px" }}>
                  ภพธร ใจงาม
                </Col>
                <Col span={4} />
              </Row>
              <br />
              <Row>
                <Col span={2} />
                <Col span={4} style={{ textAlign: "right" }}>
                  สถานะ :
                </Col>
                <Col span={8} style={{ paddingLeft: "5px" }}>
                  {AppStorage.getAccessToken() == "User" ? "-" : "Acknowleadge"}
                </Col>
                <Col span={4} />
              </Row>
              <br />
              <Row>
                <Col span={2} />
                <Col span={4} style={{ textAlign: "right" }}>
                  ฝ่าน Training :
                </Col>
                <Col span={8} style={{ paddingLeft: "5px" }}>
                  -
                </Col>
                <Col span={4} />
                
              </Row>
              <br />
              <Row>
                <Col span={2} />
                <Col span={4} style={{ textAlign: "right" }}>
                  สถานะ :
                </Col>
                <Col span={8} style={{ paddingLeft: "5px" }}>
                  -
                </Col>
                <Col span={4} />
              </Row>
              <br /> */}
            </Segment>
          </Col>
          <Col span={8}>
          <Segment
              color="yellow"
              attached="top"
              style={{ background: "whitesmoke" }}
            >
              เจ้าหน้าที่ผู้บันทึก
            </Segment>
            <Segment attached>
              <Row>
                <Col span={2} />
                <Col span={4} style={{ textAlign: "right" }}>
                  ผู้แนบรายงาน :
                </Col>
                <Col span={8} style={{ paddingLeft: "5px" }}>
                  กาสะลอง แสนดี
                </Col>
                <Col span={4} />
              </Row>
              <br />
              <Row>
                <Col span={2} />
                <Col span={4} style={{ textAlign: "right" }}>
                  รหัสพนักงาน :
                </Col>
                <Col span={8} style={{ paddingLeft: "5px" }}>
                  1101
                </Col>
                <Col span={4} />
              </Row>
              <br />
              <Row>
                <Col span={2} />
                <Col span={4} style={{ textAlign: "right" }}>
                  ตำแหน่ง :
                </Col>
                <Col span={8} style={{ paddingLeft: "5px" }}>
                  เจ้าหน้าที่ปฎิบัติการ
                </Col>
                <Col span={4} />
              </Row>
              <br />
              <Row>
                <Col span={2} />
                <Col span={4} style={{ textAlign: "right" }}>
                  กอง :
                </Col>
                <Col span={8} style={{ paddingLeft: "5px" }}>
                  AAA
                </Col>
                <Col span={4} />
              </Row>
              <br />
              <Row>
                <Col span={2} />
                <Col span={4} style={{ textAlign: "right" }}>
                  ฝ่าย :
                </Col>
                <Col span={8} style={{ paddingLeft: "5px" }}>
                  AGA
                </Col>
                <Col span={4} />
              </Row>
            </Segment>
            <Segment
              color="grey"
              attached="top"
              style={{ background: "whitesmoke" }}
            >
              รายงาน
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
                        title="ความปลอดภัยและมาตรฐานการบิน.pdf"
                        
                      />
                    </List.Item>
                  </NavLink>
                )}
              />
            </Segment>
            <Segment
              color="grey"
              attached="top"
              style={{ background: "whitesmoke" }}
            >
              แบบประเมินสถาบัน
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
                        title="แบบประเมินสถาบัน.pdf"
                        
                      />
                    </List.Item>
                  </NavLink>
                )}
              />
            </Segment>
            <Segment
              color="grey"
              attached="top"
              style={{ background: "whitesmoke" }}
            >
              Certificate
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
                        title="Certificate.pdf"
                        
                      />
                    </List.Item>
                  </NavLink>
                )}
              />
              <br />
              <Row>
                <Col span={2} />
                <Col span={4} style={{ textAlign: "right" }}>
                  เหตุผลที่ไม่มี Certificate :
                </Col>
                <Col span={8} style={{ paddingLeft: "5px" }}>
                  -
                </Col>
                <Col span={4} />
              </Row>
            </Segment>
            <br />
            <Segment
              color="grey"
              attached="top"
              style={{ background: "whitesmoke" }}
            >
              เอกสารประกอบ
            </Segment>
            <Segment attached>
              <Empty description="ไม่มีเอกสารประกอบ" />
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
        {AppStorage.getAccessToken()  == "User" ? (
          <Row>
          <Col span={4} />
          <Col span={16}>
            <Center>
              <Button
                type="primary"
                style={{ marginRight: "20px" }}
                icon="check-circle"
              >
                รับทราบ
              </Button>
              <Button onClick={this.showModal} icon="close-circle">
                ส่งกลับ
              </Button>
            </Center>
          </Col>
          <Col span={4} />
        </Row>
        ) : (
          <Row>
          <Col span={4} />
          <Col span={16}>
            <Center>
              <Button
                type="primary"
                style={{ marginRight: "20px" }}
                icon="check-circle"
              >
              อนุมัติ
              </Button>
              <Button onClick={this.showModal} icon="close-circle">
                ไม่อนุมัติ
              </Button>
            </Center>
          </Col>
          <Col span={4} />
        </Row>
        )}
        
      </Content>
    );
  }
}
