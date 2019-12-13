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
  export class Annual extends React.Component<Props, State> {
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
              Annual Process Review
              <Header.Subheader>
              Annual Process Review
              </Header.Subheader>
            </Header.Content>
          </Header>
          <hr />
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
                Effective Date :
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
              Disposition :
            </Col>
            <Col span={10}>
            <Radio.Group style={{marginLeft: "5px"}}>
        <Radio  value={1}>
          For Revision
        </Radio>
        <Radio value={2}>
          Use AS is
        </Radio>
        </Radio.Group>
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
                  Submit
                </Button>
                <Button icon="close-circle">Cancel</Button>
              </Center>
            </Col>
            <Col span={4} />
          </Row>
        </Content>
      );
    }
  }
  