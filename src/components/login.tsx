import TextArea from "antd/lib/input/TextArea";
import {
  Form as Formz,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import "antd/dist/antd.css";
import * as React   from "react";
import "../css/style.css";
declare let require: any;
import Center from "react-center";

type State = {};
type Props = {
  loginOn: () => void;
  onUsername: (value: string) => void;
  onPassword: (value: string) => void;
};
export class Login extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {};
  }
  public handleUsername = e => {
    this.props.onUsername(e.target.value);
  };
  public handlePassword = e => {
    this.props.onPassword(e.target.value);
  };
  public render() {
    return (
      <div className="backgroundLogin">
        <Image
          src="https://www.egov.go.th/upload/eservice-thumbnail/img_5d9bbc64b4aea3e87c8e3d37bc5a90fc.png"
          style={{
            position: "absolute",
            zIndex: 99,
            margin: "20px"
          }}
          size="medium"
        />
        <Image
          src={require("../images/Document and Record Management System (DMS).png")}
          style={{
            position: "absolute",
            zIndex: 99,
            right: "0px",
            marginTop: "20px",
            minWidth: "38%"
          }}
          size="medium"
        />
        <Grid
          textAlign="center"
          style={{ height: "100vh" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450, paddingTop: "12%" }}>
            <Header as="h2" color="teal" textAlign="center">
              {/* <Image src="/logo.png" /> Log-in to your account */}
            </Header>
            <Segment
              stacked
              style={{
                height: "400px",
                paddingTop: "165px",
                background: "whitesmoke"
              }}
            >
              <Image
                src={require("../images/user1.gif")}
                style={{
                  position: "absolute",
                  right: "60px",
                  zIndex: 99,
                  top: "-150px",
                  backgroundColor: "#f5f5f5"
                }}
                className="logoLogin"
                size='medium'
                circular
              />{" "}
              <Form
                onSubmit={() => this.props.loginOn()}
                className="login-form"
              >
                <Form.Item>
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Username"
                    onChange={this.handleUsername}
                  />
                </Form.Item>
                <Form.Item>
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="password"
                    onChange={this.handlePassword}
                    placeholder="Password"
                  />
                </Form.Item>
                <Form.Item>
                  <Checkbox style={{ float: "left" }}>จดจำฉัน</Checkbox>
                  <a
                    className="login-form-forgot"
                    href=""
                    style={{ float: "right" }}
                  >
                    ลืมรหัสผ่าน
                  </a>
                  <br />
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    style={{ width: "100%" }}
                    onClick={() => this.props.loginOn()}
                  >
                    เข้าสู่ระบบ
                  </Button>
                </Form.Item>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
