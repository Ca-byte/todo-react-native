import { Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import { useState } from "react";
import { styles } from "./styles";

import plusIMG from '../../assets/plus.png'
import { TodoItem } from "../TodoItem";


export function TodoList() {
	const [task, setTask] = useState('');

	function handleAddNewTask() {
		if (!task)
    return;
		console.log(task)
    setTask('');
  }

	function handleRemoveTodo(){
		console.log('Delete!')
	}

	return(
		<>
			<View style={styles.containerInput}>
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
			<View style={styles.container}>
					<View style={styles.wrapperCounters}>
						<View style={styles.wrapperCounter}>
							<Text style={styles.counterTextTodo}>
								Created  
							</Text>
							<View style={styles.counterBagde}>
								<Text style={styles.counterNumber}>5</Text>
							</View>
						</View>
						<View style={styles.wrapperCounter}>
							<Text style={styles.counterTextDone}>
								Completed  
							</Text>
							<View style={styles.counterBagde}>
								<Text style={styles.counterNumber}>2</Text>
							</View>
						</View>
					</View>
					{/*<View style={styles.divider}></View>*/}
					<TodoItem todo="Studing React Native" onRemove={handleRemoveTodo}/>
			</View>
		</>
	)
}