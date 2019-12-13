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
  Upload,
  Radio,
  DatePicker
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
export class UploadQA extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      type: ""
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
            รูปแบบ<font color="red">*</font> :
          </Col>
          <Col span={10}>
            <Select
              placeholder="-กรุณาเลือก-"
              style={{ width: 400, marginLeft: "5px" }}
              onChange={this.onDocTypeChange}
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
            ฝ่าย :
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
            กอง :
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
          <Col span={5} style={{ textAlign: "right", marginTop: "5px" }}>
            ประเภทเอกสาร<font color="red">*</font> :
          </Col>
          <Col span={10}>
            {type == "Public" ? (
              <Select
                placeholder="-กรุณาเลือก-"
                style={{ width: 400, marginLeft: "5px" }}
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
                disabled
              />
            )}
          </Col>
          <Col span={4} />
        </Row>
        <br />
        <Row>
          <Col span={4} />
          <Col span={5} style={{ textAlign: "right", marginTop: "5px" }}>
            Document Title :
          </Col>
          <Col span={10}>
            <Input
              style={{ width: 400, marginLeft: "5px" }}
            />
          </Col>
          <Col span={4} />
        </Row>
        <br />
        <Row>
          <Col span={4} />
          <Col span={5} style={{ textAlign: "right", marginTop: "5px" }}>
            Document Number :
          </Col>
          <Col span={10}>
            <Input
              style={{ width: 400, marginLeft: "5px" }}
            />
          </Col>
          <Col span={4} />
        </Row>
        <br />
        <Row>
          <Col span={4} />
          <Col span={5} style={{ textAlign: "right", marginTop: "5px" }}>
            Type :
          </Col>
          <Col span={10}>
          <Radio.Group style={{marginLeft: "5px"}}>
        <Radio  value={1}>
          Paper
        </Radio>
        <Radio value={2}>
          Electronic
        </Radio>
        </Radio.Group>
          </Col>
          <Col span={4} />
        </Row>
        <br />
        <Row>
          <Col span={4} />
          <Col span={5} style={{ textAlign: "right", marginTop: "5px" }}>
            Document Issue :
          </Col>
          <Col span={10}>
            <Input
              style={{ width: 400, marginLeft: "5px" }}
            />
          </Col>
          <Col span={4} />
        </Row>
        <br />
        <Row>
          <Col span={4} />
          <Col span={5} style={{ textAlign: "right", marginTop: "5px" }}>
            Document Revision :
          </Col>
          <Col span={10}>
            <Input
              style={{ width: 400, marginLeft: "5px" }}
            />
          </Col>
          <Col span={4} />
        </Row>
        <br />
        <Row>
          <Col span={4} />
          <Col span={5} style={{ textAlign: "right", marginTop: "5px" }}>
            Document Date :
          </Col>
          <Col span={10}>
          <DatePicker style={{ marginLeft: "5px" }} format="DD/MM/YYYY" />
          </Col>
          <Col span={4} />
        </Row>
        <br />
        <Row>
          <Col span={4} />
          <Col span={5} style={{ textAlign: "right", marginTop: "5px" }}>
            Classification :
          </Col>
          <Col span={10}>
            <Input
              style={{ width: 400, marginLeft: "5px" }}
            />
          </Col>
          <Col span={4} />
        </Row>
        <br />
        <Row>
          <Col span={4} />
          <Col span={5} style={{ textAlign: "right", marginTop: "5px" }}>
            Reason for Issue/Change :
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
          <Col span={5} style={{ textAlign: "right", marginTop: "5px" }}>
            Action Requested :
          </Col>
          <Col span={10}>
          <Radio.Group style={{marginLeft: "5px"}}>
        <Radio  value={1}>
          New Document
        </Radio>
        <Radio value={2}>
          Modify/Revise
        </Radio>
        <Radio value={3}>
          Supersede
        </Radio>
        <Radio value={4}>
          Cancellation
        </Radio>
        <Radio value={5}>
          Remark
        </Radio>
        </Radio.Group>
          </Col>
          <Col span={4} />
        </Row>
        <br />
        <Row>
          <Col span={4} />
          <Col span={5} style={{ textAlign: "right", marginTop: "5px" }}>
           
          </Col>
          <Col span={10}>
          Description of Issue/Change
          </Col>
          <Col span={4} />
        </Row>
        <br />
        <Row>
          <Col span={4} />
          <Col span={5} style={{ textAlign: "right", marginTop: "5px" }}>
           Task/Action
          </Col>
          <Col span={10}>
          <Input
              style={{ width: 400, marginLeft: "5px" }}
            />
          </Col>
          <Col span={4} />
        </Row>
        <br />
        <Row>
          <Col span={4} />
          <Col span={5} style={{ textAlign: "right", marginTop: "5px" }}>
           Owner
          </Col>
          <Col span={10}>
          <Input
              style={{ width: 400, marginLeft: "5px" }}
            />
          </Col>
          <Col span={4} />
        </Row>
        <br />
        <Row>
          <Col span={4} />
          <Col span={5} style={{ textAlign: "right", marginTop: "5px" }}>
           Due Date
          </Col>
          <Col span={10}>
          <DatePicker style={{ marginLeft: "5px" }} format="DD/MM/YYYY" />
          </Col>
          <Col span={4} />
        </Row>
        <br />
        <Row>
          <Col span={4} />
          <Col span={5} style={{ textAlign: "right", marginTop: "5px" }}>
          
          </Col>
          <Col span={10}>
          Request Prepare By
          </Col>
          <Col span={4} />
        </Row>
        <br />
        <Row>
          <Col span={4} />
          <Col span={5} style={{ textAlign: "right", marginTop: "5px" }}>
           Signature
          </Col>
          <Col span={10}>
          <Input
              style={{ width: 400, marginLeft: "5px" }}
            />
          </Col>
          <Col span={4} />
        </Row>
        <br />
        <Row>
          <Col span={4} />
          <Col span={5} style={{ textAlign: "right", marginTop: "5px" }}>
           Position
          </Col>
          <Col span={10}>
          <Input
              style={{ width: 400, marginLeft: "5px" }}
            />
          </Col>
          <Col span={4} />
        </Row>
        <br />
        <Row>
          <Col span={4} />
          <Col span={5} style={{ textAlign: "right", marginTop: "5px" }}>
           Date
          </Col>
          <Col span={10}>
          <DatePicker style={{ marginLeft: "5px" }} format="DD/MM/YYYY" />
          </Col>
          <Col span={4} />
        </Row>
        <br />
        <Row>
          <Col span={4} />
          <Col span={5} style={{ textAlign: "right", marginTop: "5px" }}>
           
          </Col>
          <Col span={10}>
          Request Review By
          </Col>
          <Col span={4} />
        </Row>
        <br />
        <Row>
          <Col span={4} />
          <Col span={5} style={{ textAlign: "right", marginTop: "5px" }}>
           Signature
          </Col>
          <Col span={10}>
          <Input
              style={{ width: 400, marginLeft: "5px" }}
            />
          </Col>
          <Col span={4} />
        </Row>
        <br />
        <Row>
          <Col span={4} />
          <Col span={5} style={{ textAlign: "right", marginTop: "5px" }}>
           Position
          </Col>
          <Col span={10}>
          <Input
              style={{ width: 400, marginLeft: "5px" }}
            />
          </Col>
          <Col span={4} />
        </Row>
        <br />
        <Row>
          <Col span={4} />
          <Col span={5} style={{ textAlign: "right", marginTop: "5px" }}>
           Date
          </Col>
          <Col span={10}>
          <DatePicker style={{ marginLeft: "5px" }} format="DD/MM/YYYY" />
          </Col>
          <Col span={4} />
        </Row>
        <br />
        <Row>
          <Col span={4} />
          <Col span={5} style={{ textAlign: "right", marginTop: "5px" }}>
          
          </Col>
          <Col span={10}>
          Request Approved By
          </Col>
          <Col span={4} />
        </Row>
        <br />
        <Row>
          <Col span={4} />
          <Col span={5} style={{ textAlign: "right", marginTop: "5px" }}>
           Signature
          </Col>
          <Col span={10}>
          <Input
              style={{ width: 400, marginLeft: "5px" }}
            />
          </Col>
          <Col span={4} />
        </Row>
        <br />
        <Row>
          <Col span={4} />
          <Col span={5} style={{ textAlign: "right", marginTop: "5px" }}>
           Position
          </Col>
          <Col span={10}>
          <Input
              style={{ width: 400, marginLeft: "5px" }}
            />
          </Col>
          <Col span={4} />
        </Row>
        <br />
        <Row>
          <Col span={4} />
          <Col span={5} style={{ textAlign: "right", marginTop: "5px" }}>
           Date
          </Col>
          <Col span={10}>
          <DatePicker style={{ marginLeft: "5px" }} format="DD/MM/YYYY" />
          </Col>
          <Col span={4} />
        </Row>
        <br />
        
        <Row>
          <Col span={4} />
          <Col span={5} style={{ textAlign: "right", marginTop: "5px" }}>
            อัปโหลดเอกสาร<font color="red">*</font> :
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
       
{type == "Internal" && (
  <div>
    <Row>
          <Col span={4} />
          <Col span={5} style={{ textAlign: "right" }}>
            สถานะเอกสาร<font color="red">*</font> :
          </Col>
          <Col span={10}>
          <Radio.Group style={{ marginLeft: "5px" }} defaultValue={1}>
        <Radio value={1}>
          เอกสารฉบับร่าง (Draft version)
        </Radio>
        {/* <Radio value={2}>
          เอกสารฉบับสมบูรณ์ (Final version)
        </Radio> */}
        </Radio.Group>
          </Col>

          <Col span={4} />
        </Row>
        <br />
  </div>
)}
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
                ส่ง
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
