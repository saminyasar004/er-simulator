import Layout from 'components/layout';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { Image, View } from 'react-native';

export default function App() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/home');
    }, 3000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <Layout>
      <View className="row table h-screen items-center justify-center">
        <Image
          source={require('assets/images/adaptive-icon.png')}
          className="h-[200px] w-[200px]"
        />
      </View>
    </Layout>
  );
}
