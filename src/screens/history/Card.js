import React from 'react'
import { View, Text } from 'react-native'
import { Card, CardItem, Thumbnail } from 'native-base'

import styles from './styles';

import { BASE_URL } from "../../router";

const Cards = props => {

	const total = props.history.price * props.quantity
	return(
    <Card style={styles.cardFull}>
        <View style={styles.topInfo}>
            <Text style={{flex:0.8}}>
                <Text style={{color:'#bdbdbd', fontSize:12}}>Tanggal: {props.date}</Text>
            </Text>
        </View>
        <CardItem>
            <View>
                <Thumbnail source={{uri: BASE_URL + props.history.image}} squar />
            </View>
            <View style={{padding:10, flex:1}}>
                <Text style={{fontSize:14}}>{props.history.name}</Text>
                <Text style={styles.productPrice}>Rp. {total}</Text>
            </View>
        </CardItem>
    </Card>
	)
}

export default Cards