import React, { Component } from 'react';
import {  Container, Content } from "native-base";
import { View, Image, TouchableOpacity, AsyncStorage, FlatList } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import axios from 'axios'

import { BASE_URL } from "../../router";

import Card from './Card'
import styles from './styles';

export default class TypographyExample extends Component {
  constructor(props){
    super(props)
    this.state = {
      histories: [],
      date: [],
      quantity: [[]],
    }

  }

  getHistories = () => {
    AsyncStorage.getItem('bindID').then(id => {
      axios.get(`${BASE_URL}/api/histories/${id}`).
      then(res => {
        this.setState({quantity: res.data.data.map(data => data.quantity)})
        this.setState({date: res.data.data.map(data => data.createdAt.substr(0,10))})
        this.setState({histories: res.data.data.map(data => data.product_id)})
      })
      .catch(err => {
        if (err.response) {
          alert(err.response.message)
        } else if (err.request) {
          alert('Koneksi Error')
        }
      })
    })
    
  }  

  render() {
    const {histories, date, quantity} = this.state
    return (
    <Container>
      <NavigationEvents
        onDidFocus={() => this.getHistories()}
      />

      <Content style={styles.card}>  
        <FlatList
          data={histories}
          renderItem={({item, index}) => item.map((data, i) => {
              return <Card history={data} date={date[index]} quantity={quantity[index][i]} />
            })
          }
        />
      </Content>
    </Container>
    );
  }
}