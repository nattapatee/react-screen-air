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
  Timeline,
  message,
  Upload
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
  visibleResend: boolean;
  inputVisible: boolean;
  inputValue: string;
  tags: any[];
};
const { Content } = Layout;
const data = [
  {
    title: "Ant Design Title 1"
  }
];
type Props = {};
export class DetailKMReject extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      visibleResend: false,
      inputVisible: false,
      inputValue: "",
      tags: ["กฎหมายการบิน", "ความปลอดภัย"]
    };
  }
  showModalResend = () => {
    this.setState({
      visibleResend: true
    });
  };

  handleOkResend = e => {
    console.log(e);
    this.setState({
      visibleResend: false
    });
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
  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  };
  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
      visibleResend: false
    });
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
      inputValue: ""
    });
  };
  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };
  saveInputRef = input => (this.input = input);
  handleClose = removedTag => {
    const tags = this.state.tags.filter(tag => tag !== removedTag);
    console.log(tags);
    this.setState({ tags });
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
    return (
      // <Content
      //   style={{
      //     margin: "24px 16px",
      //     padding: 24,
      //     background: "#fff",
      //     minHeight: 280
      //   }}
      // >
      //   <Header as="h2">
      //     <Ic name="search" />
      //     <Header.Content>
      //       รายละเอียดรายงาน
      //       <Header.Subheader>รายละอียดรายงานของกาสะลอง แสนดี</Header.Subheader>
      //     </Header.Content>
      //   </Header>
      //   <hr />
      //   <br />
      //   <Row gutter={24}>
      //     <Col span={16}>
      //       <Segment
      //         color="green"
      //         attached="top"
      //         style={{ background: "whitesmoke" }}
      //       >
      //         รายละเอียดรายงาน
      //       </Segment>
      //       <Segment attached>
      //         <Row>
      //           <Col span={2} />
      //           <Col span={4} style={{ textAlign: "right" }}>
      //             รายงาน :
      //           </Col>
      //           <Col span={8} style={{ paddingLeft: "5px" }}>
      //             ความปลอดภัยและมาตรฐานการบิน
      //           </Col>
      //           <Col span={4} />
      //         </Row>
      //         <Row>
      //           <Col span={2} />
      //           <Col span={4} style={{ textAlign: "right" }}></Col>
      //           <Col span={8} style={{ paddingLeft: "5px" }}>
      //           {this.state.tags.map((tag, index) => {
      //     const isLongTag = tag.length > 20;
      //     const tagElem = (
      //       <Tag key={tag} closable onClose={() => this.handleClose(tag)}>
      //         {isLongTag ? `${tag.slice(0, 20)}...` : tag}
      //       </Tag>
      //     );
      //     return isLongTag ? (
      //       <Tooltip title={tag} key={tag}>
      //         {tagElem}
      //       </Tooltip>
      //     ) : (
      //       tagElem
      //     );
      //   })}
      //             {this.state.inputVisible && (
      //               <Input
      //                 ref={this.saveInputRef}
      //                 type="text"
      //                 size="small"
      //                 style={{ width: 78 }}
      //                 value={this.state.inputValue}
      //                 onChange={this.handleInputChange}
      //                 onBlur={this.handleInputConfirm}
      //                onPressEnter={this.handleInputConfirm}
      //               />
      //             )}
      //             {!this.state.inputVisible && (
      //               <Tag
      //                 onClick={this.showInput}
      //                 style={{ background: "#fff", borderStyle: "dashed" }}
      //               >
      //                 <Icon type="plus" /> New Tag
      //               </Tag>
      //             )}
      //           </Col>
      //           <Col span={4} />
      //         </Row>
      //         <br />
      //         <Row>
      //           <Col span={2} />
      //           <Col span={4} style={{ textAlign: "right" }}>
      //             เอกสารประกอบ :
      //           </Col>
      //           <Col span={8} style={{ paddingLeft: "5px" }}>
      //             -
      //           </Col>
      //           <Col span={4} />
      //         </Row>
      //         <br />
      //         <Row>
      //           <Col span={2} />
      //           <Col span={4} style={{ textAlign: "right" }}>
      //             วันที่ไป Training :
      //           </Col>
      //           <Col span={8} style={{ paddingLeft: "5px" }}>
      //             20 ก.ย. 2019 - 3 ต.ค. 2019
      //           </Col>
      //           <Col span={4} />
      //         </Row>
      //         <br />
      //       </Segment>

      //       <Segment
      //         color="yellow"
      //         attached="top"
      //         style={{ background: "whitesmoke" }}
      //       >
      //         ผู้แนบรายงาน
      //       </Segment>
      //       <Segment attached>
      //         <Row>
      //           <Col span={2} />
      //           <Col span={4} style={{ textAlign: "right" }}>
      //             ผู้แนบรายงาน :
      //           </Col>
      //           <Col span={8} style={{ paddingLeft: "5px" }}>
      //             กาสะลอง แสนดี
      //           </Col>
      //           <Col span={4} />
      //         </Row>
      //         <br />
      //         <Row>
      //           <Col span={2} />
      //           <Col span={4} style={{ textAlign: "right" }}>
      //             ตำแหน่ง :
      //           </Col>
      //           <Col span={8} style={{ paddingLeft: "5px" }}>
      //             เจ้าหน้าที่ปฎิบัติการ
      //           </Col>
      //           <Col span={4} />
      //         </Row>
      //         <br />
      //         <Row>
      //           <Col span={2} />
      //           <Col span={4} style={{ textAlign: "right" }}>
      //             กอง :
      //           </Col>
      //           <Col span={8} style={{ paddingLeft: "5px" }}>
      //             AAA
      //           </Col>
      //           <Col span={4} />
      //         </Row>
      //         <br />
      //         <Row>
      //           <Col span={2} />
      //           <Col span={4} style={{ textAlign: "right" }}>
      //             ฝ่าย :
      //           </Col>
      //           <Col span={8} style={{ paddingLeft: "5px" }}>
      //             AGA
      //           </Col>
      //           <Col span={4} />
      //         </Row>
      //       </Segment>
      //     </Col>
      //     <Col span={8}>
      //       <Segment
      //         color="grey"
      //         attached="top"
      //         style={{ background: "whitesmoke" }}
      //       >
      //         รายงาน
      //       </Segment>
      //       <Segment attached>
      //         <List
      //           itemLayout="horizontal"
      //           dataSource={data}
      //           renderItem={item => (
      //             <NavLink to="/PDF">

      //             <List.Item>
      //               <List.Item.Meta
      //                 avatar={
      //                   <Avatar src="https://img.icons8.com/bubbles/2x/document.png" />
      //                 }
      //                 title="ความปลอดภัยและมาตรฐานการบิน.pdf"
      //
      //               />
      //             </List.Item>
      //             </NavLink>
      //           )}
      //         />
      //       </Segment>
      //       <br />
      //       <Segment
      //         color="grey"
      //         attached="top"
      //         style={{ background: "whitesmoke" }}
      //       >
      //         เอกสารประกอบ
      //       </Segment>
      //       <Segment attached>
      //         <Empty description="ไม่มีเอกสารประกอบ" />
      //       </Segment>
      //     </Col>
      //   </Row>
      //   <br />
      //   <Modal
      //     title="Comment"
      //     visible={this.state.visible}
      //     onOk={this.handleOk}
      //     onCancel={this.handleCancel}
      //   >
      //     <TextArea
      //       rows={4}
      //       style={{ width: "100%", marginLeft: "5px", marginRight: "5px" }}
      //     />
      //   </Modal>
      //   <Row>
      //     <Col span={4} />
      //     <Col span={16}>
      //       <Center>
      //         <Button
      //           type="primary"
      //           style={{ marginRight: "20px" }}
      //           icon="check-circle"
      //         >
      //           Approve
      //         </Button>
      //         <Button onClick={this.showModal} icon="close-circle">
      //           Reject
      //         </Button>
      //       </Center>
      //     </Col>
      //     <Col span={4} />
      //   </Row>
      // </Content>
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
                  รายละเอียด :
                </Col>
                <Col span={8} style={{ paddingLeft: "5px" }}>
                  อิออนเพนกวิน เก๋ากี้โนติสแคร็กเกอร์สะบึมส์ คำตอบ
                  เซ็นเซอร์แมมโบ้เท็กซ์ฟลุทบอกซ์ เปราะบาง
                  หยวนสไลด์โมจิคาแร็คเตอร์ ออยล์บอกซ์ฮิปฮอป ไลฟ์
                  บอดี้ลาเต้ออดิทอเรียมกุมภาพันธ์
                  พาร์ทเนอร์จีดีพีซากุระพ่อค้าจิ๊ก เรซิ่นรีโมต แยมโรล
                  ซานตาคลอสคอลัมน์ วีซ่ามาร์ชสเตเดียมซีอีโอแหม็บ ปาร์ตี้
                  โฮสเตสเห่ยเปเปอร์บาลานซ์ธุรกรรม
                </Col>
                <Col span={4} />
              </Row>
              <br />
              <Row>
                <Col span={2} />
                <Col span={4} style={{ textAlign: "right" }}>
                  วันที่ไป Training :
                </Col>
                <Col span={8} style={{ paddingLeft: "5px" }}>
                  20 ก.ย. 2019 - 3 ต.ค. 2019
                </Col>
                <Col span={4} />
              </Row>
              <br />
              <Row>
                <Col span={2} />
                <Col span={4} style={{ textAlign: "right" }}>
                  Tag :
                </Col>
                <Col span={8} style={{ paddingLeft: "5px" }}>
                  <Tag color="blue">กฎหมายการบิน</Tag>
                  <Tag color="blue">ความปลอดภัย</Tag>
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
            <Input addonBefore="Comment by Training"  defaultValue=" รายละเอียดหน้า 2 พิมพ์ไม่ถูกต้อง กรุณาแก้ไขให้ถูกต้อง " />
                 

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
                <Timeline.Item color="green">
                  <p>หัวหน้างาน : ภพธร ใจงาม</p>
                  <p>ตำแหน่ง : Manager</p>
                  <p>สถานะ : Acknowleadge (10/10/2562 : 10.00)</p>
                  <p>Comment : - </p>
                </Timeline.Item>
                <Timeline.Item color="red">
                  <p>Training Division : ขนมหวาน หวัง </p>
                  <p>ตำแหน่ง : Head of Training Division </p>
                  <p>สถานะ : Reject (11/10/2562 : 11.00)</p>
                  <p>Comment : กรุณาแก้ไขรายงานหน้าที่ 2 ให้ถูกต้อง</p>
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
                Acknowleadge (10/10/2562)
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
              ขนมหวาน หวัง
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
              Reject (11/10/2562)
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
        <Center>
          <Button type="primary" onClick={this.showModalResend}>
            Resend
          </Button>
        </Center>
        <Modal
          title="อัปโหลดใหม่"
          visible={this.state.visibleResend}
          onOk={this.handleOkResend}
          onCancel={this.handleCancel}
        >
          <Row>
            <Col span={6} style={{ textAlign: "right" }}>
              หลักสูตร :
            </Col>
            <Col span={10} style={{ marginLeft: "5px",width: "70%" }}>
              <Input value="ความปลอดภัยและมาตรฐานการบิน" disabled />
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={6} style={{ textAlign: "right" }}>
              รายละเอียด :
            </Col>
            <Col span={10} style={{ marginLeft: "5px",width: "70%" }}>
              <TextArea
                rows={4}
                value="อิออนเพนกวิน เก๋ากี้โนติสแคร็กเกอร์สะบึมส์ คำตอบ เซ็นเซอร์แมมโบ้เท็กซ์ฟลุทบอกซ์ เปราะบาง หยวนสไลด์โมจิคาแร็คเตอร์ ออยล์บอกซ์ฮิปฮอป ไลฟ์ บอดี้ลาเต้ออดิทอเรียมกุมภาพันธ์ พาร์ทเนอร์จีดีพีซากุระพ่อค้าจิ๊ก เรซิ่นรีโมต แยมโรล ซานตาคลอสคอลัมน์ วีซ่ามาร์ชสเตเดียมซีอีโอแหม็บ ปาร์ตี้ โฮสเตสเห่ยเปเปอร์บาลานซ์ธุรกรรม"
                style={{ width: "100%", marginLeft: "5px", marginRight: "5px" }}
                disabled
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={6} style={{ textAlign: "right" }}>
              วันที่ Training :
            </Col>
            <Col span={10} style={{ marginLeft: "5px",width: "70%" }}>
              <Input value="20 ก.ย. 2019 - 3 ต.ค. 2019" disabled />
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={6} style={{ textAlign: "right" }}>
              Tag :
            </Col>
            <Col span={10} style={{ marginLeft: "5px",width: "70%" }}>
              <Tag color="blue">กฎหมายการบิน</Tag>
              <Tag color="blue">ความปลอดภัย</Tag>
            </Col>
          </Row>

          <br />
          <Row>
            <Col span={6} style={{ textAlign: "right" }}>
              รายงาน :
            </Col>
            <Col span={10} style={{ marginLeft: "5px",width: "70%" }}>
              <Upload {...props}>
                <Button>
                  <Icon type="upload" /> Click to Upload
                </Button>
              </Upload>
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={6} style={{ textAlign: "right" }}>
              เอกสารประกอบ :
            </Col>
            <Col span={10} style={{ marginLeft: "5px",width: "70%" }}>
              <Upload {...props}>
                <Button>
                  <Icon type="upload" /> Click to Upload
                </Button>
              </Upload>
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={6} style={{ textAlign: "right" }}>
              หัวหน้างาน :
            </Col>
            <Col span={10} style={{ marginLeft: "5px",width: "70%" }}>
            <Input value="ภพธร ใจงาม" disabled />
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={6} style={{ textAlign: "right" }}>
              Comment :
            </Col>
            <Col span={10} style={{ marginLeft: "5px",width: "70%" }}>
              <TextArea
                rows={4}
                style={{ width: "100%", marginLeft: "5px", marginRight: "5px" }}
              />
            </Col>
          </Row>
          <br />
        </Modal>
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
        {/* <Row>
        <Col span={4} />
        <Col span={16}>
          <Center>
            <Button
              type="primary"
              style={{ marginRight: "20px" }}
              icon="check-circle"
            >
              Acknowledge
            </Button>
            <Button onClick={this.showModal} icon="close-circle">
              Send back
            </Button>
          </Center>
        </Col>
        <Col span={4} />
      </Row> */}
      </Content>
    );
  }
}
