import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View} from "react-native";
import { useState } from "react";
import { styles } from "./styles";

import plusIMG from '../../assets/plus.png'
import clipboardIMG from '../../assets/Clipboard.png'
import { TodoItem } from "../TodoItem";


export function TodoList() {
	const [taskName, setTaskName] = useState('');
	const [todos, setTodos] = useState<{ id: number; taskName: string; completed: boolean }[]>([]);
	const [completedCount, setCompletedCount] = useState(0);

	
	function handleAddNewTask() {
    if (todos.find(todo => todo.taskName === taskName)) {
      return Alert.alert("Oops! It seems like you've already added this task to your list.")
    }
    const newTodo = { id: todos.length + 1, taskName, completed: false };
    setTodos(prevState => [...prevState, newTodo]);
    setTaskName('');
  }

	function handleRemoveTodo(id: number){
		Alert.alert('Delete', `Are you sure to delete this task?`, [
      {
        text: 'Yes',
        onPress: () => {
          setTodos(prevState => prevState.filter(todo => todo.id !== id));
          updateCompletedCount();
        }
      },
      {
        text: 'No',
        style: 'cancel'
      }
    ])
  }

	function handleToggleComplete(id: number) {
		setTodos(prevState =>
			prevState.map(todo =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		);
		updateCompletedCount();
	}

	function updateCompletedCount() {
    const count = todos.filter(todo => todo.completed).length;
    setCompletedCount(count);
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
								<Text style={styles.counterNumber}>{todos.length}</Text>
							</View>
						</View>
						<View style={styles.wrapperCounter}>
							<Text style={styles.counterTextDone}>
								Completed  
							</Text>
							<View style={styles.counterBagde}>
								<Text style={styles.counterNumber}>{completedCount}</Text>
							</View>
						</View>
					</View>
					<FlatList
						data={todos} 
						keyExtractor={item => item.id.toString()}  
						renderItem={({ item }) => (
							<TodoItem 
								key={item.id.toString()}  
								todo={item.taskName} 
								onRemove={() => handleRemoveTodo(item.id)}
								onToggleComplete={() => handleToggleComplete(item.id)}
								isCompleted={item.completed}  
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
