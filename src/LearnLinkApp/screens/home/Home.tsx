import React from "react";
import { Text, View } from "react-native";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles/style";
export function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Essa tela só pode ser vista por usuários autenticados</Text> */}
    
      <Button title="Seduc" onPress={() => navigation.navigate('SeducScreens' as never)} />
      <Button title="Fornecedora" onPress={() => navigation.navigate('FornecedoraScreens' as never)} />
      <Button title="Transportadora" onPress={() => navigation.navigate('TransportadoraScreens' as never)} />
      <Button title="Escola" onPress={() => navigation.navigate('EscolaScreens' as never)} />

      <Text>
        By <Text style={styles.coffText}>Yago</Text>
      </Text>
    </View>
  );
}

