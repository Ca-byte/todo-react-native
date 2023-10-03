import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	container: {
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
  }
});