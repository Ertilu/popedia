import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
	container: {
        backgroundColor: '#2aaa4d',
	},
	card: {
		marginTop: -10,
		zIndex: -99,
	},
	coupon: {
		
	},
	row: {
		flex: 1,
		alignItems: "center",
	},
	text: {
		fontSize: 20,
		textAlign: "center",
	},
	mt: {
		marginTop: 18,
	},
	circle: {
		backgroundColor: '#2aaa4d',
		position: 'absolute',
		height: 80,
		width: Dimensions.get('window').width + 80,
		top: 0,
		left: -40,
		borderBottomLeftRadius: 80,
		borderBottomRightRadius: 80
	},
	imageContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
		marginHorizontal: '20%',
		marginTop: 100,
	},
	image: {
		width: 200,
		height: 200,
	},
	back: {
		marginTop: 100,
	},
	wrapper: {
		backgroundColor: 'white',
		flex: 1,
		justifyContent: 'space-around',
		alignItems: 'center',
		flexDirection: 'row',
	  },
	  text: {
		fontSize: 12,
		color: 'gray'
	  },
	  menuIcon: {
		height: 20,
		width: 20
	  },
	  button: {
		width: 70,
		flexDirection: 'column',
		alignItems: 'center',
	  },
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
	alternativeLayoutButtonContainer: {
		margin: 20,
		flexDirection: 'row',
		justifyContent: 'space-between'
	
	},
	leftAddress: {
		color: 'green',
		borderWidth: 1,
		borderLeftColor: 'green'
	}
});
export default styles;
