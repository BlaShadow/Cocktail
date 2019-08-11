import React, { PureComponent, Component } from 'react';
import { Text, View, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { NavigationScreenProp } from 'react-navigation';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import Strings from '../../resouces/Strings';

interface HomeScreenProps {
  navigation: NavigationScreenProp<any>;
}

export class HomeScreen extends PureComponent<HomeScreenProps> {
  public static navigationOptions = () => {
    return {
      header: () => undefined
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
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.buttonContainer}>
            <Icon style={styles.icon} name={'cocktail'} />

            <View style={styles.textContainer}>
              <Text style={styles.boldText}>Clocktail</Text>
              <Text style={styles.text}>Finder</Text>
            </View>

            <Button
              buttonType={'WithIcon'}
              iconName={'search'}
              style={styles.button}
              text={Strings.ButtonHomeScreen}
              onClick={this.searchButtonClick}
            />
          </View>
        </SafeAreaView>      
    </LinearGradient>
    );
  }

  private searchButtonClick = () => {
    this.props.navigation.navigate('cocktailList');
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    color: 'white'
  },
  boldText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 25
  },
  textContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10
  },
  button: {
    margin: 10,
    marginTop: 40,
    padding: 10,
    width: 300,
    borderRadius: 5,
    backgroundColor: '#F8F8F8',
  },
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    height: 300,
    alignItems: 'center',
    alignContent: 'center'
  },
  icon: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    marginTop: 15
  }
});

export default HomeScreen
