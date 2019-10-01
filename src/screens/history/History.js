import React, { Component } from 'react';
import { Animated, View } from 'react-native';
import { Container, Content, Tab, Tabs, Header, Button, Icon, Text, Left, Right, Title, Body } from 'native-base';
import Tab1 from './Buy';
import Tab2 from './Sell';
import styles from './styles';

export default class TabsExample extends Component {
  render() {
    const { navigation }  = this.props;
    return (
      <Container style={styles.container}>
        <Header
        hasTabs
        androidStatusBarColor={'#2aaa4d'}
        style={{
            textAlign: 'left',
            backgroundColor: 'white',
        }}>
            <Button onPress={() => navigation.navigate("Profile")} transparent>
                <Icon style={styles.textHeader} name='arrow-back' />
                <Title style={{ color: 'gray', fontWeight: "600" }}>  Riwayat Transaksi</Title>
            </Button>
         
            <Right>
            </Right>
        </Header>
        <Tabs>
          <Tab heading="Pembelian" tabStyle={{backgroundColor: 'white'}} activeTabStyle={{backgroundColor: 'green'}} textStyle={{color: 'gray'}}>
            <Tab1 />
          </Tab>
          <Tab heading="Penjualan" tabStyle={{backgroundColor: 'white'}} activeTabStyle={{backgroundColor: 'green'}} textStyle={{color: 'gray'}}>
            <Tab2 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}