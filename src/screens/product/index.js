// @flow
import * as React from "react";
import { connect } from "react-redux";
import Product from "./Product";
import { addToCart } from '../../redux/actions/cartActions';
import { fetchProducts } from '../../redux/actions/productAction';



const mapStateToProps = state => ({
  lang: state.lang
});
export default connect(mapStateToProps, bindAction)(Product);
