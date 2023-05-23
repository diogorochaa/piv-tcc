import { useEffect, useState, useRef } from 'react'
import { Image, SafeAreaView, StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  LocationObject,
  watchPositionAsync,
  LocationAccuracy,
} from 'expo-location'
import { StatusBar } from 'expo-status-bar'
import mapStyle from './styles'

export function Clinics() {
  const [location, setLocation] = useState<LocationObject | null>(null)
  const mapRef = useRef<MapView>(null)

  async function requestPermissions() {
    const { granted } = await requestForegroundPermissionsAsync()

    if (granted) {
      const currentPosition = await getCurrentPositionAsync()
      setLocation(currentPosition)
    }
  }

  useEffect(() => {
    requestPermissions()
  }, [])

  useEffect(() => {
    watchPositionAsync(
      {
        accuracy: LocationAccuracy.Highest,
        timeInterval: 1000,
        distanceInterval: 1,
      },
      (response) => {
        setLocation(response)
        mapRef.current?.animateCamera({
          pitch: 70,
          center: response.coords,
        })
      },
    )
  }, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      {location && (
        <MapView
          ref={mapRef}
          style={styles.map}
          mapType="hybrid"
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          zoomControlEnabled
          scrollEnabled
          minZoomLevel={5}
          maxZoomLevel={30}
          customMapStyle={mapStyle}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="Meu local"
            description="Localização atual"
          >
            <Image
              style={styles.avatar}
              alt="Diogo Rocha"
              source={{
                uri: 'https://github.com/diogorochaa.png',
              }}
            />
          </Marker>
        </MapView>
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 50,
  },
})
