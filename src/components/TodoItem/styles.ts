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
    width: 30,
    height: 30,
    borderWidth: 2,
    borderColor: '#5E60CE',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmarkIcon: {
    width: 20,
    height: 20,
  },
  checkmarkEmpty: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#5E60CE',
  },
  completedTaskName: {
    textDecorationLine: 'line-through',
    color: 'gray',
   
  },

})