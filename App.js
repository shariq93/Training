import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UsersScreen from './src/screens/UsersScreen';
import UserDetails from './src/screens/UserDetails';
import { Provider } from 'react-redux';
import configureStore  from './src/store/RootStore'
export default function App() {

  const Stack = createNativeStackNavigator();
  const store = configureStore()
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={UsersScreen} />
          <Stack.Screen name="Details" component={UserDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


