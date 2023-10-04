import { useState } from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import plusIMG from '../../assets/plus.png'

export function TodoInput() {
	const [task, setTask] = useState('');
  

	function handleAddNewTask() {
		if (!task)
    return;
		console.log(task)
    setTask('');
   
  }
	return(
		<View style={styles.container}>
			<TextInput
				style={styles.input} 
				placeholder="Add new todo ..."
				placeholderTextColor="#808080"
				selectionColor="#1E6F9F"
				returnKeyType="send"
				value={task}
				onChangeText={setTask}
				onSubmitEditing={handleAddNewTask}
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