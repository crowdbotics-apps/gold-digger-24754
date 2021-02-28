import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList209945Navigator from '../features/ArticleList209945/navigator';
import ArticleList209944Navigator from '../features/ArticleList209944/navigator';
import ArticleList209943Navigator from '../features/ArticleList209943/navigator';
import ArticleList209926Navigator from '../features/ArticleList209926/navigator';
import ArticleList209925Navigator from '../features/ArticleList209925/navigator';
import ArticleList209924Navigator from '../features/ArticleList209924/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList209945: { screen: ArticleList209945Navigator },
ArticleList209944: { screen: ArticleList209944Navigator },
ArticleList209943: { screen: ArticleList209943Navigator },
ArticleList209926: { screen: ArticleList209926Navigator },
ArticleList209925: { screen: ArticleList209925Navigator },
ArticleList209924: { screen: ArticleList209924Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
