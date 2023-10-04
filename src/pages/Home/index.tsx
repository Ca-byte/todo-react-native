import { Text, View } from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { TodoInput } from "../../components/TodoInput";
import { TodoList} from "../../components/TodoList";

export function Home(){
	return(
		<View style={styles.container}>
			<Header />
			<TodoInput />
			<TodoList/>
		</View>
	)
}