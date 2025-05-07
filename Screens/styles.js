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
    backgroundColor: '#d3d3d3',  // Caixa cinza
    justifyContent: 'center',     // Centraliza verticalmente
    alignItems: 'center',         // Centraliza horizontalmente
    padding: 20,                  // Espaçamento interno
    borderRadius: 10,             // Bordas arredondadas
    marginTop: 20,                // Espaço acima da caixa
    flexDirection: 'row',         // Garantir que o conteúdo seja alinhado horizontalmente
    width: '100%',                // Ocupa a largura total
    height: 250,                  // Tamanho fixo para a caixa
  },
  svg: {
    width: 200,
    height: 200,
  },
});