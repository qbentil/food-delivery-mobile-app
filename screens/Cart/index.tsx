import React from 'react'
import { Text } from 'react-native'

interface Props {
  navigation?: Boolean
}

const CartScreen:React.FC<Props> =({navigation}) => {
  return (
    <Text>Start Screen</Text>
  )
}

export default CartScreen