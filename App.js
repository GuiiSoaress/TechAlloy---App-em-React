import { StatusBar } from "expo-status-bar";
import { use, useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [ocorrencia, setOcorrencia] = useState("");
  const [pin, setPin] = useState("");
  const [pesoCromo, setPesoCromo] = useState("");
  const [pesoNiquel, setPesoNiquel] = useState("");
  const [pesoTotal, setPesoTotal] = useState('')

  function calculaMetais(){
    const cromo = parseFloat(pesoCromo.replace(',','.'))
    const niquel = parseFloat(pesoNiquel.replace(',','.'))

    var total = cromo + niquel
    setPesoTotal(total)
  }

  return (
    <View style={styles.container}>
      <Text>Tech Alloy - Controle de produção</Text>
      <Text>Relatório de Ocorrências</Text>
      <TextInput
        placeholder="Digite a ocorrência aqui"
        value={ocorrencia}
        onChangeText={setOcorrencia}
      />
      <Text>PIN de Segurança</Text>
      <TextInput
        placeholder="Digite seu PIN"
        value={pin}
        onChangeText={setPin}
        secureTextEntry={true}
      />

      <Button title='Envie a Ocorrência' color="#3758e7" />
      <Text>Carga de Cromo (KG)</Text>
      <TextInput
        placeholder="Digite a carga de Cromo"
        value={pesoCromo}
        onChangeText={setPesoCromo}
        keyboardType="numeric-pad"
      />
      <Text>Carga de Níquel (KG)</Text>
      <TextInput
        placeholder="Digite a carga de Níquel"
        value={pesoNiquel}
        onChangeText={setPesoNiquel}
        keyboardType="numeric-pad"
      />
      <Button title="Calcular total da Liga" color='#e06919' onPress={calculaMetais} />
      <Text>Peso Total da Carga: {pesoTotal}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
