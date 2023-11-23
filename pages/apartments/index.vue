<template>
    <div class="sm:ml-64">
        <header>
            <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <div class="flex items-center lg:order-2">
                        <button @click="setSelectedHouse(houseOptions.BLOCK_OF_FLATS)"
                            class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Block
                            of flats</button>
                        <button @click="setSelectedHouse(houseOptions.TERRACED_HOUSES)"
                            class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Terraced
                            houses</button>
                        <button @click="setSelectedHouse(houseOptions.TOWN_HOUSES)"
                            class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Town
                            houses</button>
                    </div>
                </div>
            </nav>
        </header>
        <div class="p-4">
            <ApartmentContainer :house="selectedHouse" />
        </div>
    </div>
</template>
  
<script lang="ts">
import Vue from 'vue'
import { HouseOptions } from '~/store/apartment'
import ApartmentContainer from '~/components/ApartmentContainer.vue'

export default Vue.extend({
    name: 'ApartmentsPage',
    data() {
        return {
            houseOptions: HouseOptions,
            selectedHouse: HouseOptions.BLOCK_OF_FLATS,
        }
    },
    methods: {
        setSelectedHouse(value: HouseOptions) {
            this.selectedHouse = value
        },
    },
    components: {
        ApartmentContainer,
    }
})
</script>