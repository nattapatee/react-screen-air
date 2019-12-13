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
  Calendar as CalendarTab,
  Popconfirm,
  Modal,
  Badge
} from "antd";
import Center from "react-center";

import { Header, Icon as Ic } from "semantic-ui-react";
import moment, { Moment } from "moment";

import * as React from "react";
const { Search } = Input;
const { Option } = Select;
type State = {
  type: string;
  value: Moment;
  selectedValue: Moment;
  visible: boolean;
};
const { Content } = Layout;
const { TextArea } = Input;

type Props = {};
export class Calendar extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      value: moment(),
      selectedValue: moment(),
      visible: false
    };
  }
  public onDocTypeChange = value => {
    this.setState({ type: value });
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
  onSelect = value => {
    this.setState({
      value,
      selectedValue: value,
      visible: true
    });
  };

  onPanelChange = value => {
    this.setState({ value });
  };
  public getListData = value => {
    let listData;
    // console.log(value)
    switch (value.date()) {
      case 5:
        listData = [{ type: "วันหยุด", content: "วันพ่อแห่งชาติ" }];
        break;

      default:
    }
    return listData || [];
  };
  public dateCellRender = value => {
    const listData = this.getListData(value);
    return (
      <ul className="events">
        {listData.map(item => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
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
            วันหยุดนักขัตฤกษ์และวันหยุดพิเศษ
            <Header.Subheader></Header.Subheader>
          </Header.Content>
        </Header>
        <hr />
        <br />
        <Modal
          title={`วันหยุด ${moment(this.state.value).format("LL")}`}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Row>
            <Col span={1} />
            <Col span={7} style={{ textAlign: "right" }}></Col>
            <Col span={6} style={{ paddingLeft: "5px" }}>
              <Checkbox>วันหยุด</Checkbox>{" "}
            </Col>
            <Col span={4} />
          </Row>
          <br />

          <Row>
            <Col span={1} />
            <Col span={7} style={{ textAlign: "right" }}>
              รายละเอียด :
            </Col>
            <Col span={6} style={{ paddingLeft: "5px" }}>
              <Input />
            </Col>
          </Row>
        </Modal>
        <CalendarTab
          dateCellRender={this.dateCellRender}
          value={this.state.value}
          onSelect={this.onSelect}
          onPanelChange={this.onPanelChange}
        />
      </Content>
    );
  }
}
