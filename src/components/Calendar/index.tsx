import React from 'react'
import { Feather } from '@expo/vector-icons'
import {
  Calendar as CalendarCustom,
  LocaleConfig,
} from 'react-native-calendars'
import { ptBR } from './localeConfig'

LocaleConfig.locales['pt-br'] = ptBR
LocaleConfig.defaultLocale = 'pt-br'

export function Calendar() {
  return (
    <CalendarCustom
      renderArrow={(direction) => (
        <Feather
          name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
          size={24}
          color="black"
        />
      )}
      headerStyle={{
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 10,
      }}
      theme={{
        textDayFontSize: 14,
        textMonthFontSize: 20,
        textDayHeaderFontSize: 10,
        monthTextColor: '#f15454',
        arrowColor: '#f15454',
        todayTextColor: '#f15454',
        dayTextColor: '#000',
        textDisabledColor: '#ccc',
        dotColor: '#f15454',
        selectedDotColor: '#f15454',
        selectedDayBackgroundColor: '#f15454',
        selectedDayTextColor: '#fff',
      }}
      firstDay={1}
      minDate={new Date()}
    />
  )
}
