import { FlatList, Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import { useState } from "react";
import { styles } from "./styles";

import plusIMG from '../../assets/plus.png'
import clipboardIMG from '../../assets/Clipboard.png'
import { TodoItem } from "../TodoItem";


export function TodoList() {
	const [task, setTask] = useState('');
	{/*const [ newTask, setNewTask] = useState<string[]>([])*/}
	const todos = ['Learn react native', 'Learn how to repass props', 'Learn', 'Please learn it', 'everyday', 'you are going to succeed', 'Practing a little','never give up', 'It will pays off', 'we are almost there', 'booom']

	function handleAddNewTask() {
		if (!task)
    setTask('');
  }

	function handleRemoveTodo(activity: string){
		console.log(`Are you sure to delete ${activity}!`)
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
					<FlatList
						data={todos} 
						keyExtractor={item => item}
						renderItem={({item}) => (
							<TodoItem 
							key={item}
							todo={item} 
							onRemove={() =>handleRemoveTodo(item)}
							/>
							)}
							showsHorizontalScrollIndicator={false}
							ListEmptyComponent={()=> (
						<>
							<View style={styles.divider}></View>
							<Image style={styles.EmptyListContent} source={clipboardIMG} />
							<Text style={styles.listEmptyText}> 
								You don't have tasks registered yet
								Create tasks and organize your to-do items
							</Text>
						</>
					)}
				/>
			</View>
		</>
	)
}
