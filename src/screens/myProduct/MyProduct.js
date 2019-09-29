// import React, { Component } from 'react';
// import { Image } from 'react-native';
// import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Title } from 'native-base';

// import styles from './style'

// export default class CardShowcaseExample extends Component {
//     render() {
//         const { navigation } = this.props
//         return (
//             <Container>
//                 <Header style={{ backgroundColor: 'white' }}>
//                     <Left>
//                         <Button onPress={() => navigation.navigate("Profile")} transparent>
//                             <Icon style={styles.textHeader} name='arrow-back' />
//                             <Title style={{ color: 'gray', fontWeight: "600" }}>Kembali</Title>
//                         </Button>
//                     </Left>
//                 </Header>
//                 <Content>
//                     <Card style={{ flex: 0 }}>
//                         <CardItem>
//                             <Left>
//                                 <Thumbnail source={{ uri: 'https://ecs7.tokopedia.net/img/cache/100-square/attachment/2019/1/9/20723472/20723472_a42a010b-bd35-4279-8bea-84e7bb1bcfc0.png.webp' }} />
//                                 <Body>
//                                     <Text>Example</Text>
//                                     <Text note>my product</Text>
//                                 </Body>
//                             </Left>
//                         </CardItem>
//                         <CardItem>
//                             <Body>
//                                 <Image source={{ uri: 'https://ecs7.tokopedia.net/img/cache/200-square/product-1/2018/10/7/8231236/8231236_3b81b8c6-616a-4ff0-9950-69e574a32571_1000_1000.jpg' }} style={{ height: 200, width: 200, flex: 1 }} />
//                                 <Text>
//                                 //Your text here
//                                 </Text>
//                             </Body>
//                         </CardItem>
//                         <CardItem>
//                             <Left>
//                                 <Button transparent textStyle={{ color: '#87838B' }}>
//                                     <Text>1,926 stars</Text>
//                                 </Button>
//                             </Left>
//                         </CardItem>
//                     </Card>
//                 </Content>
//             </Container>
//         );
//     }
// }

import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Icon, Title, View, Card, CardItem } from 'native-base';
import Modal from "react-native-modal";

export default class ListThumbnailExample extends Component {

    state = {
        isModalVisible: false
    };

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };

    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: 'white' }}>
                    <Left >
                        <Button transparent >
                            <Icon style={{ color: 'gray' }} name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{ color: 'gray' }}>Daftar produk</Title>
                    </Body>
                    <Right>
                        <Button transparent >
                            <Icon style={{ color: 'gray' }} name='heart' />
                        </Button>
                    </Right>
                </Header>

                <Content>
                    <List>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={{ uri: 'https://ecs7.tokopedia.net/img/cache/200-square/product-1/2018/10/7/8231236/8231236_3b81b8c6-616a-4ff0-9950-69e574a32571_1000_1000.jpg' }} />
                            </Left>
                            <Body>
                                <Text>Baju</Text>
                                <Text warning>Rp. 500.000,-</Text>
                            </Body>
                            <Right>
                                <Button transparent>
                                    <Icon name='more' />
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={{ uri: 'https://ecs7.tokopedia.net/img/cache/200-square/product-1/2018/10/7/8231236/8231236_3b81b8c6-616a-4ff0-9950-69e574a32571_1000_1000.jpg' }} />
                            </Left>
                            <Body>
                                <Text>Baju</Text>
                                <Text note style={{ color: 'orange' }}>Rp. 500.000,-</Text>
                            </Body>
                            <Right>
                                <View>
                                    <Button transparent onPress={this.toggleModal}>
                                        <Icon name='more' />
                                    </Button>
                                    <Modal isVisible={this.state.isModalVisible}>
                                        <View style={{ flex: 1 }}>
                                            <Card>
                                                <CardItem>
                                                    <Icon active name="plus" />
                                                    <Text>Delete</Text>
                                                </CardItem>
                                            </Card>
                                            <Button title="Tutup" onPress={this.toggleModal} />
                                        </View>
                                    </Modal>
                                </View>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}