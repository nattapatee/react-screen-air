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
  Upload,
  message,
  Modal,
  List,
  Avatar,
  Spin
} from "antd";
import Center from "react-center";

import { Header, Icon as Ic } from "semantic-ui-react";

import TextArea from "antd/lib/input/TextArea";
import * as React from "react";
const { Search } = Input;
const { Option } = Select;
import reqwest from "reqwest";

import InfiniteScroll from "react-infinite-scroller";

const fakeDataUrl =
  "https://randomuser.me/api/?results=20&inc=name,gender,email,nat&noinfo";
type State = {
  visible: boolean;
  data: any[];
  loading: boolean;
  hasMore: boolean;
  trigger: boolean;
  type: string;
  id: string;
};
const { Content } = Layout;
type Props = {};
export class UpdateQA extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      data: [],
      loading: false,
      hasMore: true,
      trigger: false,
      type: "",
      id: ""
    };
  }

  onDocTypeChange = value => {
    this.setState({ type: value });
  };
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  componentDidMount() {
    this.fetchData(res => {
      this.setState({
        data: res.results
      });
    });
  }
  onTrigger = () => {
    this.setState({
      trigger: !this.state.trigger,
      visible: false,
      id: "CAAT-AGA-AIM.pdf"
    });
  };
  fetchData = callback => {
    reqwest({
      url: fakeDataUrl,
      type: "json",
      method: "get",
      contentType: "application/json",
      success: res => {
        callback(res);
      }
    });
  };
  handleInfiniteOnLoad = () => {
    let { data } = this.state;
    this.setState({
      loading: true
    });
    if (data.length > 14) {
      message.warning("Infinite List loaded all");
      this.setState({
        hasMore: false,
        loading: false
      });
      return;
    }
    this.fetchData(res => {
      data = data.concat(res.results);
      this.setState({
        data,
        loading: false
      });
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
    let { type } = this.state;

    const props = {
      name: "file",
      action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
      headers: {
        authorization: "authorization-text"
      },
      onChange(info) {
        if (info.file.status !== "uploading") {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === "done") {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === "error") {
          message.error(`${info.file.name} file upload failed.`);
        }
      }
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
            อัปเดทเอกสาร
            <Header.Subheader>อัปเดทเอกสารเพื่อให้ QA ตรวจสอบ</Header.Subheader>
          </Header.Content>
        </Header>
        <hr />
        <br />
        <Row>
          <Col span={4} />
          <Col span={5} style={{ textAlign: "right", marginTop: "5px" }}>
            ค้นหาเอกสารเดิม :
          </Col>
          <Col span={10}>
            <Input
              style={{ width: 400, marginLeft: "5px" }}
              value={this.state.id}
              disabled
            />
            <Button
              style={{ marginLeft: "5px" }}
              onClick={this.showModal}
              shape="circle"
              icon="search"
            />
            <Modal
              title="ค้นหา/เลือกไฟล์"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              footer={null}
            >
              <Search
                placeholder="ค้นหาไฟล์"
                onSearch={value => console.log(value)}
                style={{ width: "100%" }}
              />
              <div
                className="demo-infinite-container"
                style={{ height: "600px", overflow: "auto" }}
              >
                <List
                  dataSource={this.state.data}
                  renderItem={item => (
                    <List.Item key={item.id}>
                      <List.Item.Meta
                        avatar={
                          <Avatar src="https://img.icons8.com/bubbles/2x/document.png" />
                        }
                        title="CAAT-AGA-AIM.pdf"
                        description="14 มิ.ย. 62 สร้างโดย : อ๊บ ไสไม้"
                      />
                      <Button onClick={this.onTrigger}>เลือกไฟล์นี้</Button>
                    </List.Item>
                  )}
                ></List>
              </div>
            </Modal>
          </Col>
          <Col span={4} />
        </Row>
        <br />
        {this.state.trigger && (
          <div>
          
            <Row>
              <Col span={4} />
              <Col span={5} style={{ textAlign: "right", marginTop: "5px" }}>
                รูปแบบ :
              </Col>
              <Col span={10}>
                <Select
                  placeholder="-กรุณาเลือก-"
                  style={{ width: 400, marginLeft: "5px" }}
                  onChange={this.onDocTypeChange}
                  defaultValue="Public"
                  disabled
                >
                 <Option value="Public">เอกสารที่ผู้จัดการฝ่ายรับรอง</Option>
                <Option value="Internal">เอกสารที่ผอ. หรือรองผอ. รับรอง</Option>
                </Select>
              </Col>
              <Col span={4} />
            </Row>
            <br />
            <Row>
              <Col span={4} />
              <Col span={5} style={{ textAlign: "right", marginTop: "5px" }}>
                ประเภทเอกสาร :
              </Col>
              <Col span={10}>
                {type == "Public" ? (
                  <Select
                    placeholder="-กรุณาเลือก-"
                    style={{ width: 400, marginLeft: "5px" }}
                    defaultValue="Public"
                    disabled
                  >
                     <Option value="Regulation">Checklist</Option>
                  <Option value="Guidance">Guidance</Option>
                  <Option value="Public">Department manual & Procedure</Option>
                  </Select>
                ) : type == "Internal" ? (
                  <Select
                    placeholder="-กรุณาเลือก-"
                    style={{ width: 400, marginLeft: "5px" }}
                    defaultValue="Internal"
                    disabled
                  >
                    <Option value="Internal">Checklist</Option>
                  <Option value="Corporate">Guidance</Option>
                  <Option value="Department">Manual</Option>
                  </Select>
                ) : (
                  <Select
                  placeholder="-กรุณาเลือก-"
                  style={{ width: 400, marginLeft: "5px" }}
                  defaultValue="Public"
                  disabled
                >
                 <Option value="Regulation">Checklist</Option>
                  <Option value="Guidance">Guidance</Option>
                  <Option value="Public">Department manual & Procedure</Option>
                </Select>
                )}
              </Col>
              <Col span={4} />
            </Row>
            <br />
            <Row>
              <Col span={4} />
              <Col span={5} style={{ textAlign: "right", marginTop: "5px" }}>
                อัปโหลดเอกสาร :
              </Col>
              <Col span={10}>
                <Upload {...props} style={{ marginLeft: "5px" }}>
                  <Button>
                    <Icon type="upload" /> คลิกเพื่อเลือกไฟล์
                  </Button>
                </Upload>
              </Col>

              <Col span={4} />
            </Row>
            <br />
            <Row>
              <Col span={4} />
              <Col span={5} style={{ textAlign: "right", marginTop: "5px" }}>
                หมายเหตุ :
              </Col>
              <Col span={10}>
                <TextArea rows={4} style={{ width: 400, marginLeft: "5px" }} />
              </Col>
              <Col span={4} />
            </Row>
            <br />
            <Row>
              <Col span={4} />
              <Col span={16}>
                <Center>
                  <Button
                    type="primary"
                    style={{ marginRight: "20px" }}
                    icon="save"
                  >
                    ตกลง
                  </Button>
                  <Button icon="close-circle">ยกเลิก</Button>
                </Center>
              </Col>
              <Col span={4} />
            </Row>
          </div>
        )}
      </Content>
    );
  }
}
