import {createFeatureSelector, createSelector} from '@ngrx/store';
import {HomeState} from './home.reducer';


export const selectHomeState = createFeatureSelector('home');

///   (homeState:HomeState) => homeState,
  //  );
   
/*export interface FeatureState {
  texto:string;
}
 
export interface AppState {
  feature: FeatureState;
}
 
export const selectHomeState = (state: AppState) => state.feature;
 
export const selectHomeText = createSelector(
    selectHomeState,
  (state: FeatureState) => state.texto
);*/