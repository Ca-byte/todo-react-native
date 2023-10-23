import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import trashIMG from'../../assets/trash.png'
import checkmarkIMG from '../../assets/checkmark.png'

interface TodoListProps{
	todo: string
	onRemove: () => void
	onToggleComplete: () => void;
  isCompleted: boolean;
}
export function TodoItem({todo, onRemove, onToggleComplete, isCompleted}: TodoListProps){
	return(
		<View style={styles.wrapperCard}>
      <TouchableOpacity style={styles.checkbox} onPress={onToggleComplete}>
        {isCompleted ? (
          <Image source={checkmarkIMG} style={styles.checkmarkIcon} />
          ) : (
            <View style={styles.checkmarkEmpty}></View>
            )}
      </TouchableOpacity>
      <Text style={isCompleted ? styles.completedTaskName : styles.taskName}>{todo}</Text>
      <TouchableOpacity onPress={onRemove} style={styles.trashButton}>
        <Image source={trashIMG} />
      </TouchableOpacity>
    </View>
				
	)
}