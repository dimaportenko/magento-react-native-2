/**
 * @noflow
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import { URL, URLSearchParams } from 'whatwg-url';
import { Buffer } from 'buffer';

// react-native 0.59 added its own global URLSearchParams without implementation...
// https://github.com/facebook/react-native/blob/e6057095adfdc77ccbbff1c97b1e86b06dae340b/Libraries/Blob/URL.js#L66
// Issue: https://github.com/facebook/react-native/issues/23922
global.Buffer = Buffer;
global.URL = URL;
global.URLSearchParams = URLSearchParams;


AppRegistry.registerComponent(appName, () => App);
