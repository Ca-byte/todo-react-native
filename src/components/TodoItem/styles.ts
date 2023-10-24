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
	},

  checkbox: {
    width: 25,
    height: 25,
    borderWidth: 2,
    borderColor: '#5E60CE',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkmarkIcon: {
    width: 12,
    height: 8,
  },

  checkmarkEmpty: {
    width: 16,
    height: 16,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#4EA8DE',
  },

  completedTaskName: {
    color: 'gray',
    textDecorationLine: 'line-through',
  },
})