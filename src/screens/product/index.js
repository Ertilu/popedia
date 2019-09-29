// @flow
import * as React from "react";
import { connect } from "react-redux";
import Product from "./Product";
import { addToCart } from '../../redux/actions/cartActions';

const mapStateToProps = (state) => ({
    
})

export default connect(mapStateToProps)(Product);