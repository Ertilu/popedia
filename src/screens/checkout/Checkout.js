import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body, Left, Right, Title, Button, Icon, H3 } from "native-base";
import { View, Image, TouchableOpacity } from 'react-native'
import styles from './styles';

export default class Maintenance extends Component {
  render() {
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
						<Text style={{flex:0.8}}>
							<Text style={{color:'#bdbdbd', fontSize:12}}>Penjual:</Text> <Text style={{fontSize:12}}>MI.STORE</Text>
						</Text>
						<Icon type='FontAwesome' name='trash-o' style={styles.trashIcon} />
					</View>
					<CardItem>
						<View style={{padding:10, flex:1}}>
							<Text style={{fontSize:14}}>Xiaomi Mi Notebook Air 12.5"/Core M3-6y30/4gb/128gb ssd - Emas</Text>
							<Text style={styles.productPrice}>Rp 8.499.000</Text>
						</View>
					</CardItem>
                </Card>
                <Card>
                    <CardItem header>
                    
                    </CardItem>
                <CardItem>
                <Body>
                    <Text>
                    //Your text here
                    </Text>
                </Body>
                </CardItem>
                <CardItem footer>
                <Text>GeekyAnts</Text>
                </CardItem>
            </Card>
        </Content>
    </Container>
    );
  }
}