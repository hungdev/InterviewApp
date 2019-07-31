import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { connect } from 'react-redux'

class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync() {
    // const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    // console.log('userToken', this.props.userToken)
    // const { userToken } = this.props
    // this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    // this.props.navigation.navigate('Auth');
  };

  componentDidMount() {
    const { userToken } = this.props
    console.log('userToken', userToken)
    //xoxp-511552055732-511615180211-511618780867-8f4fd08a237bbce670375bb6dba181bd
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  }

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function mapStateToProps(state) {
  return {
    userToken: state.auth.userToken,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // getInfoFilm: (movie) => dispatch(getInfoFilm(movie)),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen)
