import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';

const CreateStack = createStackNavigator();

const Routes: React.FC = () => (
  <CreateStack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
  >
    <CreateStack.Screen name="SignIn" component={SignIn} />
  </CreateStack.Navigator>
);

export default Routes;
