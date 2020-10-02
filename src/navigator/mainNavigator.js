import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps122330Navigator from '../features/Maps122330/navigator';
import Add-Item122329Navigator from '../features/Add-Item122329/navigator';
import Maps122325Navigator from '../features/Maps122325/navigator';
import UserProfile122321Navigator from '../features/UserProfile122321/navigator';
import Maps122281Navigator from '../features/Maps122281/navigator';
import Add-Item122280Navigator from '../features/Add-Item122280/navigator';
import Maps122276Navigator from '../features/Maps122276/navigator';
import UserProfile122272Navigator from '../features/UserProfile122272/navigator';
import Maps122232Navigator from '../features/Maps122232/navigator';
import Add-Item122231Navigator from '../features/Add-Item122231/navigator';
import Maps122227Navigator from '../features/Maps122227/navigator';
import UserProfile122223Navigator from '../features/UserProfile122223/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps122330: { screen: Maps122330Navigator },
Add-Item122329: { screen: Add-Item122329Navigator },
Maps122325: { screen: Maps122325Navigator },
UserProfile122321: { screen: UserProfile122321Navigator },
Maps122281: { screen: Maps122281Navigator },
Add-Item122280: { screen: Add-Item122280Navigator },
Maps122276: { screen: Maps122276Navigator },
UserProfile122272: { screen: UserProfile122272Navigator },
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
