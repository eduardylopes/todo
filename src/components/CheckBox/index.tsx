import Checkbox, { CheckboxProps } from 'expo-checkbox';
import { Text } from 'react-native';
import { styles } from './styles';

export function CheckBox(props: CheckboxProps) {
  return <Checkbox {...props} style={styles.container} />;
}
