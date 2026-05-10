import { FlatList, StyleSheet, Text, View } from 'react-native'
import Colors from '@/constants/Colors'
import { FilterOptions, Tasks } from '@/constants/Task'
import Header from '@/components/Header'
import FiltersTab from '@/components/FiltersTab'
import {StatusBar} from "expo-status-bar"
import React, { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import DateSelector from '@/components/DateSelector'
import TaskCard from '@/components/TaskCard'

const index = () => {
  const Inset = useSafeAreaInsets()
  const [activeFilter, setActiveFilter] = useState<FilterOptions>("All")
  return (
    <View style= {[ styles.container , {paddingTop: Inset.top} ]}>
      <StatusBar style='light'/>
      <FlatList 
      data={Tasks}
      renderItem={({ item }) => <TaskCard task={item}/>}
      keyExtractor={(_, index) => index.toString()}
      ListHeaderComponent={
        <> 
        {/* Header */}
        <Header />
        {/* Dateselector */}
        <DateSelector/>
        {/* Filter */}
        <FiltersTab selected={activeFilter} onSelect={setActiveFilter} />
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