'use strict'
import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ListView } from 'react-native'
import { connect } from 'react-redux'

import MenuListFood from './MenuListFood'
import MenuActionsItem from './MenuActionsItem'

class MenuTab3 extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <View style={styles.menu}>
        <View style={styles.subMenu}>
          <MenuListFood menuList={this.props.menu.snacks} maxItems={1} />
        </View>
        <MenuActionsItem />
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    menu: state.menu
  }
}

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    backgroundColor: "teal",
    paddingTop: 50
  },
  subMenu: {
    flex: 20,
  }
})

module.exports = connect(mapStateToProps)(MenuTab3)
