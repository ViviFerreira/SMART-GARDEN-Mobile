import { StyleSheet } from 'react-native';
import { colorPrimary, colorWhite } from '~/components/UI/variaveis';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    maxHeight: '70%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gif: {
    marginBottom: '60%',
  },
  form: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: 'transparent',
  },
  formImage: {
    width: '40%',
    height: '40%',
  },
  formText: {
    fontSize: 50,
    fontWeight: 'bold',
    paddingTop: 10,
    color: colorWhite,
  },
  formSubText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colorWhite,
    paddingBottom: 30,
  },
  formButton: {
    width: 60,
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colorPrimary,
  },
  formButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colorWhite,
  },
});
