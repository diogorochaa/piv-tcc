import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../../services/firebase'
import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid'

export function Record() {
  const [title, setTitle] = useState<string>('')
  const [record, setRecord] = useState<string>('')

  async function salvarProntuario(title: string, record: string) {
    try {
      await setDoc(doc(db, 'prontuarios', uuid()), {
        titulo: title,
        prontuario: record,
      })

      console.log('Data added successfully:')
    } catch (error) {
      console.error('Error adding data:', error)
      throw error
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Título"
        value={title}
        onChangeText={(title) => setTitle(title)}
      />
      <TextInput
        style={styles.input}
        placeholder="Prontuário"
        value={record}
        onChangeText={(record) => setRecord(record)}
        multiline
      />
      <Button
        title="Salvar"
        onPress={() =>
          salvarProntuario(title, record)
            .then(() => {
              console.log('Data added successfully!')
            })
            .catch((error) => {
              console.error('Error adding data:', error)
            })
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
    padding: 10,
  },
})