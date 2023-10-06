import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	wrapperCard: {
		width: '100%',
		height: 64,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: '#262626',
		borderRadius: 8,
		marginBottom: 8,
		paddingHorizontal: 24
	},
	
	trashButton: {
		marginLeft: 40
	}, 
	
	taskName: {
		color : '#F2F2F2'
	}
})