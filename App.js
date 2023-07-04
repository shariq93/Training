import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UsersScreen from './src/screens/UsersScreen';
import UserDetails from './src/screens/Home';
import { Provider } from 'react-redux';
import configureStore from './src/store/RootStore'
import LoginScreen from './src/screens/LoginScreen';
import Signup from './src/screens/SignupScreen';
import Home from './src/screens/Home';
export default function App() {

  const Stack = createNativeStackNavigator();
  const store = configureStore()
  return (
    <Provider store={store}>
      <NavigationContainer >
        <Stack.Navigator  screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


