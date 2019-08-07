import React from 'react';
import { Button, Image, Platform, View, Text } from 'react-native';


class HeaderTimer extends React.Component {
  render() {
    const { time, runningOutOfTime } = this.props;
    return (
      <View>
        <Text style={{ color: runningOutOfTime ? 'red' : 'black', fontSize: runningOutOfTime ? 30 : 20 }}>{time}</Text>
      </View>
    );
  }
}
export default HeaderTimer;