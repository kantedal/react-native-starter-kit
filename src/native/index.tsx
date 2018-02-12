import * as  React from 'react'
import { StatusBar, Platform } from 'react-native'
import { Provider } from 'react-redux'
import { Router, Stack } from 'react-native-router-flux'
import { PersistGate } from 'redux-persist/es/integration/react'

import { StyleProvider } from 'native-base'
import getTheme from '../../native-base-theme/components'
import theme from '../../native-base-theme/variables/commonColor'

import Routes from './routes/index'
import Loading from './components/Loading'

// Hide StatusBar on Android as it overlaps tabs
if (Platform.OS === 'android') {
  StatusBar.setHidden(true)
}

namespace Root {
  export interface Props {
    store: any
    persistor: any
  }
}

const Root: React.SFC<Root.Props> = ({ store, persistor }) => (
  <Provider store={store}>
    <PersistGate
      loading={<Loading />}
      persistor={persistor}
    >
      <StyleProvider style={getTheme(theme)}>
        <Router>
          <Stack key='root'>
            {Routes}
          </Stack>
        </Router>
      </StyleProvider>
    </PersistGate>
  </Provider>
)

export default Root
