import theme from '@Styles/theme.style';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 8,
  },
  titlePrimary: {
    color: theme.BLUE,
  },
  titleSecondary: {
    color: theme.PURPLE,
  },
  count: {
    minWidth: 24,
    height: 20,
    borderRadius: 999,
    backgroundColor: theme.GRAY_400,

    textAlign: 'center',
    lineHeight: 20,
    fontSize: 12,
    fontWeight: 'bold',
    color: theme.GRAY_100,
  },
});
