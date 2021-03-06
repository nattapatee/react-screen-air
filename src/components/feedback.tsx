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
    DatePicker,
    Table,
    Modal,
    Empty
  } from "antd";
  import Center from "react-center";
  
  import { Header, Icon as Ic } from "semantic-ui-react";
  
  import * as React from "react";
import moment = require("moment");
  const { Search } = Input;
  const { Option } = Select;
  type State = { type: string; visibleRef: boolean; docNo: string; CopyNo: string; title: string; issue: string; date: Date; formar: string; DocRef: any[] };
  const { Content } = Layout;
  const { TextArea } = Input;
  
  type Props = {};
  export class Feedback extends React.Component<Props, State> {
    constructor(props) {
      super(props);
      this.state = {
        type: "",
        visibleRef: false,
        docNo:  "",CopyNo: "", title: "", issue: "", date: new Date(), formar: "",
        DocRef: []
      };
    }
    public onDocNoChange = e => {
        this.setState({docNo: e.target.value    })
    }
    public onCopyNum = e => {
        this.setState({CopyNo: e.target.value})
    }
    public onTitle = e => {
        this.setState({title : e.target.value})
    }
    public onIssue = e =>{
        this.setState({issue: e.target.value})
    }
    public onFormat = e =>{
        this.setState({formar: e.target.value})
    }
    public onDate = (value,string) => {
        this.setState({date: value})
    }
    public onAddRef = () => {
    
          let value: any[] = this.state.DocRef;
          value.push({
            DocNo: this.state.docNo,
            CopyNo: this.state.CopyNo,
            DocumentTitle: this.state.title,
            issue: this.state.issue,
            DateDocRef: this.state.date,
            format: this.state.formar
          });
          this.setState({
            DocRef: value,
            visibleRef: false,
            docNo:  "",CopyNo: "", title: "", issue: "", date: new Date(), formar: ""
          })
      };
    public onDocTypeChange = value => {
      this.setState({ type: value });
    };
    public showRefDoc = () => {
        this.setState({visibleRef: true})
    }
    public columns: any = [
        {
          title: "Item Number",
          dataIndex: "DocNo"
        },
        {
            title: "Chapter Title",
            dataIndex: "CopyNo"
          },
          {
            title: "Comment",
            dataIndex: "DocumentTitle"
          },
          {
            title: "Suggestion for Improvement",
            dataIndex: "issue"
          }
      ];
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
              Feedback on Document
              <Header.Subheader>
              Feedback on Document
              </Header.Subheader>
            </Header.Content>
          </Header>
          <hr />
          <br />
          <Row>
            <Col span={4} />
            <Col span={5} style={{ textAlign: "right", marginTop: "5px" }}>
              Chapter/part :
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
            Issue No. :
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
              Revision No. :
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
                The following  :
            </Col>
            <Col span={10}>
            <Button
                          type="primary"
                          icon="file-add"
                          className="replyIn"
                          onClick={this.showRefDoc}
                        >
                          Add
                        </Button>
                        <Modal
                          title="Add"
                          visible={this.state.visibleRef}
                          onOk={this.onAddRef}
                          onCancel={null}
                          cancelText="cancel"
                          okText="add"
                        >
                          <Row>
                            <Col span={6} style={{ textAlign: "right" }}>
                              Item Number :{" "}
                            </Col>
                            <Col span={18}>
                              <Input
                                className="replyIn"
                                onChange={this.onDocNoChange}
                                value={this.state.docNo}
                              />
                            </Col>
                          </Row>
                          <br />
                          <Row>
                            <Col span={6} style={{ textAlign: "right" }}>
                              Chapter Title :{" "}
                            </Col>
                            <Col span={18}>
                            <Input
                                className="replyIn"
                                onChange={this.onCopyNum}
                                value={this.state.CopyNo}
                              />
                            </Col>
                          </Row>
                          <br />
                          <Row>
                            <Col span={6} style={{ textAlign: "right" }}>
                              Comment :{" "}
                            </Col>
                            <Col span={18}>
                              <Input
                                className="replyIn"
                                onChange={this.onTitle}
                                value={this.state.title}
                              />
                            </Col>
                          </Row>
                          <br />
                          <Row>
                            <Col span={6} style={{ textAlign: "right" }}>
                              Suggestion for Improvement :{" "}
                            </Col>
                            <Col span={18}>
                            <Input
                                className="replyIn"
                                onChange={this.onIssue}
                                value={this.state.issue}
                              />
                            </Col>
                          </Row>
                    
                        </Modal>

            </Col>
            <Col span={4} />
          </Row>
          <br />
          <Row>
            <Col span={4} />
            <Col span={5} style={{ textAlign: "right", marginTop: "5px" }}>
            </Col>
            <Col span={10}>
            <Table
                          columns={this.columns}
                          dataSource={this.state.DocRef}
                          style={{
                            marginLeft: "5px",
                            marginBottom: "10px",
                            marginTop: "10px"
                          }}
                          locale={{
                            emptyText: (
                              <Empty
                                description="ไม่พบข้อมูล"
                                // image={require("../../image/empty.gif")}
                              />
                            )
                          }}
                        />
            </Col>
            <Col span={4} />
          </Row>

         
          <br />
          <Row>
            <Col span={4} />
            <Col span={5} style={{ textAlign: "right", marginTop: "5px" }}>
              Additional Comments/Suggestions :
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
              Request By :
            </Col>
            <Col span={10}>
            <Input
              style={{ width: 400, marginLeft: "5px" }}
            />            </Col>
            <Col span={4} />
          </Row>
          <br />
          <Row>
            <Col span={4} />
            <Col span={5} style={{ textAlign: "right", marginTop: "5px" }}>
              Position :
            </Col>
            <Col span={10}>
            <Input
              style={{ width: 400, marginLeft: "5px" }}
            />            </Col>
            <Col span={4} />
          </Row>
          <br />
          <Row>
            <Col span={4} />
            <Col span={5} style={{ textAlign: "right", marginTop: "5px" }}>
              Submit Date :
            </Col>
            <Col span={10}>
            <DatePicker style={{ marginLeft: "5px" }} format="DD/MM/YYYY" />           </Col>
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
  