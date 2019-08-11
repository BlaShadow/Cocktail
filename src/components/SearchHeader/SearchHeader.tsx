import React, {PureComponent} from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from '../Icon';
import { TextInput } from 'react-native-gesture-handler';

interface SearchHeaderProps {
  searchText: string;
  onTextChange: (text: string) => void;
  onFocusChange: (value: boolean) => () => void;
}

class SearchHeader extends PureComponent<SearchHeaderProps> {
  public render() {
    return (
      <View style={styles.wrap}>
        <View style={styles.textInputContainer}>
          <Icon name={'search'} style={styles.icon} />
          <TextInput
            placeholder={'Cocktail name'}
            style={{flex: 1}}
            autoCompleteType={'off'}
            value={this.props.searchText}
            onChangeText={this.props.onTextChange}
            placeholderTextColor={'#858585'}
            onBlur={this.props.onFocusChange(false)}
            onFocus={this.props.onFocusChange(true)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
  icon: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  textInputContainer: {
    backgroundColor: '#E9E9E9',
    borderRadius: 10,
    margin: 5,
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignContent: 'center'
  },
})

export default SearchHeader;
