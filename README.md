# Cocktail

This is a demo application using React native `0.59.9` and `Typescript` for the Cocktail public API.
https://www.thecocktaildb.com/api.php

List of libs
======
- React navigation
- Redux
- Redux-thunk
- React-Native-Linear-Gradient
- Axios

Run this application
======
In order to run this application there are two ways of archive this for any platform:

**Android**
- Simple open your terminal and go to your project folder and run `react-native run-android`
- Open Android studio and open the `android` project inside the project folder and click `run`

**iOS**
- Simple open your terminal and go to your project folder and run `react-native run-android`
- Open xCode and open the `iOS` project inside the project folder click `run` 


Improve List performance
=====

This is a list of tips that you could use if you find your list too bugy or consuming a bigger amount of memory.

- Ensure you're using a `FlatList` and not a `scroll-view`
- Use `PureComponent` for every item inside your list
- Keep your component simple
- Your can reduce the number of items in maxToRenderPerBatch and avoid rendering a lot of componentes at one (Some complex components)
- Cache your images fetched, this option will reduce the amount of work

