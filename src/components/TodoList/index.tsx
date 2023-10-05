import { Text, View } from "react-native";
import { styles } from "./styles";


export function TodoList() {
	
	return(
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
			<View style={styles.wrapperCard}>
				<Text style={styles.taskName}>Carolineeee</Text>
			</View>
		</View>
	)
}