import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Navigator from './config/routes';
import { AlertProvider } from './components/Alert';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $primaryGreen: '#00BD9D',
  $primaryPurple: '#9E768F',
  $primaryOrange: '#D57A66',

  $white: '#FFFFFF',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $lightGrey: '#F0F0F0',
  $darkText: '#343434',
  // $outline: 1,

})

export default () => <AlertProvider><Navigator /></AlertProvider>;
// export default () => <Navigator />;
