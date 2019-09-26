import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Title } from 'native-base';

import styles from './style'

export default class CardShowcaseExample extends Component {
    render() {
        const { navigation } = this.props
        return (
            <Container>
                <Header style={{ backgroundColor: 'white' }}>
                    <Left>
                        <Button onPress={() => navigation.navigate("Profile")} transparent>
                            <Icon style={styles.textHeader} name='arrow-back' />
                            <Title style={{ color: 'gray', fontWeight: "600" }}>Kembali</Title>
                        </Button>
                    </Left>
                </Header>
                <Content>
                    <Card style={{ flex: 0 }}>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{ uri: 'https://ecs7.tokopedia.net/img/cache/100-square/attachment/2019/1/9/20723472/20723472_a42a010b-bd35-4279-8bea-84e7bb1bcfc0.png.webp' }} />
                                <Body>
                                    <Text>Example</Text>
                                    <Text note>my product</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Image source={{ uri: 'https://ecs7.tokopedia.net/img/cache/200-square/product-1/2018/10/7/8231236/8231236_3b81b8c6-616a-4ff0-9950-69e574a32571_1000_1000.jpg' }} style={{ height: 200, width: 200, flex: 1 }} />
                                <Text>
                                //Your text here
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent textStyle={{ color: '#87838B' }}>
                                    <Text>1,926 stars</Text>
                                </Button>
                            </Left>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}