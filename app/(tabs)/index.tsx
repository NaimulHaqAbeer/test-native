import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
	return (
		<View>
			<Text style={styles.textContainer}>Home</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	textContainer: {
		display: 'flex',
		textAlign: 'center',
		alignItems: 'center',
	},
	stepContainer: {
		gap: 8,
		marginBottom: 8,
	},
	reactLogo: {
		height: 178,
		width: 290,
		bottom: 0,
		left: 0,
		position: 'absolute',
	},
});
