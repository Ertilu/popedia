import React, { Component } from 'react';
import {  Container, Header, Content, Card, CardItem, Text, Body, Left, Right, Title, Button, Icon, H3 } from "native-base";
import { View, Image, TouchableOpacity, AsyncStorage } from 'react-native'
import styles from './styles';
import Cart from './CheckoutContent';
import { Grid, Col, Row } from 'react-native-easy-grid';
import { connect } from 'react-redux'
import axios from 'axios';

import { BASE_URL } from "../../router";

class Checkout extends Component {
  checkout = () => {
    this.props.cartItems.map(data => {
        axios 
        .post('http://ec2-54-204-153-133.compute-1.amazonaws.com:4869/api/products/checkout', {"cart" : [
                {
                    "_id": data._id,
                    "by": data.quantity
                }
            ] 
        })
    })

    const product_id = this.props.cartItems.map(data => data._id)
    const quantity = this.props.cartItems.map(data => data.quantity)
    const total = this.props.cartTotal

    AsyncStorage.getItem('bindID').then(id => {
      const data = {
        user_id: id,
        product_id,
        quantity,
        total
      }
      axios.post(`${BASE_URL}/api/histories`, data)
      .then(() => alert('success boss'))
      .catch(() => alert('gagal reeee'))
    })

    this.props.navigation.navigate("CheckoutSuccess");
  }
  render() {
    const { cartItems, navigation, cartTotal } = this.props;    

    return (
    <Container>
        <Header androidStatusBarColor={'#2aaa4d'} style={{backgroundColor: '#fff'}}>
            <Left>
            <Button onPress={() => this.props.navigation.goBack()} transparent>
                <Icon style={styles.textHeader} name='arrow-back' style={{color: '#424242'}} />
            </Button>
            </Left>
            <Body>
            <Title style={{color: '#424242', fontSize:16, fontWeight:'bold'}}>Pengiriman</Title>
            </Body>
            <Right>
            </Right>
        </Header>     
        <Content style={styles.card}>
            <Card style={styles.cardFull}>
                <CardItem>
                    <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                        <Image  
                            source={{uri: 'https://ecs7.tokopedia.net/img/cart-checkout/promo-stacking/icon-promo-1.png'}}
                            style={styles.menuIcon}
                        />
                        <Text style={styles.promoText}>Gunakan Promo Popedia</Text>
                    </View>
                </CardItem>
            </Card>
            <Card style={styles.cardFull}>
                <View style={styles.topInfo}>
                    <H3>Alamat Pengiriman</H3>
                </View>
                <CardItem>
                    <View style={{padding:10, flex:1}}>
                        <Text style={{fontSize:14}}>Rumah</Text>
                        <Text style={{fontSize: 12}}>Arkademy</Text>
                        <Text style={{fontSize: 10}}>Jl. Sukasari III No.47, RT.02/RW.01, Sukasari, Kec. Bogor Tim., Kota Bogor, Jawa Barat 16142</Text>
                        <Text style={{fontSize: 10}}>+6287789513824</Text>
                        <View style={styles.alternativeLayoutButtonContainer}>
                            <Button transparent >
                                <Text style={styles.leftAddress}>Kirim ke Banyak Alamat</Text>
                            </Button>
                            <Button transparent>
                                <Text style={styles.rightAddress}>Ganti Alamat</Text>
                            </Button>
                        </View>
                    </View>
                </CardItem>
            </Card>
            <Cart cartItems={cartItems} cartTotal={cartTotal} />
            <Card style={styles.cardFull}>
                <Row>
                    <Col>
                        <Text style={{fontSize:11, color:'#bdbdbd'}}>Total Harga  ({(cartItems).length} Barang)</Text>
                        <Text style={{fontSize:15, color:'#ff5722'}}>Rp {cartTotal}</Text>
                    </Col>
                    <Col>
                    <TouchableOpacity onPress={this.checkout}>
                        <Text style={styles.checkoutFooter}>Checkout</Text>
                    </TouchableOpacity>
                    </Col>
                </Row>
            </Card>
        </Content>
    </Container>
    );
  }
}

const mapStateToProps = (state) => ({
    cartItems: state.cart.cart,
    cartTotal: state.cart.total,
});


export default connect(mapStateToProps)(Checkout);