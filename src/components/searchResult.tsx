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
  Table,
  Empty,
  Tag,
  Radio,
  List,
  Avatar,
  Pagination
} from "antd";
import Center from "react-center";
import { NavLink } from "react-router-dom";
import { PaginationConfig } from "antd/lib/table";

import { Header, Icon as Ic, Segment } from "semantic-ui-react";
const columns = [
  {
    title: "",
    width: "200px",
    render: text => (
      <span>
        {text.title}
        <br />
        System : {text.role} Status : {text.status}
        <br />
        Department : {text.Department} Type of Tag : {text.type}
      </span>
    )
  }
];
import TextArea from "antd/lib/input/TextArea";
import * as React from "react";
const { Search } = Input;
const { Option } = Select;
type State = {
  value: string;
  pagination: PaginationConfig;
};
const { Content } = Layout;
type Props = {};
export class SearchResult extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      pagination: {
        showSizeChanger: true,
        showTotal: total => `ทั้งหมด ${total} รายการ`
      }
    };
  }
  onChange = e => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value
    });
  };
  public render() {
    const data = [];
    for (let i = 0; i < 12; i++) {
      data.push(
        {
          no: "1",
          title: "AHA-AL-TTLA-2.pdf",
          role: "QA",
          status: "Approve",
          Department: "AGA",
          type: "Manual"
        },
        {
          no: "2",
          title: "AGA-Training Report-Security.pdf",
          role: "KM",
          status: "Approve",
          Department: "AGA",
          type: "Security"
        }
      );
    }
    const dataKM = []
    for (let i = 0; i < 8; i++) {
        dataKM.push(
            {
              no: "1",
              title: "AGA-Training Report-Security.pdf",
              role: "KM",
              status: "Approve",
              Department: "AGA",
              type: "Security"
            },
            {
                no: "1",
              title: "MA-Training Report.pdf",
              role: "KM",
              status: "Approve",
              Department: "AIR",
              type: "Business"
            },
            {
                no: "3",
                title: "Envirament Training Report.pdf",
                role: "KM",
                status: "Approve",
                Department: "ANS",
                type: "Standard"
            }
          );
    }
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
          <Ic name="file alternate outline" />
          <Header.Content>
            ผลการค้นหา
            <Header.Subheader>Result</Header.Subheader>
          </Header.Content>
        </Header>
        <hr />
        <br />
        <Row gutter={24}>
          <Col span={8}>
            <Segment.Group stacked>
              <Segment style={{ background: "whitesmoke" }}>System</Segment>
              <Segment>
                <Radio.Group onChange={this.onChange} value={this.state.value}>
                  <Radio style={radioStyle} value="QA">
                    QA
                  </Radio>
                  <Radio style={radioStyle} value="KM">
                    KM
                  </Radio>
                </Radio.Group>
              </Segment>
              <Segment style={{ background: "whitesmoke" }}>
                Type of Document
              </Segment>
              <Segment>
                <Radio.Group>
                  <Radio style={radioStyle} value="forum">
                    forum
                  </Radio>
                  <Radio style={radioStyle} value="manual">
                    manual
                  </Radio>
                  <Radio style={radioStyle} value="Master">
                    Master list
                  </Radio>
                  <Radio style={radioStyle} value="training">
                    training Report
                  </Radio>
                </Radio.Group>
              </Segment>
            </Segment.Group>
          </Col>
          <Col span={16}>
            <Segment.Group stacked>
              <Segment>50 Result found</Segment>
              <Segment>
                {this.state.value == "KM" && (
                  <Center>
                    <Radio.Group buttonStyle="solid">
                      <Radio.Button value="Security">Security</Radio.Button>
                      <Radio.Button value="Standard">Standard</Radio.Button>
                      <Radio.Button value="Business">Business</Radio.Button>
                    </Radio.Group>
                  </Center>
                )}
                <List
                  itemLayout="horizontal"
                  dataSource={this.state.value == "KM" ? dataKM : data}
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={
                          <Avatar src="https://img.icons8.com/bubbles/2x/document.png" />
                        }
                        title={<a href="https://ant.design">{item.title}</a>}
                        description={
                          <span>
                            <span style={{marginBottom: 10}}>
                            System : {item.role == "KM" ? (<Tag color="cyan" style={{marginRight: "10px"}}>KM</Tag>) : (<Tag color="lime"  style={{marginRight: "10px"}}>QA</Tag>)} Type of
                            Tag :{" "}
                            {item.type == "Security" ? (
                              <Tag color="volcano">{item.type}</Tag>
                            ) : item.type == "Standard" ? (
                              <Tag color="blue">{item.type}</Tag>
                            ) : item.type == "Business" ? (
                              <Tag color="green">{item.type}</Tag>
                            ) : (
                              <Tag color="blue">{item.type}</Tag>
                            )}
                            </span>
                     <br />
                            <span style={{float: "right",color: "grey"}}><Icon type="eye" /> 10 </span>
                          </span>
                        }
                      />
                    </List.Item>
                  )}
                />
              </Segment>
              <Segment>
                <Center>
                  <Pagination
                    showSizeChanger
                    // onShowSizeChange={onShowSizeChange}
                    showQuickJumper
                    defaultCurrent={3}
                    total={500}
                  />
                </Center>
              </Segment>
            </Segment.Group>
          </Col>
        </Row>
      </Content>
    );
  }
}
