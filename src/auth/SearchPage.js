import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Layout, Typography, Form, Input, Space, message, Switch, Radio } from "antd";
import { useFirebase } from "../firebase/useFirebase";
import { Link, navigate } from "@reach/router";
import logo from '../assets/3333.jpg'




function onChangeCosmetics(checked) {
  console.log(`switch to ${checked}`);
}


const { Search } = Input;

const { Header, Footer, Content } = Layout;

const { Title } = Typography;



const MainLayout1 = styled(Layout)`
  width: 100vw;
  height: 100vh;
  ;
`
function SearchPage() {
  const [value, setValue] = useState(0)

  function onChange(e){
    console.log('radio checked', e.target.value);
    setValue(e.target.value)
  };
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
              <Title style={{ color: "black", fontSize: 29, fontFamily: 'TinosBold' }}>Home</Title>
            </Button>
          </div>
          <div
            style={{
              marginLeft: 1500,
              marginTop: -64
            }}>
            <Button type="text">
              <Title style={{ color: "black", fontSize: 29, fontFamily: 'TinosBold' }}>About</Title>
            </Button>
          </div>
          <div
            style={{ width: 100, marginLeft: 1700, marginTop: -65 }}>
            <Button danger
              style={{ backgroundColor: "#FFECE7", borderColor: "#CD8E7E" }}>
              <Title style={{ color: "black", marginTop: -8, fontSize: 29, fontFamily: 'TinosBold' }}>Log In</Title>
            </Button>
          </div>
        </Header>
        <Content style={{ backgroundColor: 'black' }}>
          <Title style={{ color: "#FFECE7", marginTop: 20, marginLeft: 900, fontSize: 40, fontFamily: 'TinosBold' }}>Results</Title>
          <div style={{ backgroundColor: '#FFDBCF', width: 1350, height: 600, marginLeft: 570 }}>
          </div>
          <div style={{ backgroundColor: 'black', width: 10, height: 600, marginTop: -600, marginLeft: 570 }}>
          </div>
          <div style={{ backgroundColor: "#FFECE7", width: 600, height: 600, marginTop: -600, marginLeft: -27 }}>
          <Title style={{ color: "black", paddingLeft:250, paddingTop:20,fontSize: 32, fontFamily: 'TinosBold' }}>Filters</Title>
          <div style ={{marginTop:40, marginLeft:70}}>
          <Title style={{color:'black', fontSize:23, fontFamily: 'TinosBold'}}>Cosmetics</Title>
          <Title style={{color:'black', fontSize:23, marginTop:25, fontFamily: 'TinosBold'}}>Clothes</Title>
          <Title style={{color:'black', fontSize:23, marginTop:25, fontFamily: 'TinosBold'}}>Accessories</Title>
          <Title style={{color:'black', fontSize:23, marginTop:25, fontFamily: 'TinosBold'}}>Travel</Title>
          <Title style={{color:'black', fontSize:23, marginTop:25, fontFamily: 'TinosBold'}}>Services</Title>
          <Title style={{color:'black', fontSize:23,  marginTop:25, fontFamily: 'TinosBold'}}>Other</Title>
          </div>
          <div style ={{width:50,marginTop:-328}}>
             <Space direction="vertical" size="large">
              <Switch style={{marginLeft:240, marginTop:10}} defaultChecked onChange={onChangeCosmetics} />
              <Switch style={{marginLeft:240, marginTop:10}} defaultChecked onChange={onChangeCosmetics} />
              <Switch style={{marginLeft:240,marginTop:10}} defaultChecked onChange={onChangeCosmetics} />
              <Switch style={{marginLeft:240,marginTop:10}} defaultChecked onChange={onChangeCosmetics} />
              <Switch style={{marginLeft:240,marginTop:10}} defaultChecked onChange={onChangeCosmetics} />
              <Switch style={{marginLeft:240,marginTop:10}} defaultChecked onChange={onChangeCosmetics} />
              </Space>
              <Radio.Group style={{marginLeft:70, marginTop:30, width:300}} defaultValue={value} onChange={onChange} value={value}>
                 <Radio style ={{fontSize:23, fontFamily:'TinosBold', color:"black"}} value={1}>Free</Radio>
                  <Radio style ={{fontSize:23, fontFamily:'TinosBold',color:"black"}}  value={2}>Premium</Radio>
                  <Radio style ={{fontSize:23, fontFamily:'TinosBold',color:"black"}}  value={3}>All</Radio>
               </Radio.Group>
          </div>
             </div>
        </Content>
        <Footer style={{ backgroundColor: '#FFECE7', height: 90 }}></Footer>
      </MainLayout1>
    </>
  );
}




export default SearchPage;
//<div style = {{ backgroundColor:"#FFECE7", width: 600, height:600}}>
//</div>
//<div style={{backgroundColor:'green', width:100, paddingBottom:400, marginLeft:800}}>
 //               </div>