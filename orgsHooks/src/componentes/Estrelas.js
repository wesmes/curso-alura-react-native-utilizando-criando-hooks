import React from "react";
import { View, Image, StyleSheet } from "react-native";
import estrela from "../assets/estrela.png";
import estrelaCinza from "../assets/estrelaCinza.png";


export default function Estrelas({ 
    quantidade: quantidadeAnterior, 
    editavel = false, 
    grande = false 
}) {
    const estilos = estilosFuncao(grande);
    return <View style={estilos.estrelas}>
                <Image source={estrela} style={estilos.estrela} />
                <Image source={estrela} style={estilos.estrela} />
            </View>
}

const estilosFuncao = (grande) => StyleSheet.create({
    estrelas: {
        flexDirection: 'row',
    },
    estrela: {
        width: grande ? 36 : 12,
        height: grande ? 36 : 12,
        marginRight: 2
    }
});