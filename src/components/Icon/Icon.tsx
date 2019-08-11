import React, { PureComponent } from 'react';
import { Image, ImageStyle } from 'react-native';

export type IconName = 'cocktail' | 'search';

interface IconProps {
  name: IconName;
  style?: ImageStyle;
}

export class Icon extends PureComponent<IconProps> {
  public render() {
    let source = this.resourceForIconName(this.props.name)

    return (
      <Image
        style={this.props.style}
        source={source}
      />
    )
  }

  private resourceForIconName = (name: IconName) => {
    if (name === 'cocktail') {
      return require('./assets/cocktail.png');  
    } else if (name === 'search') {
      return require('./assets/search.png');  
    }

    return require('./assets/cocktail.png');
  }
}

export default Icon;
