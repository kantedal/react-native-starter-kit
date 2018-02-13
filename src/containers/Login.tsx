import * as React from 'react'
import { connect } from 'react-redux'

import { login } from '../actions/member'

namespace Login {
  export interface Props {
    Layout: () => React.Component<any>
    member: any
    isLoading: boolean
    infoMessage: string
    errorMessage: string
    successMessage: string
    onFormSubmit: () => void    
  }
}

const Login: React.SFC<Login.Props> = ({
  Layout,
  onFormSubmit,
  member,
  isLoading,
  infoMessage,
  errorMessage,
  successMessage,
}: Login.Props) => (
  <Layout
    member={member}
    loading={isLoading}
    info={infoMessage}
    error={errorMessage}
    success={successMessage}
    onFormSubmit={onFormSubmit}
  />
)

const mapStateToProps = state => ({
  member: state.member || {},
  isLoading: state.status.loading || false,
  infoMessage: state.status.info || null,
  errorMessage: state.status.error || null,
  successMessage: state.status.success || null,
})

const mapDispatchToProps = {
  onFormSubmit: login,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
