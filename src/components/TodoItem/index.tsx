import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import trashIMG from'../../assets/trash.png'

interface TodoListProps{
	todo: string
	onRemove: () => void
}
export function TodoItem({todo, onRemove}: TodoListProps){
	return(
		<View style={styles.wrapperCard}>
			<Text style={styles.taskName}>{todo}</Text>
				<TouchableOpacity onPress={onRemove} style={styles.trashButton}>
					<Image source={trashIMG} />
				</TouchableOpacity>
		</View>
				
	)
}