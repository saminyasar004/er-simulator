import { Stack } from 'expo-router';
import 'nativewind';
import { StatusBar, useColorScheme } from 'react-native';
import ToastManager from 'toastify-react-native';
import '../../global.css';

export default function SplashLayout() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <>
      <StatusBar
        backgroundColor={isDark ? '#000' : '#fff'}
        translucent={true}
        barStyle={isDark ? 'light-content' : 'dark-content'}
      />
      <Stack
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
      <ToastManager />
    </>
  );
}
