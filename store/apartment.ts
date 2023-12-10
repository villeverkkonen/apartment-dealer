import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export enum ApartmentType {
  BLOCK_OF_FLATS = 'blockOfFlats',
  TERRACED_HOUSES = 'terracedHouses',
  TOWN_HOUSES = 'townHouses',
}

interface SelectedApartmentState {
  selectedApartmentType: ApartmentType;
  fetchedData: any[];
}

export const state: SelectedApartmentState = {
  selectedApartmentType: ApartmentType.BLOCK_OF_FLATS,
  fetchedData: [],
}

export const mutations = {
  setSelectedApartmentType(state: SelectedApartmentState, value: ApartmentType) {
    state.selectedApartmentType = value
  },
  updateFetchedData(state: SelectedApartmentState, data: any[]) {
    state.fetchedData = data;
  },
}
