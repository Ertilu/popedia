import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";
import { View, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'

export default class Maintenance extends Component {
  render() {
    return (
      <Container>
        <Header style={styles.container} androidStatusBarColor={'#2aaa4d'} />
        <Content padder>
          <Card transparent>
            <CardItem>
              <Body>
                <View style={styles.imageContainer}>
                  <Image
                    style={styles.image}
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx5mohd6aeOhZG6rQZIk8pi7dIi9bcML_d0329pn6TiPp8tvvu' }}
                  />
                </View>
                <Text style={styles.text}>
                  Terimakasih telah berbelanja di Popedia, pesanan anda sedang diproses. Silahkan tunggu 2-3 hari sampai pesanan anda telah tiba.
              </Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Home")}>
                  <Text style={styles.back} note>Klik disini untuk lanjut berbelanja</Text>
                </TouchableOpacity>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

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
		marginLeft: 50,
	},
});