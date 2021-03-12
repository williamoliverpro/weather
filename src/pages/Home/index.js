import React from 'react'
import { SafeAreaView, Text, StyleSheet, FlatList } from 'react-native'

import Menu from '../../components/Menu'
import Header from '../../components/Header'
import Conditions from '../../components/Conditions'
import Forecast from '../../components/Forecast'

const myList = [
    {
      "date": "03-12",
      "weekday": "Fri",
      "max": 26,
      "min": 17,
      "description": "Thunderstorms",
      "condition": "storm"
    },
    {
      "date": "03-13",
      "weekday": "Sat",
      "max": 26,
      "min": 18,
      "description": "Isolated thundershowers",
      "condition": "clear_day"
    },
    {
      "date": "03-14",
      "weekday": "Sun",
      "max": 27,
      "min": 18,
      "description": "Thunderstorms",
      "condition": "storm"
    },
    {
      "date": "03-15",
      "weekday": "Mon",
      "max": 25,
      "min": 18,
      "description": "Thunderstorms",
      "condition": "storm"
    },
    {
      "date": "03-16",
      "weekday": "Tue",
      "max": 26,
      "min": 17,
      "description": "Thunderstorms",
      "condition": "storm"
    },
    {
      "date": "03-17",
      "weekday": "Wed",
      "max": 25,
      "min": 18,
      "description": "Thunderstorms",
      "condition": "storm"
    },
    {
      "date": "03-18",
      "weekday": "Thu",
      "max": 25,
      "min": 19,
      "description": "Thunderstorms",
      "condition": "storm"
    },
    {
      "date": "03-19",
      "weekday": "Fri",
      "max": 22,
      "min": 18,
      "description": "Showers",
      "condition": "rain"
    },
    {
      "date": "03-20",
      "weekday": "Sat",
      "max": 21,
      "min": 17,
      "description": "Day mostly cloudy",
      "condition": "cloud"
    },
    {
      "date": "03-21",
      "weekday": "Sun",
      "max": 27,
      "min": 16,
      "description": "Isolated thundershowers",
      "condition": "storm"
    }
  ]

export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <Menu />

            <Header />

            <Conditions />

            <FlatList
                horizontal={true}
                contentContainerStyle={{ paddingBottom: '5%' }}
                style={styles.list}
                data={myList}
                keyExtractor={ item => item.date }
                renderItem={ ({ item }) =>  <Forecast data={item}/>}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e8f0ff',
        paddingTop: '5%'
    },
    list: {
        marginTop: 10,
        marginLeft: 10
    }
})