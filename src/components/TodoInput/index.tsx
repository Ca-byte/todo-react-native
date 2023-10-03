import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import plusIMG from '../../assets/plus.png'

interface HeaderProps {
  tasksCounter: number;
}

export function TodoInput({ }) {

	function handleAddNewTask() {
    console.log('New task added!')
   
  }
	return(
		<View style={styles.container}>
			<TextInput
			style={styles.input} 
			placeholder="Add new todo ..."
			placeholderTextColor="#808080"
			selectionColor="#1E6F9F"
			/>
			<TouchableOpacity
			activeOpacity={0.7}
			style={styles.addButton}
			onPress={handleAddNewTask}
			>
				<Image source={plusIMG} />
			</TouchableOpacity>
		</View>
	)
}