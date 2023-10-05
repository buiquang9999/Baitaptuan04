import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import firstScreen from "./view/firstScreen";
import screen1a from "./view/screen1a";
import screen1b from "./view/screen1b";
import screen1c from "./view/screen1c";
import screen1d from "./view/screen1d";
import screen1e from "./view/screen1e";
import screen2a from "./view/screen2a";
import XMEyeScreen from "./view/XMEyeScreen";
import { Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center', width: '100%'}}>
      <Button
        title="Go to first screen"
        onPress={() => navigation.navigate('firstScreen')}
      />
      <Button
        title="Go to screen1a"
        onPress={() => navigation.navigate('screen1a')}
      />
      <Button
        title="Go to screen1b"
        onPress={() => navigation.navigate('screen1b')}
      />
      <Button
        title="Go to screen1c"
        onPress={() => navigation.navigate('screen1c')}
      />
      <Button
        title="Go to screen1d"
        onPress={() => navigation.navigate('screen1d')}
      />
       <Button
        title="Go to screen1e"
        onPress={() => navigation.navigate('screen1e')}
      />
      <Button
        title="Go to screen2a"
        onPress={() => navigation.navigate('screen2a')}
      />
      <Button
        title="Go to XMEyeScreen"
        onPress={() => navigation.navigate('XMEyeScreen')}
      />

    </View>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="firstScreen"
          component={firstScreen}
          options={{ title: 'firstScreen' }}
        />
        <Stack.Screen
          name="screen1a"
          component={screen1a}
          options={{ title: 'screen1a' }}
        />
        <Stack.Screen
          name="screen1b"
          component={screen1b}
          options={{ title: 'screen1b' }}
        />
        <Stack.Screen
          name="screen1c"
          component={screen1c}
          options={{ title: 'screen1c' }}
        />
        <Stack.Screen
          name="screen1d"
          component={screen1d}
          options={{ title: 'screen1d' }}
        />
        <Stack.Screen
          name="screen1e"
          component={screen1e}
          options={{ title: 'screen1e' }}
        />
         <Stack.Screen
          name="screen2a"
          component={screen2a}
          options={{ title: 'screen2a' }}
        />
        <Stack.Screen
          name="XMEyeScreen"
          component={XMEyeScreen}
          options={{ title: 'XMEyeScreen' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
    