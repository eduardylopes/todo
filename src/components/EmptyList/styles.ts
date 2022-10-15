import { StyleSheet } from 'react-native';
import theme from '@Styles/theme.style';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',

    width: '100%',

    borderTopColor: theme.GRAY_400,
    borderTopWidth: 1,
  },
  icon: {
    marginBottom: 16,
    marginTop: 48,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: theme.GRAY_300,
  },
  description: {
    fontSize: 14,
    color: theme.GRAY_300,
  },
});
