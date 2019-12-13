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
    message,
    Upload
  } from "antd";
  import Center from "react-center";
  
  import { Header, Icon as Ic } from "semantic-ui-react";
  
  import * as React from "react";
  const { Search } = Input;
  const { Option } = Select;
  type State = { type: string };
  const { Content } = Layout;
  const { TextArea } = Input;
  
  type Props = {};
  export class EditQA extends React.Component<Props, State> {
    constructor(props) {
      super(props);
      this.state = {
        type: "Public"
      };
    }
    public onDocTypeChange = value => {
      this.setState({ type: value });
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
        },
        defaultFileList: [
            {
              uid: '1',
              name: 'CAAT-AGA-AIM.pdf',
              status: 'done',
            },
        ]
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
              แก้ไขรายละเอียดเอกสาร
              <Header.Subheader>
                แก้ไขเอกสารและรายละเอียดเอกสาร
              </Header.Subheader>
            </Header.Content>
          </Header>
          <hr />
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
              รูปแบบ :
            </Col>
            <Col span={10}>
              <Select
                placeholder="-กรุณาเลือก-"
                style={{ width: 400, marginLeft: "5px" }}
                onChange={this.onDocTypeChange}
                value={this.state.type}
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
                  defaultValue="Regulation"
                >
                  <Option value="Regulation">Checklist</Option>
                  <Option value="Guidance">Guidance</Option>
                  <Option value="Public">Department manual & Procedure</Option>
                </Select>
              ) : type == "Internal" ? (
                <Select
                  placeholder="-กรุณาเลือก-"
                  style={{ width: 400, marginLeft: "5px" }}
                >
                  <Option value="Internal">Checklist</Option>
                  <Option value="Corporate">Guidance</Option>
                  <Option value="Department">Manual</Option>
                </Select>
              ) : (
                <Select
                placeholder="-กรุณาเลือก-"
                style={{ width: 400, marginLeft: "5px" }}
                defaultValue="Regulation"
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
              หมายเหตุ :
            </Col>
            <Col span={10}>
              <TextArea
                style={{ width: 400, marginLeft: "5px" }}
                autoSize={{ minRows: 5, maxRows: 10 }}
              />
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
        </Content>
      );
    }
  }
  