import theme from '@Styles/theme.style';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 54,
    borderRadius: 6,
    padding: 16,

    color: theme.GRAY_100,
    borderColor: theme.GRAY_700,
    borderWidth: 1,
    backgroundColor: theme.GRAY_500,
  },
  inputActive: {
    borderColor: theme.PURPLE_DARK,
  },
});
