import React from 'react';
import Orientation from 'react-native-orientation';

const withOrientation = function (Component) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
    componentDidMount() {
      Orientation.addOrientationListener(this._updateOrientation);
      Orientation.addSpecificOrientationListener(this._updateSpecificOrientation);
    }

    componentWillUnmount() {
      Orientation.removeOrientationListener(this._updateOrientation);
      Orientation.removeSpecificOrientationListener(this._updateSpecificOrientation);
    }

    _updateOrientation = (orientation) => this.setState({ orientation });
    _updateSpecificOrientation = (specificOrientation) => this.setState({ specificOrientation });

    onSetLockToPortrait() {
      Orientation.lockToPortrait()
    }
    onSetLockToLandscape() {
      Orientation.lockToLandscape()
    }

    render() {
      return (
        <Component
          {...this.props}
          onSetLockToPortrait={() => this.onSetLockToPortrait()}
          onSetLockToLandscape={() => this.onSetLockToLandscape()}
        />
      );
    }
  }
};
export default withOrientation;
