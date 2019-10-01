import React, { Component } from 'react';
import {  Container, Header, Content, Card, CardItem, Text, Body, Left, Right, Title, Button, Icon, Thumbnail } from "native-base";
import { View, Image, TouchableOpacity } from 'react-native'
import styles from './styles';
import { Grid, Col, Row } from 'react-native-easy-grid';
export default class TypographyExample extends Component {
  render() {
    return (
        <Container>  
            <Content style={styles.card}>
                <Card style={styles.cardFull}>
                    <CardItem>
                        <View>
                            <Thumbnail squar />
                        </View>
                        <View style={{padding:10, flex:1}}>
                            <Text style={{fontSize:14}}>Nama</Text>
                            <Text style={styles.productPrice}>Harga</Text>
                        </View>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    );
  }
}