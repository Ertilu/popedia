import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";
import { View, Image, TouchableOpacity } from 'react-native'
import styles from './styles';

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
                    source={{ uri: 'https://media3.giphy.com/media/fikm2KlbCavX7sNQBu/source.gif' }}
                  />
                </View>
                <Text style={styles.text}>
                  Mohon maaf halaman ini sedang dalam pengembangan.
              </Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Home")}>
                  <Text style={styles.back} note>Klik disini untuk kembali ke halaman utama</Text>
                </TouchableOpacity>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}