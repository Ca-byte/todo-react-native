import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import { useState } from "react";
import { styles } from "./styles";

import plusIMG from '../../assets/plus.png'
import clipboardIMG from '../../assets/Clipboard.png'
import { TodoItem } from "../TodoItem";


export function TodoList() {
	const [taskName, setTaskName] = useState('');
	const [todos, setTodos] = useState<string[]>([]);
	
	function handleAddNewTask() {
		if (todos.includes(taskName)){
			return Alert.alert("Oops! It seems like you've already added this task to your list.")
		}
		setTodos(prevState => [...prevState, taskName])
		setTaskName('')
  }

	function handleRemoveTodo(activity: string){
	

		Alert.alert('Delete',`Are you sure to delete ${activity}?`, [
			{
				text: 'Yes',
				onPress: () => setTodos(prevState => prevState.filter(todo => todo !== activity))
			},
			{
				text: 'No',
				style: 'cancel'
			}
		] )
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
					value={taskName}
					onChangeText={setTaskName}
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
