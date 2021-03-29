import {createReducer, Action,on, reduceState} from '@ngrx/store';
import { ActionSequence } from 'selenium-webdriver';
import * as fromHomeAction from './home.action';

export interface HomeState{

}

export const HomeInitialState : HomeState = {

}

const reducer =createReducer(
    HomeInitialState,
);

export function homeReducer(state:HomeState| undefined, action: Action):HomeState{
return reducer(state,action);
}