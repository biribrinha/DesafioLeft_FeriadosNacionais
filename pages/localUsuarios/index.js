import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles';


export default function LocalUsuarios() {
    const [localAtual, setLocalAtual] = useState({
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.03,
        longitudeDelta: 0.03
    });

    useEffect(() => {
        async function carregarLocal() {
            const { granted } = await requestForegroundPermissionsAsync();

            if (granted) {
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true
                });

                const { latitude, longitude } = coords;

                console.log(latitude, longitude)
                setLocalAtual({
                    latitude,
                    longitude,
                    latitudeDelta: 0.014,
                    longitudeDelta: 0.014
                });
            }
        }

        carregarLocal();
    }, [])


    return (
        <MapView initialRegion={{
            latitude: -23.5774476,
            longitude: -46.5167132,
            latitudeDelta: 0.014,
            longitudeDelta: 0.014
        }} style={styles.container}>
            <Marker coordinate={{
                latitude: -23.5774476,
                longitude: -46.5167132,
                latitudeDelta: 0.014,
                longitudeDelta: 0.014
            }} />
        </MapView>
    );
}