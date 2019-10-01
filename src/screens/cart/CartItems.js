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
import { addQuantity, reduceQuantity } from '../../redux/actions/cartActions'; 
import { connect } from 'react-redux';

class CartItems extends Component {
	constructor() {
	  super();
	
	  this.state = {
		quantity: '1',
		id: ''
	  };
	}

	reduceQuantity = () => {
		if (this.state.quantity == '1') {
			return false;
		} else {
			this.props.reduceQuantity(this.props.item, this.state.quantity - 1);
			this.setState({
				quantity: parseInt(this.state.quantity) - 1
			})
			
		}
	}

	addQuantity = () => {
		this.props.addQuantity(this.props.item, this.state.quantity + 1);
		this.setState({
			quantity: parseInt(this.state.quantity) + 1
		})
		
	}

	componentDidMount = () => {
		this.props.cart.map(data => {
			if (data._id == this.props.item._id) {
				this.setState({quantity: data.quantity})
			}
		})
	}

	render() {
		const { item } = this.props;
		// const name = (this.props.item.user_id.name == 'null') ? 'Official Store Popedia' : this.props.item.user_id.name; 
	
		return (
			<Content>
				<Card style={styles.cardFull}>
					<View style={styles.topInfo}>
						<Text style={{flex:0.8}}>
							<Text style={{color:'#bdbdbd', fontSize:12}}>Penjual:</Text> <Text style={{fontSize:12}}>Official Store Popedia</Text>
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

					<CardItem style={{paddingTop:0}}>
						<Row>
							<Col style={{flex:0.8, alignItems:'flex-end'}}>
								<TouchableOpacity onPress={this.reduceQuantity}>
									<Text style={styles.removeQty}>
										<Icon name='remove' style={{fontSize:17, color:'#e0e0e0'}}/>
									</Text>
								</TouchableOpacity>
							</Col>
							
							<Col style={{flex:0.2}}>
								<Item style={{borderColor:'#1CC625', top:-20}}>
									<Input value={'' + this.state.quantity} style={{paddingBottom:0, fontSize:14, textAlign:'center'}} disabled />
								</Item>
							</Col>
							<TouchableOpacity onPress={this.addQuantity}>
								<Col style={{flex:0.1, alignItems:'flex-end'}}>
									<Text style={styles.addQty}>
										<Icon name='add' style={{fontSize:17, color:'#1CC625'}}/>
									</Text>
								</Col>
							</TouchableOpacity>
							
						</Row>
					</CardItem>

					<View style={styles.footerInfo}>
						<Text>
							<Text style={{color:'#bdbdbd', fontSize:12}}>Catatan untuk penjual (Opsional)</Text> <Text style={{fontSize:12, color:'#1CC625'}}>Tulis Catatan</Text>
						</Text>
						<Item style={{borderColor:'#1CC625', flex:1, width:'100%', top:-10}}>
							<Input value={''} style={{paddingBottom:0, fontSize:12}} />
						</Item>
					</View>
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
	cart: state.cart.cart,
    cartQuantity: state.cart.quantity
});

export default connect(mapStateToProps, {addQuantity, reduceQuantity})(CartItems);