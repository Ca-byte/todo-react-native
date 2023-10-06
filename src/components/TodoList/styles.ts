import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	containerInput: {
		backgroundColor: 'transparent',
  	marginHorizontal: 20,
    marginTop: -28,
   	flexDirection: 'row',
    alignItems: 'center',
  },

	input: {
		flex: 1,
    height: 56,
		padding: 16,
		fontSize: 16,
    backgroundColor: '#262626',
    borderRadius: 6,
    color: '#808080',
		marginRight: 4

  },

	addButton: {
		height: 56,
		width: 56,
    backgroundColor: '#1E6F9F',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },

	container: {
		marginTop: 32,
		marginHorizontal: 24,

	},

	wrapperCounters: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: 21
	},

	wrapperCounter: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 8
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
    width: '100%', 
    borderBottomWidth: 1,
    borderColor: '#ccc', 
    marginVertical: 10, 
  },

	 wrapperCard: {
		width: '100%',
		height: 64,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#262626',
		borderRadius: 8,
	},
	
	trashButton: {
		marginLeft: 40
	}, 
	
	taskName: {
		color : '#F2F2F2'
	},
	EmptyListContent: {
		alignSelf: 'center',
		marginTop: 48,
		marginBottom: 16
		
	},
	listEmptyText: {
		color:  '#F2F2F2',
		fontSize: 14,
		textAlign: 'center'
	}
})