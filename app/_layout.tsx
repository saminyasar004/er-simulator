import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import 'nativewind';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ToastManager from 'toastify-react-native';
import '../global.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 min cache
      retry: 3,
      refetchOnWindowFocus: false, // RN doesn't have window focus
    },
  },
});

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView className="flex-1">
        <StatusBar
          backgroundColor={isDark ? '#000' : '#fff'}
          translucent={true}
          barStyle={isDark ? 'light-content' : 'dark-content'}
        />
        <Stack
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
        <ToastManager />
      </SafeAreaView>
    </QueryClientProvider>
  );
}
