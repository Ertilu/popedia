import React, { Component } from 'react'
import { AsyncStorage, FlatList } from 'react-native'
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Icon, Title, View, Card, CardItem } from 'native-base';
import Modal from "react-native-modal"
import axios from 'axios'

import {BASE_URL} from '../../router'

import MyCard from './MyCard'

export default class ListThumbnailExample extends Component {

    state = {
    	products: [],
      error: false,
      errorMessage: '',
    }

    componentDidMount() {
			AsyncStorage.getItem('bindID', (err, bindID) => {
        axios.get(BASE_URL + '/api/products/user/' + bindID)
        .then(res => {
          this.setState({error: false})
          this.setState({products: res.data.data})
        })
        .catch(err => {
          if (err.response) {
            this.setState({error: true})
            this.setState({errorMessage: err.response.message})
          } else if (err.request) {
            this.setState({error: true})
            this.setState({errorMessage: 'Terjadi Masalah Koneksi'})
          } else {
            this.setState({error: true})
            this.setState({errorMessage: err.message})
          }
        })
      })  
    }

  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: 'white' }}>
          <Left >
            <Button transparent >
    	        <Icon style={{ color: 'gray' }} name='arrow-back' />
            </Button>
          </Left>
          <Body>
						<Title style={{ color: 'gray' }}>Daftar produk</Title>
          </Body>
					<Right>
						<Button transparent >
							<Icon style={{ color: 'gray' }} name='heart' />
						</Button>
					</Right>
				</Header>

				<Content>
					{ this.state.error === false ?
            <FlatList
              data={this.state.products}
              renderItem={({item}) => <MyCard product={item} navigate={this.props.navigation.navigate} />}
              keyExtractor={item => item._id.toString()}
            /> : <Text>{this.state.errorMessage}</Text>
          }
				</Content>
			</Container>
    )
  }
}