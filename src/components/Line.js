import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import styles from './styles/LineStyles'
import Hr from './Hr'
import { Colors, Metrics } from '../themes'

export default class App extends Component {
  render() {
    const { dotLineCenter } = this.props
    return (
      <View style={[styles.containerLine, this.props.containerStyle]}>
        <Hr lineHeight={1}
          marginLeft={Metrics.smallMargin}
          marginRight={Metrics.smallMargin}
          lineColor={Colors.divider}
          marginTop={Metrics.baseMargin}
          marginBottom={Metrics.baseMargin} />
        <View style={[dotLineCenter ? styles.dotLineCenter : styles.dotLineStart, this.props.styleDot]} />
      </View>
    )
  }
}