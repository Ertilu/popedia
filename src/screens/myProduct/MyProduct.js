import React, { Component } from 'react'
import { AsyncStorage, FlatList } from 'react-native'
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Icon, Title, View, Card, CardItem } from 'native-base';
import Modal from "react-native-modal"
import axios from 'axios'

import { BASE_URL } from '../../router'

import MyCard from './MyCard'

import { NavigationEvents } from 'react-navigation'

export default class ListThumbnailExample extends Component {

  state = {
    products: []
  }
  myProducts() {
    AsyncStorage.getItem('bindID', (err, bindID) => {
      axios.get(BASE_URL + '/api/products/user/' + bindID)
        .then(res => {
          this.setState({ products: res.data.data })
          alert(JSON.stringify(data))
        })
        .catch(err => {
          alert(err.response.message)
          alert(JSON.stringify(user_id))
        })
    })
  }
  async componentDidMount() {
    await this.myProducts()
  }

  render() {
    const { navigation } = this.props
    return (
      <Container>
        <Header style={{ backgroundColor: 'white' }}>
          <NavigationEvents
            onDidFocus={() => this.myProducts()}
          />
          <Left >
            <Button transparent onPress={() => navigation.goBack()}>
              <Icon style={{ color: 'gray' }} name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: 'gray' }}>Daftar produk</Title>
          </Body>
          <Right>
            <Button transparent >
              <Icon style={{ color: 'gray' }} onPress={() => navigation.navigate("AddProduct")} name='add' />
            </Button>
          </Right>
        </Header>

        <Content>
          <FlatList
            data={this.state.products}
            renderItem={({ item }) => <MyCard product={item} navigate={this.props.navigation.navigate} />}
            keyExtractor={item => item._id.toString()}
          />
        </Content>
      </Container>
    )
  }
}