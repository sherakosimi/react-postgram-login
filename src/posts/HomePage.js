import React from "react";
import styled from "styled-components";
import { Button, Layout, Typography, Form, Input, PageHeader, message} from "antd";
import { useFirebase } from "../firebase/useFirebase";
import { Link } from "@reach/router";
import logo from '../assets/3333.jpg'
import FacebookLoginWithButton from 'react-facebook-login';
import { useNavigate } from "@reach/router";


const { Header, Footer, Content,Sider } = Layout;

const componentClicked = () => {
  console.log( "Clicked!" )
}

const responseFacebook = (response) => {
  console.log(response);
}

const MainLayout = styled(Layout)`
  width: 100vw;
  height: 100vh;

`;

const MainLayout1 = styled(Layout)`
  height: 400;
  align-items: center;
  justify-content: center;

`;

const TextLayout = styled.div``;


const {Title}= Typography;


function HomePage() {
  const {signInWithFacebook, login} = useFirebase();
  const navigate = useNavigate();


  const onFormFinish = async (values) => {
    try {
      await login(values.email, values.password);
      message.success("Login is successful");
      navigate("/");
    } catch (error) {
      message.error(error.message);
    }
  };

  
  const onFormFinish1 = async () => {
    try {
      await signInWithFacebook();
      message.success("Login is successful");
      navigate("/mainpage");
    } catch (error) {
      message.error(error.message);
    }
  };
console.log(responseFacebook)

   return (
       <>
    <MainLayout>
    <Header style = {{backgroundColor: '#FFECE7', height:100}}>
    <div style ={{width:200,}}>
    <img alt = "logo" src={logo} style={{height:60, marginLeft:-15, marginTop:18}}/>
    </div>
    <Title style={{color:"black", fontSize:33, paddingLeft:50, marginBottom:-45,marginTop:-68}}>SAVE</Title>
    <Title style={{color:"black", fontSize:33, paddingLeft:50,}}>SALE</Title>
    <div style ={{width:300, marginBottom:-20}}>
          Please login in <Link to="/login">here</Link>
    </div>
    </Header>
    <Content style = {{backgroundColor: 'black'}}>
    <div
      style = {
         {backgroundColor:'#FFECE7',
         width:350,
         height:390,
         marginLeft:770,
         marginTop:200}}>
      <PageHeader title="Login"  style={{marginLeft:120}} />
      <Form onFinish={onFormFinish} >
        <div
        style ={{width:300, marginLeft:20}}>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        </div>
        <div
        style={{width:300, marginLeft:20}}>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        </div>
        <div style ={{marginLeft:100}}>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
        </div>
        <div style ={{backgroundColor:'black', width:244.5, marginLeft:50}}> 
    <FacebookLoginWithButton
      appId="2699502363599338"
      autoLoad
      fields="name,email,picture"
       onClick={onFormFinish1}
       callback={responseFacebook}
      icon="fa-facebook"/>
    </div>
      </Form>
      <TextLayout
      style={{marginLeft:20}}>
        Don't have login yet? Register <Link to="/register">here</Link>
      </TextLayout>
      <TextLayout>
          Forgot password? <Link to = "/passwordchange">Reset </Link>
      </TextLayout>
      </div>
    </Content>
    <Footer style = {{backgroundColor: '#FFECE7', height:90}}></Footer>
  </MainLayout>
</>
  );
};

export default HomePage;
