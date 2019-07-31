import Colors from './Colors'

const type = {
  base: 'Roboto',
  bold: 'Roboto',
  italic: 'PlayfairDisplay-Italic',
  emphasis: 'HelveticaNeue-Italic',
  robotoBlack: 'Roboto-Black',
  robotoBlackItalic: 'Roboto-BlackItalic',
  robotoBold: 'Roboto-Bold',
  robotoBoldItalic: 'Roboto-BoldItalic',
  robotoItalic: 'Roboto-Italic',
  robotoLight: 'Roboto-Light',
  robotoLightItalic: 'Roboto-LightItalic',
  robotoMedium: 'Roboto-Medium',
  robotoMediumItalic: 'Roboto-MediumItalic',
  robotoRegular: 'Roboto-Regular',
  robotoThin: 'Roboto-Thin',
  robotoThinItalic: 'Roboto-ThinItalic',
  robotoCondensedBold: 'RobotoCondensed-Bold',
  robotoCondensedBoldItalic: 'RobotoCondensed-BoldItalic',
  robotoCondensedItalic: 'RobotoCondensed-Italic',
  robotoCondensedLight: 'RobotoCondensed-Light',
  robotoCondensedLightItalic: 'RobotoCondensed-LightItalic',
  robotoCondensedRegular: 'RobotoCondensed-Regular',
}

const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 20,
  h6: 19,
  input: 18,
  regular: 17,
  sixteen: 16,
  medium: 14,
  small: 12,
  tiny: 8.5
}

const style = {
  h1: {
    fontFamily: type.base,
    fontSize: size.h1,
    color: Colors.snow,
    backgroundColor: Colors.transparent
  },
  h2: {
    fontFamily: type.base,
    fontSize: size.h2,
    color: Colors.snow,
    backgroundColor: Colors.transparent
  },
  h3: {
    fontFamily: type.base,
    fontSize: size.h3,
    color: Colors.snow,
    backgroundColor: Colors.transparent
  },
  h4: {
    fontFamily: type.base,
    fontSize: size.h4,
    color: Colors.snow,
    backgroundColor: Colors.transparent
  },
  h5: {
    fontFamily: type.base,
    fontSize: size.h5,
    color: Colors.snow,
    backgroundColor: Colors.transparent
  },
  h6: {
    fontFamily: type.base,
    fontSize: size.h6,
    color: Colors.snow,
    backgroundColor: Colors.transparent
  },
  normal: {
    fontFamily: type.base,
    fontSize: size.regular,
    color: Colors.snow,
    backgroundColor: Colors.transparent
  },
  input: {
    fontFamily: type.base,
    fontSize: size.regular,
    color: Colors.snow,
    backgroundColor: Colors.transparent
  },
  bold: {
    fontFamily: type.bold,
    fontSize: size.regular,
    color: Colors.snow,
    backgroundColor: Colors.transparent,
    fontWeight: 'bold'
  },
  description: {
    fontFamily: type.base,
    fontSize: size.medium,
    color: Colors.snow,
    backgroundColor: Colors.transparent
  }
}

export default {
  type,
  size,
  style
}
