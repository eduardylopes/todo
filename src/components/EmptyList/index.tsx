import { Text, View } from 'react-native';
import { styles } from './styles';
import ClipBoard from '@Assets/clipboard.svg';

export function EmptyList() {
  return (
    <View style={styles.container}>
      <ClipBoard style={styles.icon} />
      <View>
        <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
        <Text style={styles.description}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  );
}
