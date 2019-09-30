import React, { Component } from 'react'
import { AsyncStorage, FlatList } from 'react-native'
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Icon, Title, View, Card, CardItem } from 'native-base';
import Modal from "react-native-modal"
import axios from 'axios'

import { BASE_URL } from '../../router'

import MyCard from './MyCard'

export default class ListThumbnailExample extends Component {

    state = {
        products: []
    }

    componentDidMount() {
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


        // alert(bindID)

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