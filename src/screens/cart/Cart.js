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
		const { cartItems, navigation, cartTotal } = this.props;
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
								<Text style={{fontSize:11, color:'#bdbdbd'}}>Total Harga (2 Barang)</Text>
								<Text style={{fontSize:15, color:'#ff5722'}}>Rp 14.399.000</Text>
							</Col>
							<Col>
							<TouchableOpacity onPress={() => this.props.navigation.navigate("Checkout")}>
								<Text style={styles.checkoutFooter}>Beli (2)</Text>
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
    cartTotal: state.cart.total
});

export default connect(
    mapStateToProps
)(Cart);
