import { useState } from 'react'
import { Heading, VStack, SectionList } from 'native-base'

import { NotificationsCard } from '../../../components/NotificationsCard'
import { ScreenHeader } from '../../../components/ScreenHeader'

export function Alert() {
  const [listNotifications] = useState([
    {
      title: '29/06/2021',
      data: [
        'Notificação 1',
        'Notificação 1',
        'Notificação 1',
        'Notificação 1',
        'Notificação 1',
      ],
    },
    {
      title: '28/06/2021',
      data: [
        'Notificação 2',
        'Notificação 2',
        'Notificação 2',
        'Notificação 2',
        'Notificação 2',
      ],
    },
  ])

  return (
    <VStack flex={1}>
      <ScreenHeader title="Notificações" />
      <SectionList
        sections={listNotifications}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <NotificationsCard />}
        renderSectionHeader={({ section: { title } }) => (
          <Heading color={'fuchsia.800'} fontSize={'md'} mt={10} mb={3}>
            {title}
          </Heading>
        )}
        px={4}
        contentContainerStyle={
          listNotifications.length === 0 && {
            flex: 1,
            justifyContent: 'center',
          }
        }
        ListEmptyComponent={() => (
          <Heading color={'fuchsia.800'} textAlign={'center'}>
            Nenhuma notificação
          </Heading>
        )}
      />
    </VStack>
  )
}
