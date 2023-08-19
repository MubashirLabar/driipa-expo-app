import { StatusBar, SafeAreaView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import routes from "./routes";
import { styles } from "../style";
import CreateProfileScreen from "screens/createProfile";
import FollowerSuggestions from "screens/FollowerSuggestions";
import LikesData from "screens/LikesData";

const Stack = createStackNavigator();

const CreateProfileNavigator = () => (
  <SafeAreaView
    style={{ paddingTop: styles.statusBarHeight }}
    className="flex flex-1"
  >
    <StatusBar
      backgroundColor="transparent"
      translucent
      barStyle="light-content"
    />
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={routes.CREATE_PROFILE}
        component={CreateProfileScreen}
      />
      <Stack.Screen
        name={routes.FOLLOWER_SUGGESTIONS}
        component={FollowerSuggestions}
      />
      <Stack.Screen name={routes.LIKES_DATA} component={LikesData} />
    </Stack.Navigator>
  </SafeAreaView>
);

export default CreateProfileNavigator;
