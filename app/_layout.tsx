import {
	DarkTheme,
	DefaultTheme,
	NavigationContainer,
	ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackRouter } from '@react-navigation/native';
import Home from '@/screens/Home';
import Details from '@/screens/Details';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function RootLayout() {
	const colorScheme = useColorScheme();
	const [loaded] = useFonts({
		SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<NavigationContainer independent={true}>
			<Stack.Navigator initialRouteName='Home'>
				<Stack.Screen
					name='Home'
					component={Home}
					options={{
						title: 'HomePage',
						headerStyle: {
							backgroundColor: '#6a51ae',
						},
						headerTintColor: '#fff',
						headerTitleStyle: { fontWeight: 'bold' },
					}}
				/>
				<Stack.Screen name='Details' component={Details} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
