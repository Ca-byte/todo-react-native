import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	container: {
		marginTop: 32,
		marginHorizontal: 24,

	},
	wrapperCounter: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 21
	},

	counterTextTodo: {
		fontSize: 14,
		fontWeight: 'bold',
		color: '#4EA8DE'

	},
	counterTextDone:{
		fontSize: 14,
		fontWeight: 'bold',
		color: '#8284FA'
	},
	counterBagde: {
		width: 25,
		height: 19,
		backgroundColor: '#262626',
		borderRadius: 8,
	},

	counterNumber: {
		color : '#F2F2F2',
		fontSize: 12,
		textAlign: 'center'
	},

  divider: {
    width: '80%', 
    borderBottomWidth: 1,
    borderColor: '#ccc', 
    marginVertical: 10, 
  },
	
	 wrapperCard: {
		height: 64,
		backgroundColor: '#262626',
		borderRadius: 8,
		alignItems: 'center',
		justifyContent: 'center'
	}, 
	
	taskName: {
		color : '#F2F2F2'
	}
})