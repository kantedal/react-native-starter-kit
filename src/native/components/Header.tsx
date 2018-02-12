import * as React from 'react'
import { View } from 'react-native'
import { Text, H1 } from 'native-base'
import Spacer from './Spacer'

namespace Header {
  export interface Props {
    title: string
    content: string
  }
}

const Header: React.SFC<Header.Props> = ({ title, content }) => (
  <View>
    <Spacer size={25} />
    <H1>{title}</H1>
    {!!content &&
      <View>
        <Spacer size={10} />
        <Text>{content} app</Text>
      </View>
    }
    <Spacer size={25} />
  </View>
)

export default Header
