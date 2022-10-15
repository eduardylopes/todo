import { Text, View } from 'react-native';
import { styles } from './styles';

interface LabelProps {
  title: string;
  count: number;
  color?: 'primary' | 'secondary';
}

export function Label({ title, count, color = 'primary' }: LabelProps) {
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.title,
          color === 'primary' && styles.titlePrimary,
          color === 'secondary' && styles.titleSecondary,
        ]}
      >
        {title}
      </Text>
      <Text style={styles.count}>{count}</Text>
    </View>
  );
}
