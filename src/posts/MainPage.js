import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { Button, Layout, Typography, Form, Input, PageHeader, message } from "antd";
import { useFirebase } from "../firebase/useFirebase";
import { Link, navigate } from "@reach/router";
import logo from '../assets/3333.jpg'
import CreateCard from "../auth/CreateCard"




const { Search } = Input;

const { Header, Footer, Content } = Layout;

const { Title } = Typography;

const MainLayout = styled(Layout)`
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;



const MainLayout1 = styled(Layout)`
  width: 100vw;
  height: 100vh;
  ;
`
function MainPage() {
  const [cards, setCards]= useState([])
  const { user, signout, getCards } = useFirebase();

  useEffect(() => {
    async function fetchData() {
      try{
        const result = await getCards()
        console.log(result)
      }
      catch(error){
        console.log(error)
      }
    }
    fetchData();
  }, []); 


  const onLogoutClick = () => {
    try {
      signout();
    } catch (error) {
      console.log("error logging out");
    }
  };



  const addnewCard = () => {
    try {
      navigate("/createCard")
    } catch{
      message("Error")
    }
  }

  if (!user) {
    return (
      <>
        <MainLayout1>
          <Header style={{ backgroundColor: '#FFECE7', height: 100 }}>
            <div style={{ width: 200, }}>
              <img alt="logo" src={logo} style={{ height: 60, marginLeft: -15, marginTop: 18 }} />
            </div>
            <Title style={{ color: "black", fontSize: 33, paddingLeft: 50, marginBottom: -45, marginTop: -68, fontFamily: 'Tinos' }}>SAVE</Title>
            <Title style={{ color: "black", fontSize: 33, paddingLeft: 50, fontFamily: 'Tinos' }}>SALE</Title>
            <Search
              placeholder="Find your discount"
              enterButton="Search"
              size="large"
              //suffix={suffix}
              onSearch={value => console.log(value)}
              style={{ width: 700, marginLeft: 300, marginTop: -70 }}
            />
            <div
              style={{
                marginLeft: 1300,
                marginTop: -141
              }}>
              <Button type="text">
                <Title style={{ color: "black", fontSize: 29, fontFamily: 'TinosBoldItalic' }}>Home</Title>
              </Button>
            </div>
            <div
              style={{
                marginLeft: 1500,
                marginTop: -64
              }}>
              <Button type="text">
                <Title style={{ color: "black", fontSize: 29, fontFamily: 'TinosBoldItalic' }}>About</Title>
              </Button>
            </div>
            <div
              style={{ width: 100, marginLeft: 1700, marginTop: -65 }}>
              <Button danger
                style={{ backgroundColor: "#FFECE7", borderColor: "#CD8E7E" }}>
                <Title style={{ color: "black", marginTop: -8, fontSize: 29, fontFamily: 'TinosBoldItalic' }}>Log In</Title>
              </Button>
            </div>
          </Header>
          <Content style={{ backgroundColor: 'black' }}>
            <Title style={{ color: "#FFECE7", marginTop: 20, marginLeft: 850, fontSize: 40, fontFamily: 'TinosBoldItalic' }}>My Wallet</Title>
            <div
              style={
                {
                  backgroundColor: '#FFECE7',
                  width: 400,
                  height: 250,
                  marginLeft: 70,
                  marginTop: 50,
                  borderRadius: "20px"
                }}>

              <Title style={{ color: "black", paddingTop: 20, paddingLeft: 127, fontSize: 17, fontFamily: 'TinosBoldItalic' }}>ID: 5748253529293</Title>
              <Title style={{ color: "black", paddingTop: -2, paddingLeft: 20, fontSize: 17, fontFamily: 'TinosBold' }}>Name: </Title>
              <Title style={{ color: "black", paddingTop: -25, paddingLeft: 20, fontSize: 17, fontFamily: 'TinosBold' }}>Type: </Title>
              <Title style={{ color: "black", paddingTop: -35, paddingLeft: 20, fontSize: 17, fontFamily: 'TinosBold' }}>Description: </Title>
            </div>
            <div
              style={
                {
                  backgroundColor: '#FFECE7',
                  width: 400,
                  height: 250,
                  marginLeft: 70,
                  marginTop: 75,
                  borderRadius: "20px"
                }}>
              <Title style={{ color: "black", paddingTop: 20, paddingLeft: 127, fontSize: 17, fontFamily: 'TinosBoldItalic' }}>ID: 574825329293</Title>
              <Title style={{ color: "black", paddingTop: -2, paddingLeft: 20, fontSize: 17, fontFamily: 'TinosBold' }}>Name: </Title>
              <Title style={{ color: "black", paddingTop: -25, paddingLeft: 20, fontSize: 17, fontFamily: 'TinosBold' }}>Type: </Title>
              <Title style={{ color: "black", paddingTop: -35, paddingLeft: 20, fontSize: 17, fontFamily: 'TinosBold' }}>Description: </Title>
            </div>
            <div
              style={
                {
                  backgroundColor: '#FFECE7',
                  width: 400,
                  height: 250,
                  marginLeft: 550,
                  marginTop: -575,
                  borderRadius: "20px"
                }}>
              <Button danger onClick={addnewCard}
                style={{ backgroundColor: "#FFECE7", borderColor: "#FFECE7", marginTop: 100, marginLeft: 137 }}>
                <Title style={{ color: "black", fontSize: 29, fontFamily: 'TinosBoldItalic' }}>Add New</Title>
              </Button>

            </div>

          </Content>
          <Footer style={{ backgroundColor: '#FFECE7', height: 90 }}></Footer>
        </MainLayout1>
      </>
    );
  }

  return (
    <>
      <MainLayout1>
        <Header style={{ backgroundColor: '#FFECE7', height: 100 }}>
          <div style={{ width: 200, }}>
            <img alt="logo" src={logo} style={{ height: 60, marginLeft: -15, marginTop: 18 }} />
          </div>
          <Title style={{ color: "black", fontSize: 33, paddingLeft: 50, marginBottom: -45, marginTop: -68, fontFamily: 'Tinos' }}>SAVE</Title>
          <Title style={{ color: "black", fontSize: 33, paddingLeft: 50, fontFamily: 'Tinos' }}>SALE</Title>
          <Search
            placeholder="Find your discount"
            enterButton="Search"
            size="large"
            //suffix={suffix}
            onSearch={value => console.log(value)}
            style={{ width: 700, marginLeft: 300, marginTop: -70 }}
          />
          <div
            style={{
              marginLeft: 1300,
              marginTop: -141
            }}>
            <Button type="text">
              <Title style={{ color: "black", fontSize: 29, fontFamily: 'TinosBoldItalic' }}>Home</Title>
            </Button>
          </div>
          <div
            style={{
              marginLeft: 1500,
              marginTop: -64
            }}>
            <Button type="text">
              <Title style={{ color: "black", fontSize: 29, fontFamily: 'TinosBoldItalic' }}>About</Title>
            </Button>
          </div>
          <div
            style={{ width: 100, marginLeft: 1700, marginTop: -65 }}>
            <Button danger
              style={{ backgroundColor: "#FFECE7", borderColor: "#CD8E7E" }}>
              <Title style={{ color: "black", marginTop: -8, fontSize: 29, fontFamily: 'TinosBoldItalic' }}>Log In</Title>
            </Button>
          </div>
        </Header>
        <Content style={{ backgroundColor: 'black' }}>
          <Title style={{ color: "#FFECE7", marginTop: 20, marginLeft: 850, fontSize: 40, fontFamily: 'TinosBoldItalic' }}>My Wallet</Title>
          <div
            style={
              {
                backgroundColor: '#FFECE7',
                width: 400,
                height: 250,
                marginLeft: 70,
                marginTop: 50,
                borderRadius: "20px"
              }}>

            <Title style={{ color: "black", paddingTop: 20, paddingLeft: 127, fontSize: 17, fontFamily: 'TinosBoldItalic' }}>ID: 5748253529293</Title>
            <Title style={{ color: "black", paddingTop: -2, paddingLeft: 20, fontSize: 17, fontFamily: 'TinosBold' }}>Name: </Title>
            <Title style={{ color: "black", paddingTop: -25, paddingLeft: 20, fontSize: 17, fontFamily: 'TinosBold' }}>Type: </Title>
            <Title style={{ color: "black", paddingTop: -35, paddingLeft: 20, fontSize: 17, fontFamily: 'TinosBold' }}>Description: </Title>
          </div>
          <div
            style={
              {
                backgroundColor: '#FFECE7',
                width: 400,
                height: 250,
                marginLeft: 70,
                marginTop: 75,
                borderRadius: "20px"
              }}>
            <Title style={{ color: "black", paddingTop: 20, paddingLeft: 127, fontSize: 17, fontFamily: 'TinosBoldItalic' }}>ID: 574825329293</Title>
            <Title style={{ color: "black", paddingTop: -2, paddingLeft: 20, fontSize: 17, fontFamily: 'TinosBold' }}>Name: </Title>
            <Title style={{ color: "black", paddingTop: -25, paddingLeft: 20, fontSize: 17, fontFamily: 'TinosBold' }}>Type: </Title>
            <Title style={{ color: "black", paddingTop: -35, paddingLeft: 20, fontSize: 17, fontFamily: 'TinosBold' }}>Description: </Title>
          </div>
          <div
            style={
              {
                backgroundColor: '#FFECE7',
                width: 400,
                height: 250,
                marginLeft: 550,
                marginTop: -575,
                borderRadius: "20px"
              }}>
            <Button danger onClick={addnewCard}
              style={{ backgroundColor: "#FFECE7", borderColor: "#FFECE7", marginTop: 100, marginLeft: 137 }}>
              <Title style={{ color: "black", fontSize: 29, fontFamily: 'TinosBoldItalic' }}>Add New</Title>
            </Button>

          </div>

        </Content>
        <Footer style={{ backgroundColor: '#FFECE7', height: 90 }}></Footer>
      </MainLayout1>
    </>
  );
}

export default MainPage;
