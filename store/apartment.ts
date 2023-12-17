import Vue from 'vue'
import Vuex, { ActionContext } from 'vuex'

Vue.use(Vuex)

export enum ApartmentType {
  BLOCK_OF_FLATS = 'blockOfFlats',
  TERRACED_HOUSES = 'terracedHouses',
  TOWN_HOUSES = 'townHouses',
}

interface SelectedApartmentState {
  selectedApartmentType: ApartmentType;
  apartments: Apartment[];
}

interface Apartment {
  streetAddress: String,
  city: String,
}

export const state = () => ({
  selectedApartmentType: ApartmentType.BLOCK_OF_FLATS,
  apartments: [],
})

export const mutations = {
  setSelectedApartmentType(state: SelectedApartmentState, value: ApartmentType) {
    state.selectedApartmentType = value;
  },
  updateApartments(state: SelectedApartmentState, data: any[]) {
    state.apartments = data;
  },
}

export const actions = {
  async fetchApartments(context: ActionContext<SelectedApartmentState, any>) {
    try {
      const response = await fetch(`/api/apartments?apartmentType=${context.state.selectedApartmentType}`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      context.commit('updateApartments', data);
    } catch (error) {
      console.error('There was a problem fetching data:', error);
    }
  },
}