import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Input from 'react-native-input-style';

export default function Buscar() {

  const [textoBusca, setTextoBusca] = useState("")
  const [feriados, setFeriados] = useState([])

  const styles = StyleSheet.create({
    input: {
      width: 250,
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 5,
      borderColor: "#F3333A"
    },

    card:{
      borderColor: "#F3333A",
      width: 200,
      height: 40,
      borderWidth: 1,
      margin: 5,
      borderRadius: 5,
      alignItems: 'center'
    }
  });

  useEffect(() => {
    fetch("https://brasilapi.com.br/api/feriados/v1/2022")
      .then(response => response.json())
      .then(data => setFeriados(data))
  }, [])

  const feriadosFiltrados = textoBusca.length > 0
    ? feriados.filter(feriado => feriado.name.includes(textoBusca))
    : [];

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: '#94162D', fontSize: 25 }}>Pesquise os feriados</Text>
      <TextInput
        onChangeText={setTextoBusca}
        value={textoBusca}
        style={styles.input}
        
      />
      {
        textoBusca.length > 0 ? (
          <View>
            {
              feriadosFiltrados.map(feriado => {
                return (
                  <View style={styles.card} key={feriado.date}>
                    <Text style={{ color: '#ABB3B6' }} >{feriado.date}</Text>
                    <Text style={{ color: '#678486' }}>{feriado.name}</Text>
                  </View>
                )
              })
            }
          </View>
        ) : (
          <View>
            {
              feriados.map(feriado => {
                return (
                  <View  style={styles.card} key={feriado.date}>
                    <Text style={{ color: '#ABB3B6' }}>{feriado.date}</Text>
                    <Text style={{ color: '#678486' }}>{feriado.name}</Text>
                  </View>
                )
              })
            }
          </View>
        )
      }

    </View>
  );


}