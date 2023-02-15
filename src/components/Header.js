import { View, Text, StyleSheet} from 'react-native';
export default function Header(){
    return ( 
        <View styles={styles.header}>
            <Text style={{color: "white" , fontSize: 20}}>
                Minha lista de tarefas
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: 'pink',
        width: '100%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
      },
});