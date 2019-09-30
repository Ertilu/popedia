import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import {
	Container,
	Header,
	Left,
	Right,
	Text,
	Icon,
	Button,
	Body,
	Title,
	Footer,
	StyleProvider
	} from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import CartContent from './CartContent';
import { connect } from 'react-redux';

class Cart extends Component {
	render() {
		const { cartItems, navigation, cartTotal, cartQuantity } = this.props;
		let totalPrice = cartTotal;
		return (
			<StyleProvider style={getTheme(material)}>
				<Container>
					<Header style={{backgroundColor: '#fff'}}>
						<Left>
							<Button transparent onPress={() => this.props.navigation.goBack()}>
				            	<Icon name='arrow-back' style={{color: '#424242'}}/>
				            </Button>
						</Left>
						<Body>
							<Title style={{color: '#424242', fontSize:16, fontWeight:'bold'}}>Keranjang</Title>
						</Body>
						<Right>
							<Button transparent>
								<Text style={{fontSize:14, color:'#9e9e9e'}}>Hapus</Text>
							</Button>
						</Right>
					</Header>
					<CartContent cartItems={cartItems} cartTotal={cartTotal} />
					<Footer style={styles.footerWrapper}>
						<Row>
							<Col>
								<Text style={{fontSize:11, color:'#bdbdbd'}}>Total Harga ({(cartItems).length} Barang)</Text>
								<Text style={{fontSize:15, color:'#ff5722'}}>Rp {totalPrice}</Text>
							</Col>
							<Col>
							<TouchableOpacity onPress={() => navigation.navigate("Checkout")}>
								<Text style={styles.checkoutFooter}>Beli ({(cartItems).length})</Text>
							</TouchableOpacity>
							</Col>
						</Row>
					</Footer>
				</Container>
			</StyleProvider>
		)
	}
}

const styles = StyleSheet.create({
	footerWrapper: {
		backgroundColor:'#fff',
		padding:8,
		paddingLeft:15,
		paddingRight:15
	},
	checkoutFooter: {
		fontSize:14,
		color:'#fff',
		backgroundColor:'#ff5722',
		justifyContent:'center',
		padding:10,
		width:'100%',
		borderRadius:3,
		textAlign:'center'
	}
})

const mapStateToProps = (state) => ({
    cartItems: state.cart.cart,
    cartTotal: state.cart.total,
	cartQuantity: state.cart.quantity
});

export default connect(
    mapStateToProps
)(Cart);
