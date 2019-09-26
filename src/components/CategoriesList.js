import React, { Component } from 'react';
import {
    Text,
    View,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    Image
} from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import axios from 'axios'
// import { getCategories } from '../Services/Axios/categories';
// import SimpleHeader from '../Components/Navigation/SimpleHeader';

class Category extends Component {

    // constructor(props) {
    //     super(props);
    //     // this.limitSearch = _.debounce(this.searchData, 800);
    //     this.state = {
    //         title: '',
    //         search: '',
    //         text: ''
    //     };
    // }

    state = {
        categories: [],
      };
      async componentDidMount() {
        await axios
          .get(
            `http://192.168.43.134:8080/categories`
          )
          .then(res =>
            this.setState({
              categories: res.data.data
            })
          );
        console.log(this.state);
      }
    // getCategoriesApi() {
    //     this.props.dispatch(getCategories());
    // }

    // componentDidMount() {
    //     this.getCategoriesApi();
    // }

    // getData() {
    //     let category = this.props.categories.data || [];
    //     return category;
    // }

    render() {
        return (
            <View>
                {/* <SimpleHeader navigation={this.props.navigation} title='Pilih Kategori' /> */}
                <View style={styles.searchBar}>
                    <View style={styles.searchInput}>
                        <TextInput
                            placeholder={'Cari kateogri barang...'}
                            // onChangeText={(search) => this.limitSearch(search)}
                            value={this.state.text} />
                    </View>
                </View>
                <Text>{this.state.categories.name}</Text>
                <View style={{flexDirection: 'row'}}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        numColumns={3}
                        // style={{flexDirection: 'row'}}
                        data={this.state.categories}
                        renderItem={({ item }) =>
                            <View backgroundColor='#fff' style={{flex: 1}}>
                                <View style={styles.parent}>
                                    <Image source={{uri: item.imageUrl}} style={{height: 75, width: 75, margin: 5}}/>
                                    <Text style={styles.text}>{item.name}</Text>
                                </View>
                                {/* {item.children.map((child) => 
                                    <TouchableOpacity style={styles.child}>
                                        <Text style={styles.text}>{child.name}</Text> 
                                    </TouchableOpacity>
                                )} */}
                            </View>
                        }
                        keyExtractor={({id}) => id}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    parent: {
        backgroundColor: '#F1F1F1',
        margin: 9,
        width: 100,
        alignItems: 'center'
        // height: 30
        // flexDirection: 'row'
    },
    child: {
        paddingTop: 15,
        paddingBottom: 15,
        marginLeft: 25,
        paddingRight: 25,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#f1f1f1',
    },
    text: {
        fontSize: 13,
        color: '#000',
        margin: 7
    },
    searchBar: {
        backgroundColor: '#fff',
        paddingLeft: 25,
        paddingRight: 25,
        padding: 15,
        zIndex: 2,
    },
    searchInput: {
        backgroundColor: '#f1f1f1',
        borderRadius: 3,
        height: 40,
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    }
});

// const mapsStageToProps = (state) => {
//     return {
//         categories: state.categories
//     }
// };

export default Category;