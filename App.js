import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UsersScreen from './src/screens/UsersScreen';
import UserDetails from './src/screens/UserDetails';
export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={UsersScreen} />
        <Stack.Screen name="Details" component={UserDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


