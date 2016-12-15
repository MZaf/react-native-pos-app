'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as orderActions from '../../actions/orderActions'


class DeliveryDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  selectOrder(order) {
    this.props.selectOrder(order)
  }

  getDeliveryBorder(){
    if (this.props.order.orderNumber === this.props.orderDelivery.orderNumber)
      return 4
    else return 0
  }

  getDeliveryColor(){
    if (this.props.order.orderNumber === this.props.orderDelivery.orderNumber)
      return "blue"
    else return "grey"
  }

  render () {
    return (
      <TouchableOpacity onPress={() => {this.selectOrder(this.props.orderDelivery) }}>
        <View style={styles.deliveryDetailsContainer}>
          <View style={styles.deliveryDetails} borderWidth={this.getDeliveryBorder()}>
            <Text>{this.props.deliveryInfo.deliveryAddress}</Text>
            <Text>{this.props.deliveryInfo.deliveryPhoneNumber}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(orderActions, dispatch)
}

function mapStateToProps(state) {
  return {
    order: state.order
  }
}

const HEIGHT = 70

const styles = StyleSheet.create({
  deliveryDetails: {
    height: HEIGHT,
    width: 2*HEIGHT,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    backgroundColor: "grey"
  },
  deliveryDetailsContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 10
  }
})

module.exports = connect(mapStateToProps, mapDispatchToProps)(DeliveryDetails)
