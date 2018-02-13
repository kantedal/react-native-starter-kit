import { combineReducers, Reducer } from 'redux'
import status, { StatusState } from './status'
import member from './member'
import recipes from './recipes'

export interface RootState {
  status: StatusState
}

export default combineReducers<RootState>({
  status,
  member,
  recipes,
})
