import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
	container: {
        backgroundColor: '#2aaa4d',
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
});
export default styles;
