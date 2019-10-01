import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Icon, Title, View, Card, CardItem } from 'native-base';
import Modal from "react-native-modal"
import { BASE_URL } from '../../router'


const MyCard = props => {
    // const [isModalVisible, setIsModalVisible] = useState(false)

    // const toggleModal = () => {
    // 	setIsModalVisible(!isModalVisible)
    // } 

    const { product, navigate } = props

    return (
        <ListItem thumbnail>
            <Left>
                <TouchableOpacity
                    onPress={() => navigate('Product', { item: product })}
                >
                    <Thumbnail square source={{ uri: BASE_URL + product.image }} />
                </TouchableOpacity>
            </Left>
            <Body>
                <TouchableOpacity
                    onPress={() => navigate('Product', { item: product })}
                >
                    <Text>{product.name}</Text>
                    <Text note style={{ color: 'orange' }}>Rp. {product.price},-</Text>
                </TouchableOpacity>
            </Body>

        </ListItem>
    )
}


export default MyCard