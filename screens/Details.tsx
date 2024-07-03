import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type DetailsProps = {};

const Details: FC<DetailsProps> = ({}) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Details</Text>
		</View>
	);
};

export default Details;

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
