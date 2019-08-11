import React, { PureComponent } from 'react';
import { Text, StatusBar, SafeAreaView, View, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import {
  NavigationScreenProp,
  NavigationScreenOptions,
  HeaderBackButton,
  FlatList
} from 'react-navigation';

import { RootStore } from '../../store/';
import { setSearchIsWriting, setCurrentCriteriaAction } from '../../store/search/action';
import SearchHeaderContainer from '../..//containers/SearchHeaderContainer/';
import CancelHeaderButtonContainer from '../../containers/CancelHeaderButtonContainer';
import { Drink } from '../../services/CocktailApiClient';

interface CocktailListScreenProps {
  navigation: NavigationScreenProp<any>;
  isWriting: boolean;
  isSearching: boolean;
  currentSearchCriteria: string;
  cocktails: Drink[];
}

type NavigationOptionParamType = {
  navigation: NavigationScreenProp<any>,
  screenProps: CocktailListScreenProps & typeof dispatchProps
}

export class CocktailListScreen extends PureComponent<CocktailListScreenProps & typeof dispatchProps> {
  public static navigationOptions = ({ navigation, screenProps }: NavigationOptionParamType): NavigationScreenOptions => {
    return {
      headerTintColor: '#333',
      headerTitle: <SearchHeaderContainer />,
      headerLeft: <HeaderBackButton tintColor={'#000000'} title={''} onPress={() => {
        navigation.popToTop();
      }} />,
      headerRight: <CancelHeaderButtonContainer />
    };
  }

  public render() {
    return (
      <LinearGradient
        style={{flex: 1}}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}
        colors={['#E03E3C', '#C72190']}
      >
        <StatusBar barStyle={'light-content'} />
        <SafeAreaView style={styles.safeAreaStyle}>
          <FlatList
            style={styles.flatlist}
            keyExtractor={this.keyExtractor}
            data={this.props.cocktails}
            renderItem={this.renderItem}
          />
        </SafeAreaView>
      </LinearGradient>
    );
  }

  private keyExtractor = (_: Drink, index: number) => {
    return `${index}`;
  }

  private renderItem = ({item}:{item: Drink}) => {
    return (
      <View style={styles.listItemStyle}>
        <Image style={styles.listItemImage} source={{uri: item.strDrinkThumb}} />
        <Text style={styles.listItemTitle}>{item.strDrink}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flatlist: {
    flex: 1,
    alignSelf: 'stretch',
    marginHorizontal: 10
  },
  safeAreaStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  listItemStyle: {
    width: '100%',
    height: 100,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  listItemImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginHorizontal: 15
  },
  listItemTitle: {
    fontSize: 20
  }
})

const stateToProps = (store: RootStore) => {
  const {Search, Cocktail} = store;
  const {isWriting, currentSearchCriteria, isSearching} = Search;

  return {
    cocktails: Cocktail.list,
    isWriting,
    currentSearchCriteria,
    isSearching
  }
}

const dispatchProps = {
  setSearchIsWriting,
  setCurrentCriteriaAction,
}

export default connect(stateToProps, dispatchProps)(CocktailListScreen)
