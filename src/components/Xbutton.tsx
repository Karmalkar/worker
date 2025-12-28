import React from 'react';
import {
  Pressable,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  PressableStateCallbackType,
  View,
} from 'react-native';

type XButtonProps = {
  title: string;
  onPress: () => void;

  width?: number | string;
  height?: number;
  disabled?: boolean;

  backgroundColor?: string;
  textColor?: string;
  borderRadius?: number;

  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  EndIcon?: React.ReactNode;
};

const XButton: React.FC<XButtonProps> = ({
  title,
  onPress,
  width = '100%',
  height = 48,
  disabled = false,
  backgroundColor = '#2563EB',
  textColor = '#FFFFFF',
  borderRadius = 8,
  style,
  textStyle,
  EndIcon,
}) => {
  const pressableStyle = (
    state: PressableStateCallbackType
  ): StyleProp<ViewStyle> => [
    styles.button,
    {
      width: typeof width === 'string' ? width : width,
      height,
      backgroundColor: disabled ? '#9CA3AF' : backgroundColor,
      borderRadius,
      opacity: state.pressed && !disabled ? 0.8 : 1,
    } as ViewStyle,
    style,
  ];

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={pressableStyle}
    >
      <View style={styles.container}>
        {/* Centered text */}
        <Text
          numberOfLines={1}
          style={[
            styles.text,
            styles.centerText,
            { color: textColor },
            textStyle,
          ]}
        >
          {title}
        </Text>

        {/* Right icon */}
        {EndIcon && (
          <View style={styles.endIcon}>
            {EndIcon}
          </View>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  centerText: {
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
  },
  endIcon: {
    alignSelf: 'flex-end',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default XButton;
