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
  Select
} from "antd";
import Center from "react-center";
import Iframe from "react-iframe";

import { Header, Icon as Ic } from "semantic-ui-react";

import TextArea from "antd/lib/input/TextArea";
import * as React from "react";
const { Search } = Input;
const { Option } = Select;
type State = {};
const { Content } = Layout;
type Props = {};
export class Compare extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  public render() {
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
            เปรียบเทียบเอกสาร
            <Header.Subheader>เปรียบเทียบเอกสารของ ...</Header.Subheader>
          </Header.Content>
        </Header><hr />
        <br />
        <Row gutter={16}>
          <Col span={12} style={{height: "80vh"}}>
            <Iframe
              url={`https://asp.demosoft.me/api/files/fileName/github.pdf`}
              width="100%"
              height="100%"
              position="relative"
              allowFullScreen
            />
          </Col>
          <Col span={12} style={{height: "80vh"}}>
            <Iframe
              url={`https://asp.demosoft.me/api/files/fileName/github.pdf`}
              width="100%"
              height="100%"
              position="relative"
              allowFullScreen
            />
          </Col>
        </Row>
      </Content>
    );
  }
}
