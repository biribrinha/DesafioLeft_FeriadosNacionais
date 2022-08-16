import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function Buscar() {

  const [textoBusca, setTextoBusca] = useState("")
  const [feriados, setFeriados] = useState([])

  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
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
      <Text>Pesquise os feriados</Text>
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
                  <View key={feriado.date}>
                    <Text>{feriado.date}</Text>
                    <Text>{feriado.name}</Text>
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
                  <View key={feriado.date}>
                    <Text>{feriado.date}</Text>
                    <Text>{feriado.name}</Text>
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