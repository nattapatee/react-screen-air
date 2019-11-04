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
import { NavLink } from "react-router-dom";
import { Header, Icon as Ic } from "semantic-ui-react";

import TextArea from "antd/lib/input/TextArea";
import * as React from "react";
const { Search } = Input;
const { Option } = Select;
type State = {};
const { Content } = Layout;
type Props = {};
export class SearchField extends React.Component<Props, State> {
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
            ค้นหาข้อมูล
            <Header.Subheader>Search</Header.Subheader>
          </Header.Content>
        </Header>
        <hr />
        <br />
        <Row>
          <Col span={4} />
          <Col span={5} style={{ textAlign: "right", marginTop: "5px" }}>
            Keyword :
          </Col>
          <Col span={10}>
          <Search
                placeholder="ค้นหา keyword"
                onSearch={value => console.log(value)}
                style={{ width: 400, marginLeft: "5px" }}
              />
          </Col>
          <Col span={4} />
        </Row>
        <br />
        <Row>
          <Col span={4} />
          <Col span={5} style={{ textAlign: "right", marginTop: "5px" }}>
            System :
          </Col>
          <Col span={10}>
            <Select
              placeholder="-กรุณาเลือก-"
              style={{ width: 400, marginLeft: "5px" }}
            >
              <Option value="QA">QA</Option>
              <Option value="KM">KM</Option>
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
            <Select
              placeholder="-กรุณาเลือก-"
              style={{ width: 400, marginLeft: "5px" }}
            >
              <Option value="AGA">AGA</Option>
              <Option value="OPS">OPS</Option>
              <Option value="SFD">SFD</Option>
            </Select>
          </Col>
          <Col span={4} />
        </Row>
        <br />
        <Row>
          <Col span={4} />
          <Col span={5} style={{ textAlign: "right", marginTop: "5px" }}>
            Type of Document :
          </Col>
          <Col span={10}>
            <Select
              placeholder="-กรุณาเลือก-"
              style={{ width: 400, marginLeft: "5px" }}
            >
              <Option value="Forums">Forums</Option>
              <Option value="Manual">Manual</Option>
              <Option value="Masterlist">Masterlist</Option>
            </Select>
          </Col>
          <Col span={4} />
        </Row>
        <br />
        <Row>
          <Col span={4} />
          <Col span={16}>
            <Center>
            <NavLink to="/result">
              <Button type="primary" style={{ marginRight: "20px" }} icon="search">
                ค้นหา
              </Button>
              </NavLink>
              <Button  icon="close-circle">ล้างค่า</Button>
            </Center>
          </Col>
          <Col span={4} />
        </Row>
      </Content>
    );
  }
}
