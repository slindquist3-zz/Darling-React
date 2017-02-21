import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { deleteProduct } from '../actions/deleteProduct'



class CartProduct extends Component {

  render(){

    return(
      <div>
        <p className="productProps"><strong>{this.props.keyword}</strong></p>
        <img className="imageCenter productProps" src={this.props.image_url} />
        <p className="productProps"><strong>${this.props.price}</strong></p>
        <p className="productPropsBottom">
          <a onClick={this.deleteFromCart.bind(this)}
          className="customButton waves-effect waves-light btn">Delete</a>
        </p>
      </div>

    )
  }

  deleteFromCart(event) {
    event.preventDefault()
    this.props.deleteProduct(this.props.cart, this.props.id)
  }
}

function mapStateToProps({cart}) {
  return {cart};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( {deleteProduct}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CartProduct)
