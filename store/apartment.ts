import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export enum HouseOptions {
  BLOCK_OF_FLATS = 'blockOfFlats',
  TERRACED_HOUSES = 'terracedHouses',
  TOWN_HOUSES = 'townHouses',
}

interface HouseState {
  selectedHouse: HouseOptions;
}

const store = new Vuex.Store<HouseState>({
  state: {
    selectedHouse: HouseOptions.BLOCK_OF_FLATS,
  },
  mutations: {
    setSelectedHouse(state, value: HouseOptions) {
      state.selectedHouse = value
    },
  },
})

export default store