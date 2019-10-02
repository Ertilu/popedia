import React, { Component } from 'react';
import { Image, AsyncStorage } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title } from 'native-base';
import { NavigationEvents } from 'react-navigation'

import styles from './style'

export default class CardImageExample extends Component {
    state = {
        name: 'Account'
    }

    getName = () => {
        AsyncStorage.getItem('name')
            .then(value => {
                this.setState({ name: value })
            })
    }

    exit = () => {
        AsyncStorage.clear()
        this.props.navigation.navigate("Login")
    }

    render() {
        const { navigation } = this.props
        return (
            <Container>
                <NavigationEvents
                    onDidFocus={() => this.getName()}
                />
                <Header style={{ backgroundColor: 'white' }}>
                    <Left>
                        <Button onPress={() => navigation.navigate("Home")} transparent>
                            <Icon style={styles.textHeader} name='arrow-back' />
                            <Title style={{ color: 'gray', fontWeight: "600" }}>   Kembali</Title>
                        </Button>
                    </Left>
                    <Right>
                        <Body>
                            <Title style={{ color: 'gray', fontWeight: "400" }} onPress={() => this.exit()}>                         Keluar</Title>
                        </Body>
                    </Right>
                </Header>
                <Content>
                    <Card style={{ height: 130, width: '100%', flex: 1, borderRadius: 2, marginBottom: 10, marginTop: 10, marginHorizontal: 17 }}>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{ uri: 'https://ecs7.tokopedia.net/img/cache/100-square/attachment/2019/1/9/20723472/20723472_a42a010b-bd35-4279-8bea-84e7bb1bcfc0.png.webp' }} />
                                <Body>
                                    <Text>{this.state.name}</Text>
                                    <Text note>Verify</Text>
                                </Body>
                            </Left>
                            {/* <Right>
                                <Button bordered success onPress={() => navigation.navigate("AddProduct")}><Text note style={{ fontSize: 10, color: '#2aaa4d' }}>Tambah produk</Text></Button>
                            </Right> */}
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Text note>0 Point</Text>
                            </Left>
                            <Right>
                                <Text note>4 Kupon</Text>
                            </Right>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem header>
                            <Text>Tokopedia Pay</Text>
                        </CardItem>
                        <CardItem>
                            <Thumbnail source={{ uri: 'https://ecs7.tokopedia.net/img/cache/50-square/attachment/2019/1/9/20723472/20723472_f2d81179-0b1c-4db8-8b94-3168b3e6b0eb.png' }} />
                            <Thumbnail source={{ uri: 'https://ecs7.tokopedia.net/img/cache/50-square/attachment/2019/1/9/20723472/20723472_ca2515e8-44ef-4f21-b7cc-fadf3120bd24.png' }} />
                        </CardItem>
                        <CardItem footer>
                            <Text note>Lihat semua</Text>
                        </CardItem>
                    </Card>
                    <CardItem>
                        <Body>
                            <Text onPress={() => navigation.navigate("MyProduct")}>Product saya</Text>
                            <Text note>Lihat semua produk saya</Text>
                        </Body>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text onPress={() => navigation.navigate("History")}>Riwayat pembayaran </Text>
                            <Text note onPress={() => navigation.navigate("History")}>Semua transaksi yang belum terbayar</Text>
                        </Body>
                        <Right>
                            <Icon name="arrow-forward" onPress={() => navigation.navigate("History")} />
                        </Right>
                    </CardItem>

                    <CardItem>
                        <Body>
                            <Text>Komplain</Text>
                            <Text note>Atur topik favorit anda</Text>
                        </Body>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </CardItem>

                    <CardItem>
                        <Body>
                            <Text>Terakhir dilihat</Text>
                            <Text note>Atur topik favorit anda</Text>
                        </Body>
                        <Right>
                            <Icon name="arrow-forward" />
                        </Right>
                    </CardItem>

                </Content>
            </Container>
        );
    }
}