import { reducer } from '../../store/reducers/shelves';
import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { storageSync } from '@larscom/ngrx-store-storagesync';

export const reducers: ActionReducerMap<any> = {
  shelves: reducer
};

export function storageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return storageSync<any>({
    features: [
      { stateKey: 'shelves' }
    ],
    storage: window.localStorage
  })(reducer);
}

export const metaReducers: Array<MetaReducer<any, any>> = [storageSyncReducer]
