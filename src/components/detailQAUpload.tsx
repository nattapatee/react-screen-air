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
  Upload
} from "antd";
import Center from "react-center";
import { NavLink } from "react-router-dom";

import { Header, Icon as Ic, Segment } from "semantic-ui-react";
const { Dragger } = Upload;

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
export class DetailQAUpload extends React.Component<Props, State> {
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
    const props = {
      name: "file",
      multiple: true,
      action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
      onChange(info) {
        const { status } = info.file;
        if (status !== "uploading") {
          console.log(info.file, info.fileList);
        }
        if (status === "done") {
          message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === "error") {
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
            รายละเอียด
            <Header.Subheader>
              รายละเอียดเอกสารที่ส่งให้ QA ตรวจสอบ
            </Header.Subheader>
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
                  รูปแบบ :
                </Col>
                <Col span={8} style={{ paddingLeft: "5px" }}>
                  เอกสารที่ผู้จัดการฝ่ายรับรอง
                </Col>
                <Col span={4} />
              </Row>
              <br />
              <Row>
                <Col span={2} />
                <Col span={4} style={{ textAlign: "right" }}>
                  ประเภทเอกสาร :
                </Col>
                <Col span={8} style={{ paddingLeft: "5px" }}>
                  Checklist
                </Col>
                <Col span={4} />
              </Row>
              <br />
              <Row>
                <Col span={2} />
                <Col span={4} style={{ textAlign: "right" }}>
                  การกระทำ :
                </Col>
                <Col span={8} style={{ paddingLeft: "5px" }}>
                  อัปโหลดเอกสารใหม่
                </Col>
                <Col span={4} />
              </Row>
              <br />
              <Row>
                <Col span={2} />
                <Col span={4} style={{ textAlign: "right" }}>
                  หมายเหตุ :
                </Col>
                <Col span={8} style={{ paddingLeft: "5px" }}></Col>
                <Col span={4} />
              </Row>
              <br />
              <Row>
                <Col span={2} />
                <Col span={4} style={{ textAlign: "right" }}>
                  วันที่บันทึกของอนุมัติ :
                </Col>
                <Col span={8} style={{ paddingLeft: "5px" }}>
                  19-11-2019:09.30 น.
                </Col>
                <Col span={4} />
              </Row>
            </Segment>
            <Segment
              color="blue"
              attached="top"
              style={{ background: "whitesmoke" }}
            >
              เจ้าหน้าที่ผู้บันทึก
            </Segment>
            <Segment attached>
              <Row>
                <Col span={2} />
                <Col span={4} style={{ textAlign: "right" }}>
                  ชื่อ :
                </Col>
                <Col span={8} style={{ paddingLeft: "5px" }}>
                  ศศิน นวพง
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
                  1201
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
              <br />
              <Row>
                <Col span={2} />
                <Col span={4} style={{ textAlign: "right" }}>
                  กอง :
                </Col>
                <Col span={8} style={{ paddingLeft: "5px" }}>
                  AA
                </Col>
                <Col span={4} />
              </Row>
            </Segment>
          </Col>
          <Col span={8}>
            <Segment
              color="blue"
              attached="top"
              style={{ background: "whitesmoke" }}
            >
              ไฟล์เอกสาร
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
                        title="CAAT-AGA-AIM-001.pdf"
                        description="14 มิ.ย. 62 สร้างโดย : ศศิน นวพง"
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
              สถานะการตรวจสอบ
            </Segment>
            <Segment attached>
              <Row>
                <Col span={2} />
                <Col span={6} style={{ textAlign: "right" }}>
                  สถานะ :
                </Col>
                <Col span={6} style={{ paddingLeft: "5px" }}>
                  QA อนุมัติเอกสารฉบับร่าง
                </Col>
                <Col span={4} />
              </Row>
              <br />
              <Row>
                <Col span={2} />
                <Col span={6} style={{ textAlign: "right" }}>
                  ผู้ตรวจสอบ :
                </Col>
                <Col span={6} style={{ paddingLeft: "5px" }}>
                    ขนมหวาน หวัง
                </Col>
                <Col span={4} />
              </Row>
              <br />
              <Row>
                <Col span={2} />
                <Col span={6} style={{ textAlign: "right" }}>
                  ตำแหน่ง :
                </Col>
                <Col span={6} style={{ paddingLeft: "5px" }}>
                    QA
                </Col>
                <Col span={4} />
              </Row>
              <br />
              <Row>
                <Col span={2} />
                <Col span={6} style={{ textAlign: "right" }}>
                  กอง :
                </Col>
                <Col span={6} style={{ paddingLeft: "5px" }}>
                    QA
                </Col>
                <Col span={4} />
              </Row>
              <br />
              <Row>
                <Col span={2} />
                <Col span={6} style={{ textAlign: "right" }}>
                  ฝ่าย :
                </Col>
                <Col span={6} style={{ paddingLeft: "5px" }}>
                    QAD
                </Col>
                <Col span={4} />
              </Row>
              <br />
              <Row>
                <Col span={2} />
                <Col span={6} style={{ textAlign: "right" }}>
                  หมายเหตุ :
                </Col>
                <Col span={6} style={{ paddingLeft: "5px" }}></Col>
                <Col span={4} />
              </Row>
              <br />
              <Row>
                <Col span={1} />
                <Col span={7} style={{ textAlign: "right" }}>
                  วันที่ตรวจสอบ :
                </Col>
                <Col span={6} style={{ paddingLeft: "5px" }}>
                20-11-2019:18.30 น.
                </Col>
                <Col span={4} />
              </Row>
              <br />
            </Segment>
          </Col>
        </Row>
        <br />
        <Modal
          title="อัปโหลดไฟล์เอกสารฉบับสมบูรณ์"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <Icon type="inbox" />
            </p>
            <p className="ant-upload-text">คลิกเพื่ออัปโหลดไฟล์</p>
            <p className="ant-upload-hint">อัปโหลดไฟล์เอกสารฉบับสมบูรณ์</p>
          </Dragger>
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
                อัปโหลดเอกสารฉบับสมบูรณ์
              </Button>
              <Button onClick={null} icon="close-circle">
                ยกเลิก
              </Button>
            </Center>
          </Col>
          <Col span={4} />
        </Row>
      </Content>
    );
  }
}
