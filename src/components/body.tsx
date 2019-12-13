import {
  Layout,
  Menu,
  Icon,
  Popover,
  Avatar,
  Button,
  Badge,
  List,
  message
} from "antd";
import TextArea from "antd/lib/input/TextArea";
import * as React from "react";
import "../css/style.css";
const { Header, Sider, Content } = Layout;
import { Image } from "semantic-ui-react";
import { Login } from "./login";
declare let require: any;
const { SubMenu } = Menu;
import { Route, Switch, NavLink, Redirect } from "react-router-dom";
import { SearchField } from "./search";
import { UploadQA } from "./uploadQA";
import { UpdateQA } from "./updateQA";
import { ListQA } from "./listQA";
import { DetailQA } from "./detailQA";
import { ListUser } from "./listUser";
import { DetailUpdateQA } from "./detailUpdateQA";
import { Compare } from "./compare";
import AppStorage from "../share/AppStorage";
import { UploadTraining } from "./uploadTraining";
import { ListReport } from "./listReport";
import { DetailReport } from "./detailReport";
import { ListKM } from "./listKM";
import { DetailKM } from "./detailKM";
import { SearchResult } from "./searchResult";
import { PDF } from "./pdf";
import { ListTraining } from "./listTraining";
import { DetailTraining } from "./detailTraining";
import { DetailKMz } from "./detailKMz";
import { Config } from "./config";
import { DetailKMReject } from "./detailKMReject";
import { ListSendTraining } from "./listSendTraining";
import { ListWaitQA } from "./listWaitQA";
import { EditQA } from "./editQA";
import { ReportQA } from "./reportQA";
import { DetailQAFirst } from "./detailQAFirst";
import { DetailQASecond } from "./detailQASecond";
import { Calendar } from "./calendar";
import { ListViewTraining } from "./listViewTraining";
import { DetailQAReject } from "./detailQAReject";
import { DetailQAUpload } from "./detailQAUpload";
import { Annual } from "./annual";
import { Disposal } from "./disposal";
import { Feedback } from "./feedback";

type State = {
  collapsed: boolean;
  login: boolean;
  username: string;
  password: string;
  role: number;
};
type Props = {};
export class Body extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      login: true,
      username: "",
      password: "",
      role: null
    };
  }
  public onUsername = value => {
    this.setState({ username: value });
  };
  public onPassword = value => {
    this.setState({ password: value });
  };
  public componentDidMount = () => {
    let value = AppStorage.getAccessToken();
    let token = value == "QA" || value == "User" || value == "Trainner";
    this.setState({ login: token });
    value == "QA"
      ? this.setState({ role: 1 })
      : value == "User"
      ? this.setState({ role: 2 })
      : this.setState({ role: 3 });
  };
  public onLogout = () => {
    this.setState({ login: false, role: null });
    AppStorage.Logout();
  };
  public toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  public loginOn = () => {
    let { username, password } = this.state;
    if (username == "bcircle1" && password == "bcircle1") {
      this.setState({ login: true, role: 1 });
      AppStorage.setAccessToken("QA");
    } else if (username == "bcircle2" && password == "bcircle2") {
      this.setState({ login: true, role: 2 });
      AppStorage.setAccessToken("User");
    } else if (username == "bcircle3" && password == "bcircle3") {
      this.setState({ login: true, role: 3 });
      AppStorage.setAccessToken("Trainner");
    } else {
      message.error("ชื่อผู้ใช้หรือรหัสผ่านผิด");
    }
  };
  public render() {
    const data = [
      {
        title: "เอกสารรอพิจารณา"
      },
      {
        title: "เอกสารรอพิจารณา"
      },
      {
        title: "QA Reject"
      },
      {
        title: "QA Approve"
      }
    ];
    const contentz = (
      <div>
         <Menu theme="light" mode="inline" >
        <Menu.Item key="9">
                  <NavLink to="/upload">อัปโหลดเอกสาร</NavLink>
                </Menu.Item>
                <Menu.Item key="10">
                  <NavLink to="/update">อัปเดทเอกสาร</NavLink>
                </Menu.Item>
                </Menu>
      </div>
    );
    const content = (
      <div>
        <hr />
        <Button
          type="danger"
          icon="logout"
          style={{ width: "100%" }}
          onClick={this.onLogout}
        >
          ออกจากระบบ
        </Button>
      </div>
    );
    const contentAlert = (
      <List
        itemLayout="horizontal"
        dataSource={data}
        style={{ width: "300px" }}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar src="https://img.icons8.com/plasticine/2x/document.png" />
              }
              title={<a href="https://ant.design">เอกสารเข้ามาใหม่</a>}
              description={item.title}
            />
          </List.Item>
        )}
      />
    );
    return !this.state.login ? (
      <Login
        loginOn={this.loginOn}
        onUsername={this.onUsername}
        onPassword={this.onPassword}
      />
    ) : (
      <Layout style={{ height: "100%" }}>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          width={250}
          style={{
            overflow: "auto",
            height: "100vh",
            left: 0,
            background: "white"
          }}
        >
          <Image
            src={require("../images/logo.jpg")}
            style={{ width: "240px", margin: "5px" }}
            // className={this.props.collapsed ? "fadeOut" : ""}
            // hidden={this.props.collapsed}
          />
          {this.state.role == 1 ? (
            <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="3">
                <NavLink to="/">
                  <Icon type="search" />
                  <span>ค้นหาข้อมูล</span>
                </NavLink>
              </Menu.Item>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="user" />
                    <span>Document Control</span>
                  </span>
                }
              >
                 <Menu.Item key="101221">
                 <Popover placement="right" title={null} content={contentz} trigger="hover">

                  Document Submit to QA
                  </Popover>

                </Menu.Item>
               <Menu.Item key="9222">

               <NavLink to="/annual">Annual Process Review</NavLink>

                </Menu.Item>
                <Menu.Item key="10">

                <NavLink to="/disposal">Document Disposal</NavLink>

                </Menu.Item>
                <Menu.Item key="122220">

                <NavLink to="/feedback">Feedback on document</NavLink>

                </Menu.Item>
                {/* <Menu.Item key="9">
                  <NavLink to="/upload">อัปโหลดเอกสาร</NavLink>
                </Menu.Item>
                <Menu.Item key="10">
                  <NavLink to="/update">อัปเดทเอกสาร</NavLink>
                </Menu.Item> */}

                <Menu.Item key="11">
                  <NavLink to="/list">
                    <Badge
                      count={1}
                      style={{ position: "absolute", right: "-10px" }}
                    >
                      รายการตรวจสอบเอกสาร
                    </Badge>
                  </NavLink>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                title={
                  <span>
                    <Icon type="user" />
                    <span>KM</span>
                  </span>
                }
              >
                <Menu.Item key="200">
                  {" "}
                  <NavLink to="/uploadTraining">เพิ่มรายงาน Training</NavLink>
                </Menu.Item>
                <Menu.Item key="100">
                  {" "}
                  <NavLink to="/listKM">รายการรายงาน Training</NavLink>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub01"
                title={
                  <span>
                    <Icon type="container" />
                    <span>จัดเก็บเอกสาร</span>
                  </span>
                }
              >
                <Menu.Item key="111">Department</Menu.Item>
              </SubMenu>
              <Redirect push to={`/`} />
            </Menu>
          ) : this.state.role == 2 ? (
            <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="user" />
                    <span>Document Control</span>
                  </span>
                }
              >
                 <Menu.Item key="1111">
                  <NavLink to="/listWaitQA"> <Badge
                      count={2}
                      style={{ position: "absolute", right: "-10px" }}
                    >รายการเอกสารรอตรวจสอบ</Badge></NavLink>
                </Menu.Item>
                 <Menu.Item key="101221">
                 <Popover placement="right" title={null} content={contentz} trigger="hover">

                  Document Submit to QA
                  </Popover>

                </Menu.Item>
                
                <Menu.Item key="9">

<NavLink to="/annual">Annual Process Review</NavLink>

 </Menu.Item>
 <Menu.Item key="10">

 <NavLink to="/disposal">Document Disposal</NavLink>

 </Menu.Item>
 <Menu.Item key="122220">

 <NavLink to="/feedback">Feedback on document</NavLink>

 </Menu.Item>
                <Menu.Item key="9">
                  <NavLink to="/list">รายการตรวจสอบเอกสาร</NavLink>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub4"
                title={
                  <span>
                    <Icon type="file-text" />
                    <span>รายงาน</span>
                  </span>
                }
              >
                <Menu.Item key="1101">
                  {" "}
                  <NavLink to="/reportQA">
                      รายงานการตรวจสอบเอกสาร QA
                  </NavLink>
                </Menu.Item>
       
              </SubMenu>
              <SubMenu
                key="sub3"
                title={
                  <span>
                    <Icon type="user" />
                    <span>KM</span>
                  </span>
                }
              >
                \{" "}
                <Menu.Item key="100">
                  {" "}
                  <NavLink to="/listReport">
                    {" "}
                    <Badge
                      count={1}
                      style={{ position: "absolute", right: "-10px" }}
                    >
                      รายงานที่รอตรวจสอบ
                    </Badge>
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="200">
                  {" "}
                  <NavLink to="/uploadTraining">เพิ่มรายงาน Training</NavLink>
                </Menu.Item>
                <Menu.Item key="1001">
                  {" "}
                  <NavLink to="/listTraining">รายการรายงาน Training</NavLink>
                </Menu.Item>
              </SubMenu>
             
              <Redirect push to={`/listWaitQA`} />
            </Menu>
          ) : (
            <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
                        {/* <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="user" />
                    <span>ตรวจสอบเอกสาร QA</span>
                  </span>
                }
              >
                <Menu.Item key="9">
                  <NavLink to="/listCheck">งานที่รอตรวจสอบ</NavLink>
                </Menu.Item>
              </SubMenu> */}
              <SubMenu
                key="sub3zz"
                title={
                  <span>
                    <Icon type="user" />
                    <span>KM</span>
                  </span>
                }
              >
                \{" "}
                <Menu.Item key="100zz">
                  {" "}
                  <NavLink to="/listReport">
                    {" "}
                    <Badge
                      count={1}
                      style={{ position: "absolute", right: "-10px" }}
                    >
                      รายการที่รอตรวจสอบ
                    </Badge>
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="200zz">
                  {" "}
                  <NavLink to="/uploadTraining">เพิ่มรายงาน Training</NavLink>
                </Menu.Item>
                <Menu.Item key="1001zz">
                  {" "}
                  <NavLink to="/listTraining">รายการรายงาน Training</NavLink>
                </Menu.Item>
              
              </SubMenu>

              <SubMenu
                key="sub3"
                title={
                  <span>
                    <Icon type="file-text" />
                    <span>รายงาน</span>
                  </span>
                }
              >
                <Menu.Item key="200">
                  {" "}
                  <NavLink to="/listTraining">
                    การตรวจสอบรายงาน Training
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="201">
                  {" "}
                  <NavLink to="/listSendingTraining">
                    สถานะการส่งรายงาน
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="1001z/z">
                  {" "}
                  <NavLink to="/listViewTraining">การดูเอกสารรายงาน Training</NavLink>
                </Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub4"
                title={
                  <span>
                    <Icon type="setting" />
                    <span>Config</span>
                  </span>
                }
              >
                <Menu.Item key="300">
                  <NavLink to="/config/tag">Tag</NavLink>
                </Menu.Item>
                <Menu.Item key="321">
                  <NavLink to="/config/calendar">วันหยุด</NavLink>
                </Menu.Item>
              </SubMenu>

              <Redirect push to={`/listReport`} />
            </Menu>
          )}
        </Sider>
        <Layout>
          <Header style={{ background: "#166397", padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
              style={{ margin: "16px", fontSize: "20px", color: "white" }}
            />
            <span
              className="submenu-title-wrapper"
              style={{
                float: "right",
                marginRight: "20px"
              }}
            >
              <Popover
                title="การแจ้งเตือน"
                content={contentAlert}
                trigger="click"
                className="alert"
                style={{ maxWidth: "500px" }}
                placement="bottomRight"
              >
                <Badge count={4} style={{ marginRight: 8 }}>
                  <Button
                    shape="circle"
                    icon="bell"
                    style={{
                      marginLeft: "10px",
                      marginRight: "10px",
                      backgroundColor: "transparent",
                      color: "white"
                    }}
                  />
                </Badge>
              </Popover>

              <Popover
                // getPopupContainer={trigger => trigger.parentNode}
                content={content}
                title={`user: bcircle`}
                trigger="hover"
                placement="bottomRight"
              >
                <Avatar
                  size="large"
                  className="Avatar-circle"
                  style={{ marginRight: "10px", marginLeft: "10px" }}
                  src="https://www.w3schools.com/w3images/avatar2.png"
                />
              </Popover>
            </span>
          </Header>
          <Switch>
            <Route exact path="/" component={SearchField} />
            <Route exact path="/result" component={SearchResult} />
            <Route exact path="/upload" component={UploadQA} />
            <Route exact path="/update" component={UpdateQA} />
            <Route exact path="/list" component={ListQA} />
            <Route exact path="/list/reject" component={DetailQAReject} />
            <Route exact path="/list/detail" component={DetailQA} />
            <Route exact path="/list/upload" component={DetailQAUpload} />
            <Route exact path="/list/detailFirst" component={DetailQAFirst} />

            <Route exact path="/list/detailSecond" component={DetailQASecond} />

            <Route exact path="/list/detail/edit" component={EditQA} />
            <Route exact path="/list/detailUpdate" component={DetailUpdateQA} />
            <Route exact path="/reportQA" component={ReportQA} />
            <Route
              exact
              path="/list/detailUpdate/compare"
              component={Compare}
            />
            <Route exact path="/listCheck" component={ListUser} />
            <Route exact path="/uploadTraining" component={UploadTraining} />
            <Route exact path="/listReport" component={ListReport} />
            <Route exact path="/listReport/detail" component={DetailReport} />
            <Route exact path="/listKM" component={ListKM} />
            <Route exact path="/listWaitQA" component={ListWaitQA} />
            <Route exact path="/listTraining" component={ListTraining} />
            <Route exact path="/listViewTraining" component={ListViewTraining} />
            <Route
              exact
              path="/listTraining/detail"
              component={DetailTraining}
            />
            <Route exact path= "/listSendingTraining" component={ListSendTraining}/>
            <Route exact path="/listKM/detail" component={DetailKM} />
            <Route exact path="/listKM/detailz" component={DetailKMz} />
            <Route exact path="/PDF" component={PDF} />
            <Route exact path="/config/tag" component={Config} />
            <Route exact path="/listKM/rejct" component={DetailKMReject} />
            <Route exact path="/config/calendar" component={Calendar} />

            <Route exact path="/annual" component={Annual} />
            <Route exact path="/disposal" component={Disposal} />

            <Route exact path="/feedback" component={Feedback} />

          </Switch>
          <div style={{ padding: "1rem", textAlign: "center" }}>
            Designed by BCircle Co.,Ltd.
          </div>
        </Layout>
      </Layout>
    );
  }
}
