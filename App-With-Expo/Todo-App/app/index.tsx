import { FlatList, StyleSheet, Text, View } from 'react-native'
import Colors from '@/constants/Colors'
import { Tasks } from '@/constants/Task'
import Header from '@/components/Header'
import {StatusBar} from "expo-status-bar"
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import DateSelector from '@/components/DateSelector'

const index = () => {
  const Inset = useSafeAreaInsets()
  return (
    <View style= {[ styles.container , {paddingTop: Inset.top} ]}>
      <StatusBar style='light'/>
      <FlatList 
      data={Tasks}
      renderItem={({ item }) => <Text>{String(item)}</Text>}
      keyExtractor={(_, index) => index.toString()}
      ListHeaderComponent={
        <> 
        {/* Header */}
        <Header />
        {/* Dateselector */}
        <DateSelector/>
        {/* Filter */}
        </>
      }
      contentContainerStyle = {styles.list}
      showsVerticalScrollIndicator = {false}
      />
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: Colors.background
  },
  list : {
    paddingBottom : 24
  }
})