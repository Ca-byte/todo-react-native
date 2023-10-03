import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 60,
    backgroundColor: '#0D0D0D',
  },
  tasks: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  tasksCounter: {
    fontSize: 15,
    color: '#FFF',
  },
  tasksCounterBold: {
    fontSize: 15,
    color: '#FFF',
  }
});