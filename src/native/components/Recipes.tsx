import * as React from 'react'
import PropTypes from 'prop-types'
import { FlatList, TouchableOpacity, RefreshControl, Image } from 'react-native'
import { Container, Content, Card, CardItem, Body, Text, Button } from 'native-base'
import { Actions } from 'react-native-router-flux'
import Loading from './Loading'
import Error from './Error'
import Header from './Header'
import Spacer from './Spacer'

namespace RecipeListing {
  export interface Props {
    error: string
    loading: boolean
    recipes: any[]
    reFetch(): void
  }
}

const RecipeListing: React.SFC<RecipeListing.Props> = ({
  error,
  loading,
  recipes,
  reFetch,
}: RecipeListing.Props) => {
  // Loading
  if (loading) {
    return <Loading />
  }

  // Error
  if (error) {
    return <Error content={error} />
  }

  const keyExtractor = item => item.id

  const onPress = item => Actions.recipe({ match: { params: { id: String(item.id) } } })

  return (
    <Container>
      <Content padder={true}>
        <Header
          title='Botom Recipes'
          content='This is here to show how you can read and display data from a data source (in our case, Firebase).'
        />

        <FlatList
          numColumns={2}
          data={recipes}
          renderItem={({ item }) => (
            <Card transparent={true} style={{ paddingHorizontal: 6 }}>
              <CardItem cardBody={true}>
                <TouchableOpacity onPress={() => onPress(item)} style={{ flex: 1 }}>
                  <Image
                    source={{ uri: item.image }}
                    style={{
                      height: 100,
                      width: null,
                      flex: 1,
                      borderRadius: 5,
                    }}
                  />
                </TouchableOpacity>
              </CardItem>
              <CardItem cardBody={true}>
                <Body>
                  <Spacer size={10} />
                  <Text style={{ fontWeight: '800' }}>{item.title}</Text>
                  <Spacer size={15} />
                  <Button
                    block
                    bordered
                    small
                    onPress={() => onPress(item)}
                  >
                    <Text>View Recipe</Text>
                  </Button>
                  <Spacer size={5} />
                </Body>
              </CardItem>
            </Card>
          )}
          keyExtractor={keyExtractor}
          refreshControl={
            <RefreshControl
              refreshing={loading}
              onRefresh={reFetch}
            />
          }
        />

        <Spacer size={20} />
      </Content>
    </Container>
  )
}

export default RecipeListing
