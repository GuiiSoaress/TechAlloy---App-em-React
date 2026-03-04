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
      <Text style={styles.title}>Tech Alloy - Controle de produção</Text>

      <Text style={styles.text} >Relatório de Ocorrências</Text>
      <TextInput style={styles.input}
        placeholder="Digite a ocorrência aqui"
        value={ocorrencia}
        onChangeText={setOcorrencia}
      />

      <Text style={styles.text}>PIN de Segurança</Text>
      <TextInput style={styles.input}
        placeholder="Digite seu PIN"
        value={pin}
        onChangeText={setPin}
        secureTextEntry={true}
      />

      <Button title='Envie a Ocorrência' color="#3758e7" />

      <Text style={styles.text} >Carga de Cromo (KG)</Text>
      <TextInput style={styles.input}
        placeholder="Digite a carga de Cromo"
        value={pesoCromo}
        onChangeText={setPesoCromo}
        keyboardType="numeric-pad"
      />

      <Text style={styles.text} >Carga de Níquel (KG)</Text>
      <TextInput style={styles.input}
        placeholder="Digite a carga de Níquel"
        value={pesoNiquel}
        onChangeText={setPesoNiquel}
        keyboardType="numeric-pad"
      />

      <Button title="Calcular total da Liga" color='#e06919' onPress={calculaMetais} />

      <Text style={styles.textoResultado}>Peso Total da Carga: {pesoTotal}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 20
  },
  title: {
    fontSize: 30,
    textAlign: 'center'
  },
  text: {
    fontSize: 20,
  },
  input: {
    height: 40,
    padding: 10,
    borderWidth: 2,
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius: 10
  },
  textoResultado: {
    fontSize: 20, 
    color: "red"
  }
});
