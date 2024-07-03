import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

type HomeProps = {
	navigation: any;
};

const Home: FC<HomeProps> = ({ navigation }) => {
	const navigate = useNavigation();
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Home</Text>
			<Button
				title='Go to about'
				onPress={() => navigation.navigate('Details')}
			/>
		</View>
	);
};

export default Home;

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 16,
	},
});
