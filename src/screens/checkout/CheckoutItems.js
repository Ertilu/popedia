import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native';
import {
	Text,
	Icon,
	Content,
	Button,
	Body,
	Title,
	Thumbnail,
	Card,
	CardItem,
	Item,
	Input,
	Footer
	} from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';
import { BASE_URL } from './../../router';
import { connect } from 'react-redux';

class CheckoutItems extends Component {
	constructor() {
	  super();
	}

	render() {
		const { item, cartQuantity, cartItems, cartTotal } = this.props;
		return (
			<Content>
				<Card style={styles.cardFull}>
					<View style={styles.topInfo}>
						<Text style={{flex:0.8}}>
							<Text style={{color:'#bdbdbd', fontSize:12}}>Penjual:</Text> <Text style={{fontSize:12}}>{item._id}</Text>
						</Text>
						<Icon type='FontAwesome' name='trash-o' style={styles.trashIcon} />
					</View>
					<CardItem>
						<View>
							<Thumbnail square source={{uri: `${BASE_URL}` + item.image}} />
						</View>
						<View style={{padding:10, flex:1}}>
							<Text style={{fontSize:14}}>{item.name}</Text>
							<Text style={styles.productPrice}>{item.price}</Text>
						</View>
					</CardItem>
				</Card>
			</Content>
		)
	}
}

const styles = StyleSheet.create({
	cardFull: {
		marginTop: 20,
		marginHorizontal:0,
		width:'100%',
		marginLeft:0,
		borderRadius:0
	},
	promoText: {
		color:'#1CC625',
		fontSize:11,
		left: 15
	},
	trashIcon: {
		flex:0.2,
		fontSize:16,
		color:'#bdbdbd',
		right:-50
	},
	productPrice: {
		fontSize:13,
		color:'#ff5722',
		marginTop:8
	},
	removeQty: {
		padding:5,
		paddingRight:9,
		paddingLeft:9,
		borderRadius:15,
		borderWidth:0.5,
		borderColor:'#e0e0e0'
	},
	addQty: {
		padding:5,
		paddingRight:9,
		paddingLeft:9,
		borderRadius:15,
		borderWidth:0.5,
		borderColor:'#1CC625'
	},
	footerInfo: {
		borderTopWidth:0.5,
		borderColor:'#e0e0e0',
		padding:10,
		paddingLeft:15,
		paddingRight:15,
		justifyContent:'center'
	},
	topInfo: {
		borderBottomWidth:0.5,
		borderColor:'#e0e0e0',
		padding:10,
		paddingBottom:22,
		paddingLeft:15,
		paddingRight:15,
		flexDirection:'row'
	},
	menuIcon: {
		height: 20,
		width: 20
	  },
	  footerWrapper: {
		backgroundColor:'red',
		padding:8,
		paddingLeft:15,
		paddingRight:15,
		position: "absolute",
		bottom: 0,
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
	},
});

const mapStateToProps = (state) => ({
    cartItems: state.cart.cart,
	cartTotal: state.cart.total,
	cartQuantity: state.cart.quantity
});

export default connect(mapStateToProps)(CheckoutItems);