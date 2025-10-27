import NoRippleTabButton from 'components/no-rippler-pressable';
import { Tabs } from 'expo-router';
import { Briefcase, House, Settings2, UserRound } from 'lucide-react-native';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          paddingTop: 0,
          paddingBottom: 0,
          marginBottom: 0,
          marginTop: 0,
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#F2F2F2',
        },
        tabBarActiveTintColor: '#F86241',
        tabBarInactiveTintColor: '#63707C',
        tabBarButton: (props) => <NoRippleTabButton {...props} />,
      }}>
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          title: 'Home',
          tabBarIcon: ({ color, size }) => <House size={20} color={color} />,
        }}
      />
      <Tabs.Screen
        name="my-plan"
        options={{
          headerShown: false,
          title: 'My Plan',
          tabBarIcon: ({ color, size }) => <Briefcase size={20} color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          headerShown: false,
          title: 'Settings',
          tabBarIcon: ({ color, size }) => <Settings2 size={20} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: 'Profile',
          tabBarIcon: ({ color, size }) => <UserRound size={20} color={color} />,
        }}
      />
    </Tabs>
  );
}
