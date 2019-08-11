import React, { PureComponent } from 'react';
import { Text, TouchableOpacity, ViewStyle, TextStyle, StyleSheet } from 'react-native';
import Icon, { IconName } from '../Icon/Icon';

export type ButtonType = 'WithIcon' | 'PlainText';

interface ButtonProps {
  buttonType: ButtonType;
  text: string;
  textStyle?: TextStyle;
  onClick: () => void;

  iconName?: IconName
  style?: ViewStyle;
}

export class Button extends PureComponent<ButtonProps> {
  public render() {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.wrap, this.props.style]}
        onPress={this.props.onClick}
      >
        {(this.props.buttonType === 'WithIcon' && this.props.iconName) && 
          <Icon
            style={styles.icon}
            name={this.props.iconName}
          />
        }
        <Text style={[styles.text, this.props.textStyle]}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  text: {
    alignSelf: 'center', 
    color: '#5B5B5B'
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#DB3B74'
  }
})

export default Button;
