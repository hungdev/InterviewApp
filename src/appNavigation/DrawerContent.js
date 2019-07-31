import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { logout } from '../actions/authAction'
import { ScrollView, Text, View, Image, TouchableOpacity, Platform, Alert } from 'react-native';
import styles from './styles/DrawerContentStyles'
import { NavigationActions } from 'react-navigation';
import { Images, Colors } from '../themes'
import Ionicons from 'react-native-vector-icons/Ionicons'

class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  onNavigate(screen) {
    this.props.navigation.navigate(screen)
    this.props.navigation.closeDrawer()
  }

  onPressLogout() {
    this.props.logout()
    this.props.navigation.navigate('Auth');
  }
  onLogout() {
    Alert.alert(
      'Thím muốn thoát à?',
      'Chắc chưa thím?',
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: () => this.onPressLogout() },
      ],
      { cancelable: false }
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.warpAvatar}>
            <Image source={Images.explodingKittens} style={styles.avatar} />
            <Text style={styles.txtHi}>Hi Lazy Man!</Text>
          </View>
          <View style={styles.warpContent}>
            <TouchableOpacity onPress={() => this.onNavigate('Home')} style={styles.warpButton}>
              <Ionicons name="ios-home" size={30} style={styles.iconItem} />
              <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onNavigate('LateSetting')} style={styles.warpButton}>
              <Ionicons name="ios-settings" size={30} style={styles.iconItem} />
              <Text>Late Setting</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onNavigate('RemoteSetting')} style={styles.warpButton}>
              <Ionicons name="ios-send" size={30} style={styles.iconItem} />
              <Text>Remote Setting</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onNavigate('About')} style={styles.warpButton}>
              <Ionicons name="ios-bug" size={30} style={styles.iconItem} />
              <Text>About</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onLogout()} style={styles.warpButton}>
              <Ionicons name="ios-log-out" size={30} style={styles.iconItem} />
              <Text>Log out</Text>
            </TouchableOpacity>

          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          {/* <Text>This is my fixed footer</Text> */}
        </View>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

function mapStateToProps(state) {
  return {
    // isFetching: state.film.isFetching,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logout()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu)