import React, { useState } from 'react';
import { StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import Svg, { Line, Circle } from 'react-native-svg';

export default function App() {
  const [forca1, setForca1] = useState('');
  const [forca2, setForca2] = useState('');
  const [angulo, setAngulo] = useState('');
  const [resultante, setResultante] = useState(null);

  function calcularResultante() {
    const f1 = parseFloat(forca1);
    const f2 = parseFloat(forca2);
    const ang = parseFloat(angulo);

    if (isNaN(f1) || isNaN(f2) || isNaN(ang)) {
      setResultante('Entrada inválida');
      return;
    }

    const anguloRadianos = ang * (Math.PI / 180);
    const resultado = Math.sqrt(
      f1 ** 2 + f2 ** 2 + 2 * f1 * f2 * Math.cos(anguloRadianos)
    );
    setResultante(resultado.toFixed(2));
  }

  function renderSVG() {
    const f1 = parseFloat(forca1);
    const f2 = parseFloat(forca2);
    const ang = parseFloat(angulo);
  
    if (isNaN(f1) || isNaN(f2) || isNaN(ang)) return null;
  
    const escala = 2;
    const origemX = 100;
    const origemY = 100;
  
    // Ponto final do vetor 1 (horizontal)
    const f1x = origemX + f1 * escala;
    const f1y = origemY;
  
    // Ponto final do vetor 2 (com ângulo)
    const rad = ang * (Math.PI / 180);
    const f2x = origemX + f2 * escala * Math.cos(rad);
    const f2y = origemY - f2 * escala * Math.sin(rad);
  
    // Soma vetorial (ponto final do vetor resultante)
    const resultanteX = f1x + (f2x - origemX);
    const resultanteY = f1y + (f2y - origemY);
  
    return (
      <Svg height="200" width="200" style={styles.svg}>
        {/* Vetor 1: azul */}
        <Line x1={origemX} y1={origemY} x2={f1x} y2={f1y} stroke="blue" strokeWidth="3" />
  
        {/* Vetor 2: vermelho */}
        <Line x1={origemX} y1={origemY} x2={f2x} y2={f2y} stroke="red" strokeWidth="3" />
  
        {/* Vetor resultante: verde */}
        <Line x1={origemX} y1={origemY} x2={resultanteX} y2={resultanteY} stroke="green" strokeWidth="3" />
  
        {/* Origem */}
        <Circle cx={origemX} cy={origemY} r="4" fill="black" />
      </Svg>
    );
  }

  // Função para garantir que apenas números e ponto decimal sejam permitidos
  const numero = (value) => {
    const filteredValue = value.replace(/[^0-9.]/g, ''); // Remove tudo que não for número ou ponto
    const isValidValue = filteredValue.split('.').length <= 2; // Permite apenas um ponto decimal
    
    if (isValidValue) {
      return filteredValue;  // Retorna o valor filtrado
    }

    return value;  // Retorna o valor original caso não seja válido
  };

  // Função para formatar o valor com sufixo
  const formatarForca = (value) => {
    return value ? `${value} N` : '';  // Adiciona " N" ao valor de força
  };

  const formatarAngulo = (value) => {
    return value ? `${value} °` : '';  // Adiciona " °" ângulo
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Vetores</Text>
      <View style={styles.inputcontainer}>
        <TextInput
          style={[styles.input, { color: '#000' }]}
          placeholder="Força 1"
          placeholderTextColor="#ccc"
          keyboardType="numbers-and-punctuation"
          value={formatarForca(forca1)}  // Exibe o valor com "N" no input
          onChangeText={(text) => setForca1(numero(text))} 
        />
      </View>
      <View style={styles.inputcontainer}>
        <TextInput
          style={[styles.input, { color: '#000' }]}
          placeholder="Força 2"
          placeholderTextColor="#ccc"
          keyboardType="numbers-and-punctuation"
          value={formatarForca(forca2)}  // Exibe o valor com "N" no input
          onChangeText={(text) => setForca2(numero(text))}  
        />
      </View>
      <View style={styles.inputcontainer}>
        <TextInput
          style={[styles.input, { color: '#000' }]}
          placeholder="Ângulo (°)"
          placeholderTextColor="#ccc"
          keyboardType="numbers-and-punctuation"
          value={formatarAngulo(angulo)}  // Exibe o valor com "°" no input
          onChangeText={(text) => setAngulo(numero(text))}  // Atualiza o valor sem o sufixo
        />
      </View>

      <TouchableOpacity style={styles.botao} onPress={calcularResultante}>
        <Text style={{ color: "#fff", fontSize: 18 }}>Calcular</Text>
      </TouchableOpacity>

      <Text style={{ fontSize: 18, marginTop: 20 }}>
        Resultado: {resultante !== null ? resultante : 'insira os dados'}
      </Text>

      <View style={styles.svgContainer}>
        {renderSVG()}
      </View>

      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
    </View>
  );
}
