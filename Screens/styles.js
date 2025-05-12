import { StyleSheet, TextInput } from 'react-native';
import Svg, { Line, Circle } from 'react-native-svg';

export const styles = StyleSheet.create({
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    justifyContent: 'center',
  },
  inputcontainer: {
    marginBottom: 15,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  botao: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  svgContainer: {
    backgroundColor: '#d3d3d3',  
    justifyContent: 'center',     
    alignItems: 'center',         
    padding: 20,                  
    borderRadius: 10,             
    marginTop: 20,                
    flexDirection: 'row',          
    width: '100%',                
    height: 250,                  
  },
  svg: {
    width: 200,
    height: 200,
  },
});
