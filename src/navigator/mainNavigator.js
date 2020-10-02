import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps122232Navigator from '../features/Maps122232/navigator';
import Add-Item122231Navigator from '../features/Add-Item122231/navigator';
import Maps122227Navigator from '../features/Maps122227/navigator';
import UserProfile122223Navigator from '../features/UserProfile122223/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps122232: { screen: Maps122232Navigator },
Add-Item122231: { screen: Add-Item122231Navigator },
Maps122227: { screen: Maps122227Navigator },
UserProfile122223: { screen: UserProfile122223Navigator },

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
