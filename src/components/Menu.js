import React, { Component } from 'react'
import { 
  View, 
  Image, 
  Text, 
  Dimensions, 
  StyleSheet, 
  ScrollView 
} from 'react-native'
import { Button } from 'native-base'

const styles = StyleSheet.create({
  featuredWrappper: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10
  },
  featuredMenu: {
    margin: 5,
    width: 54,
    height: 90,
    alignItems: 'center',
    flexDirection: 'column',
    marginVertical: 10
  },
  menuIcon: {
    width: 45,
    height: 45,
    marginBottom: 10
  },
  menuText: {
    fontSize: 11,
    textAlign: 'center'
  },
})



export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      featuredMenu: [
        {
          name: 'Semua Kategori',
          imageIcon: 'https://ecs7.tokopedia.net/img/cache/100-square/attachment/2019/4/1/3127195/3127195_c6ea0950-24f1-4a11-9900-c96fc166cc63.png'
        },
        {
          name: 'Sports',
          imageIcon: 'https://ecs7.tokopedia.net/img/cache/50-square/attachment/2019/1/9/20723472/20723472_0c7bb35f-2dc9-4883-9e17-acf0fdb21b80.png'
        },      
        {
          name: 'kitchen set',
          imageIcon: 'https://ecs7.tokopedia.net/img/cache/50-square/attachment/2019/1/9/20723472/20723472_36e0a99a-f8e7-45be-845a-69391d9a97a3.png'
        },
        {
          name: 'Travel & Entertainment',
          imageIcon: 'https://ecs7.tokopedia.net/img/cache/50-square/attachment/2019/1/9/20723472/20723472_ee66f583-11cb-4330-b00a-3a6966781a5e.png'
        },
        {
          name: 'Keuangan',
          imageIcon: 'https://ecs7.tokopedia.net/img/cache/50-square/attachment/2019/1/9/20723472/20723472_43f04b28-3f48-4c88-a84d-4cf2cc32e149.png'
        },      
        {
          name: 'Pulsa',
          imageIcon: 'https://ecs7.tokopedia.net/img/cache/50-square/attachment/2019/1/9/20723472/20723472_1d9cf415-ce56-4c59-a0a8-f48571f7dcb0.png'
        },
        {
          name: 'Tiket Kereta Api',
          imageIcon: 'https://ecs7.tokopedia.net/img/cache/50-square/attachment/2019/1/9/20723472/20723472_b37b299a-9ec5-4b63-b91c-f65e9d6fddc8.png'
        },      
        {
          name: 'Flight',
          imageIcon: 'https://ecs7.tokopedia.net/img/cache/50-square/attachment/2019/1/9/20723472/20723472_8cf3cc44-f4c9-4a17-849c-9dd7b7bb4689.png'
        },
        {
          name: 'Flight',
          imageIcon: 'https://ecs7.tokopedia.net/img/cache/50-square/attachment/2019/1/9/20723472/20723472_26602f8f-b349-4c20-ab44-44bee951034f.png'
        },
      ],
      categories: [],
      isLoading: true,
      errors: null
    };
  }

  render() {
    const { id, name, index } = this.props;

    return( 
      <View style={styles.featuredWrappper}>
      <Button
          transparent
          style={styles.featuredMenu}
        >
          <Image
              source={{uri: this.state.featuredMenu[index].imageIcon}}
              style={styles.menuIcon}
            />
          <Text numberOfLines={2} style={styles.menuText}>
            {name}
          </Text>
        </Button>

      
      </View>
    )
  }

}
