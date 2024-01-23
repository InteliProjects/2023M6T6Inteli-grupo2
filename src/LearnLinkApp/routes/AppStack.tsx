import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Home } from "../screens/home/Home";

import SeducScreens from "../screens/SeducFlow/SeducScreens";
import PedidosConfirmadoS from "../screens/SeducFlow/PedidosConfirmadoSeduc";
import PedidosSeparadoS from "../screens/SeducFlow/PedidosSeparadoSeduc";
import PedidosDespachadoS from "../screens/SeducFlow/PedidosDespachadoSeduc";
import PedidosEntregueS from "../screens/SeducFlow/PedidosEntregueSeduc";

import FornecedoraScreens from "../screens/FornecedoraFlow/FornecedoraScreens";
import PedidosConfirmadoF from "../screens/FornecedoraFlow/PedidosConfirmadoFornecedora";
import PedidosSeparadoF from "../screens/FornecedoraFlow/PedidosSeparadoFornecedora";
import PedidosDespachadoF from "../screens/FornecedoraFlow/PedidosDespachadoFornecedora";
import PedidosEntregueF from "../screens/FornecedoraFlow/PedidosEntregueFornecedora";

import TransportadoraScreens from "../screens/TransportadoraFlow/TransportadoraScreens";
import PedidosSeparadoT from "../screens/TransportadoraFlow/PedidosSeparadoTransportadora";
import PedidosDespachadoT from "../screens/TransportadoraFlow/PedidosDespachadoTransportadora";
import PedidosEntregueT from "../screens/TransportadoraFlow/PedidosEntregueTransportadora";

import EscolaScreens from "../screens/EscolaFlow/EscolaScreens";
import PedidosConfirmadoE from "../screens/EscolaFlow/PedidosConfirmadoEscola";
import PedidosSeparadoE from "../screens/EscolaFlow/PedidosSeparadoEscola";
import PedidosDespachadoE from "../screens/EscolaFlow/PedidosDespachadoEscola";
import PedidosAvaliadoE from "../screens/EscolaFlow/PedidosAvaliado";
import PedidosFaltaAvaliarE from "../screens/EscolaFlow/PedidosFaltaAvaliar";



const Stack = createNativeStackNavigator();

export function AppStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      
      <Stack.Screen name="SeducScreens" component={SeducScreens} />
      <Stack.Screen name="PedidosConfirmadoS" component={PedidosConfirmadoS} />
      <Stack.Screen name="PedidosSeparadoS" component={PedidosSeparadoS} />
      <Stack.Screen name="PedidosDespachadoS" component={PedidosDespachadoS} />
      <Stack.Screen name="PedidosEntregueS" component={PedidosEntregueS} />

      <Stack.Screen name="FornecedoraScreens" component={FornecedoraScreens} />
      <Stack.Screen name="PedidosConfirmadoF" component={PedidosConfirmadoF} />
      <Stack.Screen name="PedidosSeparadoF" component={PedidosSeparadoF} />
      <Stack.Screen name="PedidosDespachadoF" component={PedidosDespachadoF} />
      <Stack.Screen name="PedidosEntregueF" component={PedidosEntregueF} />

      <Stack.Screen name="TransportadoraScreens" component={TransportadoraScreens} />
      <Stack.Screen name="PedidosSeparadoT" component={PedidosSeparadoT} />
      <Stack.Screen name="PedidosDespachadoT" component={PedidosDespachadoT} />
      <Stack.Screen name="PedidosEntregueT" component={PedidosEntregueT} />

      <Stack.Screen name="EscolaScreens" component={EscolaScreens} />
      <Stack.Screen name="PedidosConfirmadoE" component={PedidosConfirmadoE} />
      <Stack.Screen name="PedidosSeparadoE" component={PedidosSeparadoE} />
      <Stack.Screen name="PedidosDespachadoE" component={PedidosDespachadoE} />
      <Stack.Screen name="PedidosAvaliadoE" component={PedidosAvaliadoE} />
      <Stack.Screen name="PedidosFaltaAvaliarE" component={PedidosFaltaAvaliarE} />

    </Stack.Navigator>
  );
}
