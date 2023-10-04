import { Text, View } from "react-native";
import { styles } from "./styles";


export function TodoList() {
	
	return(
		<View style={styles.container}>
				<View style={styles.wrapperCounter}>
					<Text style={styles.counterTextTodo}>
						Created  
						{
							<View style={styles.counterBagde}>
								<Text style={styles.counterNumber}>5</Text>
							</View>
						}
					</Text>
					<Text style={styles.counterTextDone}>
						Completed  
						{
							<View style={styles.counterBagde}>
								<Text style={styles.counterNumber}>2</Text>
							</View>
						}
					</Text>
				</View>
				{/*<View style={styles.divider}></View>*/}
			<View style={styles.wrapperCard}>
				<Text style={styles.taskName}>Carolineeee</Text>
			</View>
		</View>
	)
}