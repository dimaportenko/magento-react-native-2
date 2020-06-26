/**
 * @flow
 * Created by Dima Portenko on 26.06.2020
 */
import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Colors } from 'react-native-ui-lib';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';

import type { ViewProps } from 'react-native/Libraries/Components/View/ViewPropTypes';

type CardProps = {
  ...ViewProps,
  onPress(): void,
}

const config = {
  duration: 100,
  easing: Easing.linear,
};

export const Card = ({ children, onPress, ...props }: CardProps) => {
  const isPressed = useSharedValue(false);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{
        scale: !isPressed.value ? withTiming(1, config) : withTiming(0.98, config),
      }],
    };
  });

  return (
    <TouchableWithoutFeedback
      containerStyle={styles.overflowVisible}
      onPressIn={() => { isPressed.value = true; }}
      onPressOut={() => { isPressed.value = false; }}
      onPress={onPress}
    >
      <Animated.View style={[animatedStyles]}>
        <View {...props} style={[styles.containerShadow, props.style]}>
          {children}
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  overflowVisible: {
    overflow: 'visible',
  },
  containerShadow: {
    overflow: 'visible',
    shadowColor: Colors.dark40,
    shadowOpacity: 0.55,
    shadowRadius: 5,
    shadowOffset: { height: 3, width: 0 },
  },
});
