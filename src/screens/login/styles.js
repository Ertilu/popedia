import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
	},
	header: {
		backgroundColor: 'white'
	},
	textHeader: {
		color: 'gray',
		fontWeight: "600"
	},
	content: {
		padding: 17
	},
	loginOption: {
		textAlign: 'center',
		color: '#2aaa4d',
		fontSize: 13,
		marginTop: 15,
		marginBottom: 15
	},
	forgotPassword: {
		textAlign: 'right',
		color: 'green',
		fontSize: 12,
		marginTop: 15,
		marginBottom: 15
	},
	buttonOption: {
		borderColor: 'lightgray',
		justifyContent: 'flex-start',
		borderRadius: 5,
		marginBottom: 6,
		marginTop: 6
	},
	iconMedia: {
		color: 'gray',
		marginRight: 70,
		marginLeft: 20
	},
	textMedia: {
		color: 'gray',
		fontWeight: '600'
	}
});
export default styles;
