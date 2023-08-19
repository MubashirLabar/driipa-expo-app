import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import navigationTheme from "./navigationTheme";
import routes from "./routes";
import AuthNavigator from "./AuthNavigator";
import CreateProfileNavigator from "./CreateProfileNavigator";

const RootStack = createStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <RootStack.Navigator>
        {/* <RootStack.Screen
          name={routes.AUTH}
          component={AuthNavigator}
          options={{
            headerShown: false,
          }}
        /> */}
        <RootStack.Screen
          name={routes.CREATE_PROFILE_NAVIGATOR}
          component={CreateProfileNavigator}
          options={{
            headerShown: false,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
