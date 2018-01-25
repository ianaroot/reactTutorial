import { Dimensions } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width

export default EStyleSheet.create({
  container: {
    alignItems: 'center'
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: imageWidth / 2,
    height: imageWidth / 2
  },
  image: {
    width: (imageWidth / 4),
  },
  text: {
    fontWeight: '600',
    fontSize: 28,
    letterSpacing: -0.5,
    marginTop: 15,
    color: '$white',
  }
});
