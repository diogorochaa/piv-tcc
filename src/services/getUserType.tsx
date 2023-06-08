// import { useEffect, useState } from 'react'
// import { getDocs, collection } from 'firebase/firestore'
// import { db } from '../services/firebase'
// import { View } from 'native-base'

// export function getUserType() {
//   const [type, setType] = useState([] as any)

//   const userRef = collection(db, 'users')
//   useEffect(() => {
//     const getUsers = async () => {
//       try {
//         const data = await getDocs(userRef)
//         const filteredData = data.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }))
//         setType(filteredData)
//         console.log('data', filteredData)
//       } catch (error) {
//         console.log('error', error)
//       }
//     }
//     getUsers()
//   }, [userRef])

//   function handleType() {
//     const typeUser = type.map((item: any) => item.profissional)
//     console.log('type', typeUser)
//   }

//   return (
//     <View>
//       <button onClick={handleType}>teste</button>
//     </View>
//   )
// }
