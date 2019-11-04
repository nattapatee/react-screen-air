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

import TextArea from "antd/lib/input/TextArea";
import * as React from "react";
const { Search } = Input;
const { Option } = Select;
type State = {};
const { Content } = Layout;
type Props = {};
export class UploadQA extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  public render() {
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
            อัปโหลดเอกสาร
            <Header.Subheader>
              อัปโหลดเอกสารเพื่อให้ QA ตรวจสอบ
            </Header.Subheader>
          </Header.Content>
        </Header>
        <hr />
        <br />
        <Row>
          <Col span={4} />
          <Col span={5} style={{ textAlign: "right", marginTop: "5px" }}>
            Upload :
          </Col>
          <Col span={10}>
          <Upload {...props} style={{  marginLeft: "5px" }}>
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
            Document type :
          </Col>
          <Col span={10}>
            <Select
              placeholder="-กรุณาเลือก-"
              style={{ width: 400, marginLeft: "5px" }}
            >
              <Option value="Forums">Forums</Option>
              <Option value="Manual">Manual</Option>
              <Option value="Master List">Master List</Option>
            </Select>
          </Col>
          <Col span={4} />
        </Row>
        <br />
        <Row>
          <Col span={4} />
          <Col span={5} style={{ textAlign: "right", marginTop: "5px" }}>
            Department :
          </Col>
          <Col span={10}>
            <Input
              value="AGA"
              style={{ width: 400, marginLeft: "5px" }}
              disabled
            />
          </Col>
          <Col span={4} />
        </Row>
        <br />
        <Row>
          <Col span={4} />
          <Col span={5} style={{ textAlign: "right", marginTop: "5px" }}>
            Division :
          </Col>
          <Col span={10}>
            <Input
              value="AA"
              style={{ width: 400, marginLeft: "5px" }}
              disabled
            />
          </Col>
          <Col span={4} />
        </Row>
        <br />
        <Row>
          <Col span={4} />
          <Col span={16}>
            <Center>
              <Button type="primary" style={{ marginRight: "20px" }} icon="save">
                Submit
              </Button>
              <Button  icon="close-circle">Clear</Button>
            </Center>
          </Col>
          <Col span={4} />
        </Row>
      </Content>
    );
  }
}
