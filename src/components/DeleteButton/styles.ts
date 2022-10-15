import { StyleSheet } from 'react-native';
import theme from '@Styles/theme.style';

export const styles = StyleSheet.create({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: 50,
    height: 50,
    borderRadius: 4,
  },

  buttonActive: {
    backgroundColor: theme.GRAY_400,
  },
});
