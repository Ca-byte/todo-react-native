import { Text, View } from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { TodoInput } from "../../components/TodoInput";

export function Home(){
	return(
		<View style={styles.container}>
			<Header />
			<TodoInput />
		</View>
	)
}