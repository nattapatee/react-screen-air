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
  DatePicker,
  Radio,
  Modal,
  Tag
} from "antd";
import Center from "react-center";

const { MonthPicker, RangePicker } = DatePicker;

import { Header, Icon as Ic, Segment } from "semantic-ui-react";
// import "../css/Animate.css"
import TextArea from "antd/lib/input/TextArea";
import * as React from "react";
import moment = require("moment");
import { country } from "./country";
const { Search } = Input;
const { Option } = Select;
type State = {
  value: number;
  visible: boolean;
  status: boolean;
  classAnime: string;
  toggleDetail: boolean
};
const { Content } = Layout;
// const children = ["กฎหมายการบิน", "ความปลอดภัย", "มาตรฐานสนามบิน"];

type Props = {};
export class UploadTraining extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      visible: false,
      status: true,
      classAnime: "",
      toggleDetail: false

    };
  }
  public onToggleDetail = () => {
    this.setState({toggleDetail: !this.state.toggleDetail})
  }
  private onSelectCampus = (value, tree) => {
    let keyword = value.toUpperCase();
    return tree.props.children.toUpperCase().includes(keyword);
  };
  public onStatusChange = () => {
    // "fadeOutUp" : "fadeInDown"
    let value = !this.state.status;
    this.setState(value ? { classAnime: "" } : { classAnime: "fadeInDown" });
    setTimeout(() => this.setState({ status: value }), 100);
  };
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
  disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment().endOf("day");
  }

  onChange = e => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value
    });
  };
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
    const children = [];
    children.push(<Option key={1}>กฎหมายการบิน</Option>);
    children.push(<Option key={2}>ความปลอดภัย</Option>);
    children.push(<Option key={3}>มาตรฐานสนามบิน</Option>);
    const radioStyle = {
      display: "block",
      height: "30px",
      lineHeight: "30px"
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
            เพิ่มรายงาน Training
            <Header.Subheader>
              อัปโหลดรายงานความรู้ที่ได้จากการ Training
            </Header.Subheader>
          </Header.Content>
        </Header>
        <hr />
        <br />
        {/* <Segment.Group stacked>
        <Segment className="segmentHeader">
          <Ic name="user" />
          เจ้าหน้าที่ผู้บันทึกข้อมูล
          <Button
            shape="circle"
            icon={this.state.status ? "down" : "up"}
            style={{ float: "right", bottom: "5px" }}
            onClick={this.onStatusChange}
          />
        </Segment>
        <Segment
          style={!this.state.status ? {} : { display: "none" }}
          className={this.state.classAnime}
        >
          <Row>
            <Col span={6} style={{ textAlign: "right" }}>
              ชื่อ-นามสกุล :{" "}
            </Col>
            <Col span={15}>
              <Input
                className="replyIn"
                disabled
                value="กาสะลอง แสนดี"
              />
            </Col>
            <Col span={2} />
          </Row>
          <br />
          <Row>
            <Col span={6} style={{ textAlign: "right" }}>
              ตำแหน่ง :{" "}
            </Col>
            <Col span={15}>
              <Input
                className="replyIn"
                disabled
                value="เจ้าหน้าที่ปฎิบัติการ"
              />
            </Col>
            <Col span={2} />
          </Row>
          <br />
          <Row>
            <Col span={6} style={{ textAlign: "right" }}>
              ฝ่าย :{" "}
            </Col>
            <Col span={15}>
              <Input
                className="replyIn"
                disabled
                value="AGA"
              />
            </Col>
            <Col span={2} />
          </Row>
          <br />
          <Row>
            <Col span={6} style={{ textAlign: "right" }}>
              กอง :{" "}
            </Col>
            <Col span={15}>
              <Input
                className="replyIn"
                disabled
                value="AA"
              />
            </Col>
            <Col span={2} />
          </Row>
          <br />
        </Segment>
      </Segment.Group> */}
        <Segment.Group stacked>
          <Segment className="segmentHeader">
            <Ic name="upload" />
            อัปโหลดรายงาน
          </Segment>
          <Segment className={this.state.classAnime}>
            <Row>
              <Col span={6} style={{ textAlign: "right" }}>
                <font color="red">*</font>ชื่อหลักสูตร :{" "}
              </Col>
              <Col span={15}>
                <Input className="replyIn" />
              </Col>
              <Col span={2} />
            </Row>
            <br />
            <Row>
              <Col span={6} style={{ textAlign: "right" }}>
                <font color="red">*</font>สถาบัน :{" "}
              </Col>
              <Col span={15}>
                <Input className="replyIn" />
              </Col>
              <Col span={2} />
            </Row>
            <br />
            <Row>
              <Col span={6} style={{ textAlign: "right" }}>
                <font color="red">*</font>ประเทศ :{" "}
              </Col>
              <Col span={15}>
                <Select
                  style={{ width: "100%" }}
                  filterOption={this.onSelectCampus}
                  className="replyIn"
                  showSearch={true}
                  showArrow={true}
                >
                  {country.map((x, key) => (
                    <Option value={x.code}>{x.name}</Option>
                  ))}
                </Select>
              </Col>
              <Col span={2} />
            </Row>
            <br />
            <Row>
              <Col span={6} style={{ textAlign: "right" }}>
                <font color="red">*</font>วันที่อบรม :{" "}
              </Col>
              <Col span={15}>
                <RangePicker
                  format="DD-MM-YYYY"
                  style={{ marginLeft: "5px" }}
                />
              </Col>
              <Col span={2} />
            </Row>
            <Row>
              <Col span={6} style={{ textAlign: "right" }}>
              </Col>
              <Col span={15}>
               ( ไม่รวมวันเดินทาง )
              </Col>
              <Col span={2} />
            </Row>
            <br />
            <Row>
              <Col span={6} style={{ textAlign: "right" }}>
                <font color="red">*</font>วันที่กลับมาปฏิบัติงาน :{" "}
              </Col>
              <Col span={15}>
                <DatePicker format="DD-MM-YYYY" style={{ marginLeft: "5px" }} />
              </Col>
              <Col span={2} />
            </Row>
            <Row>
              <Col span={6} style={{ textAlign: "right" }}></Col>
              <Col span={15} style={{ color: "gray", fontSize: "12" }}>
                <span className="replyIn">
                  กรณีที่มีการลาต่อจากวันที่อบรมให้ระบุที่ช่องหมายเหตุ
                </span>
              </Col>
              <Col span={2} />
            </Row>
            <br />

            <Row>
              <Col span={6} style={{ textAlign: "right" }}>
                <font color="red">*</font>รายงาน :{" "}
              </Col>
              <Col span={15}>
                <Upload {...props} style={{ marginLeft: "5px" }}>
                  <Button>
                    <Icon type="upload" /> คลิกเพื่อเลือกไฟล์
                  </Button>
                </Upload>
              </Col>
              <Col span={2} />
            </Row>
            <br />
            <Row>
              <Col span={6} style={{ textAlign: "right" }}>
                <font color="red">*</font>แบบประเมินสถาบัน :{" "}
              </Col>
              <Col span={15}>
                <Upload {...props} style={{ marginLeft: "5px" }}>
                  <Button>
                    <Icon type="upload" /> คลิกเพื่อเลือกไฟล์
                  </Button>
                </Upload>
              </Col>
              <Col span={2} />
            </Row>
            <br />
            <Row>
              <Col span={6} style={{ textAlign: "right" }}>
              ประกาศนียบัตร :{" "}
              </Col>
              <Col span={15}>
                <Upload {...props} style={{ marginLeft: "5px" }}>
                  <Button>
                    <Icon type="upload" /> คลิกเพื่อเลือกไฟล์
                  </Button>
                </Upload>
              </Col>
              <Col span={2} />
            </Row>
            <Row>
              <Col span={6} style={{ textAlign: "right" }}></Col>
              <Col span={15}>
                <Checkbox className="replyIn" onChange={this.onToggleDetail}>
                  กรณีที่ไม่ได้แนบประกาศนียบัตร กรุณาระบุเหตุผล
                </Checkbox>
                {this.state.toggleDetail && (
                  <TextArea rows={4} />
                )}
              </Col>
              <Col span={2} />
            </Row>
            <br />
            <Row>
              <Col span={6} style={{ textAlign: "right" }}>
                เอกสารประกอบอบรม :{" "}
              </Col>
              <Col span={15}>
                <Upload {...props} style={{ marginLeft: "5px" }}>
                  <Button>
                    <Icon type="upload" /> คลิกเพื่อเลือกไฟล์
                  </Button>
                </Upload>
              </Col>
              <Col span={2} />
            </Row>
            <Row>
              <Col span={6} style={{ textAlign: "right" }}></Col>
              <Col span={15}>
                <Checkbox className="replyIn">
                  กรณีไม่มีไฟล์เอกสารอิเล็กทรอนิกส์
                  กรุณาส่งหนังสือหรือเอกสารการฝึกอบรมได้ที่กอง TN ชั้น 14
                </Checkbox>
              </Col>
              <Col span={2} />
            </Row>
            <br />
            <Row>
              <Col span={6} style={{ textAlign: "right" }}>
                Tag :{" "}
              </Col>
              <Col span={15}>
                <Select
                  mode="tags"
                  placeholder="-โปรดเลือก-"
                  style={{ width: "100%", marginLeft: "5px" }}
                >
                  {children}
                </Select>
              </Col>
              <Col span={2} />
            </Row>
            <br />
            <Row>
              <Col span={6} style={{ textAlign: "right" }}>
                หมายเหตุ :{" "}
              </Col>
              <Col span={15}>
                <TextArea rows={4} className="replyIn" />
              </Col>
              <Col span={2} />
            </Row>

            {/* <br />
            <Row>
              <Col span={6} style={{ textAlign: "right" }}>
                หัวหน้างาน :{" "}
              </Col>
              <Col span={15}>
                <Radio.Group
                  style={{ marginLeft: "5px" }}
                  onChange={this.onChange}
                  value={this.state.value}
                >
                  <Radio value={1} style={radioStyle}>
                    ผู้จัดการ
                  </Radio>
                  {this.state.value == 1 && (
                    <Select style={{ width: 220 }} placeholder="-กรุณาเลือก-">
                      <Option value="ขนมหวาน หวัง">ขนมหวาน หวัง</Option>
                      <Option value="สมชาย">สมชาย ใจดี</Option>
                      <Option value="อนันต์">อนันต์ จริงใจ</Option>
                    </Select>
                  )}
                  <Radio value={2} style={radioStyle}>
                    สูงกว่าผู้จัดการ
                  </Radio>
                  {this.state.value == 2 && (
                    <Select style={{ width: 220 }} placeholder="-กรุณาเลือก-">
                      <Option value="ศศิน">ศศิน สมหวัง</Option>
                      <Option value="รวิท">รวิท มาดี</Option>
                      <Option value="Steven">Steven Gerard</Option>
                    </Select>
                  )}
                </Radio.Group>
              </Col>
              <Col span={2} />
            </Row> */}
            <br />
          </Segment>
        </Segment.Group>
        <br />
        <Row>
          <Col span={4} />
          <Col span={16}>
            <Center>
              <Button
                type="primary"
                style={{ marginRight: "20px" }}
                icon="save"
                onClick={this.showModal}
              >
                ส่ง
              </Button>
              <Modal
                title="กรุณายืนยันข้อมูล"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                
              >
                <Row>
                  <Col span={6} style={{ textAlign: "right" }}>
                    ชื่อหลักสูตร :
                  </Col>
                  <Col span={8} style={{ marginLeft: "5px" }}>
                    <Input value="การบินพืนฐาน" disabled />
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col span={6} style={{ textAlign: "right" }}>
                    สถาบัน :
                  </Col>
                  <Col span={8} style={{ marginLeft: "5px" }}>
                    <Input value="Air School" disabled />
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col span={6} style={{ textAlign: "right" }}>
                    ประเทศ :
                  </Col>
                  <Col span={8} style={{ marginLeft: "5px" }}>
                    <Input value="Thai" disabled />
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col span={6} style={{ textAlign: "right" }}>
                    วันที่อบรม :
                  </Col>
                  <Col span={8} style={{ marginLeft: "5px" }}>
                    <Input value="20 ก.ย. 2019 - 3 ต.ค. 2019" disabled />
                  </Col>
                </Row>
                
                <br />
                <Row>
                  <Col span={6} style={{ textAlign: "right" }}>
                    วันที่กลับมาปฏิบัติงาน :
                  </Col>
                  <Col span={8} style={{ marginLeft: "5px" }}>
                    <Input value="4 ต.ค. 2019" disabled />
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col span={6} style={{ textAlign: "right" }}>
                    รายงาน :
                  </Col>
                  <Col span={8} style={{ marginLeft: "5px" }}>
                    <Input value="report.pdf" disabled />
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col span={6} style={{ textAlign: "right" }}>
                    แบบประเมินสถาบัน :
                  </Col>
                  <Col span={8} style={{ marginLeft: "5px" }}>
                    <Input value="comment.pdf" disabled />
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col span={6} style={{ textAlign: "right" }}>
                  Certificate :
                  </Col>
                  <Col span={8} style={{ marginLeft: "5px" }}>
                    <Input value="Certificate.pdf" disabled />
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col span={6} style={{ textAlign: "right" }}>
                  เอกสารประกอบอบรม :
                  </Col>
                  <Col span={8} style={{ marginLeft: "5px" }}>
                    <Input value="" disabled />
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col span={6} style={{ textAlign: "right" }}>
                    Tag :
                  </Col>
                  <Col span={8} style={{ marginLeft: "5px" }}>
                    <Tag color="blue">กฎหมายการบิน</Tag>
                    <Tag color="blue">ความปลอดภัย</Tag>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col span={6} style={{ textAlign: "right" }}>
                  หมายเหตุ :
                  </Col>
                  <Col span={8} style={{ marginLeft: "5px" }}>
                  <TextArea rows={4} value="ไม่มีเอกสารประกอบอบรม" disabled/>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col span={6} style={{ textAlign: "right" }}>
                  ผู้บังคับบัญชา :
                  </Col>
                  <Col span={8} style={{ marginLeft: "5px" }}>
                  <Input value="ภพธร ใจงาม" disabled />

                  </Col>
                </Row>
                
              </Modal>
              <Button icon="close-circle">ยกเลิก</Button>
            </Center>
          </Col>
          <Col span={4} />
        </Row>
      </Content>
    );
  }
}
