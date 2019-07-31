
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Platform, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../themes'

export default class ACIndicator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <ActivityIndicator
        size={this.props.size}
        color={this.props.color}
        style={styles.spinnerStyle} />
    )
  }
}

const styles = StyleSheet.create({
  spinnerStyle: {
    zIndex: 999,
    position: 'absolute',
    top: '50%',
    left: '47%'
  }
})

ACIndicator.defaultProps = {
  size: 'large',
  color: Colors.spinner

}

ACIndicator.propTypes = {
}