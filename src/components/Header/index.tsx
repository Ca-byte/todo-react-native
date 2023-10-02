import { Image, Text, View } from "react-native";
import { styles } from "./styles";

import logoImg from '../../assets/Logo.png'

export function Header(){
	return(
		<View style={styles.container}>
			<Image source={logoImg}/>
		</View>
	)
}