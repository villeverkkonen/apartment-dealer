<template>
    <div class="sm:ml-64">
        <header>
            <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <div class="flex items-center lg:order-2">
                        <button @click="store.setSelectedHouse(HouseOptions.BLOCK_OF_FLATS)"
                            class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Block
                            of flats</button>
                        <button @click="store.setSelectedHouse(HouseOptions.TERRACED_HOUSES)"
                            class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Terraced
                            houses</button>
                        <button @click="store.setSelectedHouse(HouseOptions.TOWN_HOUSES)"
                            class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Town
                            houses</button>
                    </div>
                </div>
            </nav>
        </header>
        <div class="p-4">
            {{ store.selectedHouse }}
        </div>
    </div>
</template>
  
<script lang="ts">
import Vue, { reactive } from 'vue'

export enum HouseOptions {
    BLOCK_OF_FLATS = 'blockOfFlats',
    TERRACED_HOUSES = 'terracedHouses',
    TOWN_HOUSES = 'townHouses',
}

const store = reactive({
    selectedHouse: HouseOptions.BLOCK_OF_FLATS,
    setSelectedHouse(value: HouseOptions) {
        this.selectedHouse = value
    }
})

export const storeSymbol = Symbol('store')

export default Vue.extend({
    name: "ApartmentsPage",
    setup() {
        const store = reactive({
            selectedHouse: HouseOptions.BLOCK_OF_FLATS,
            setSelectedHouse(value: HouseOptions) {
                store.selectedHouse = value
            },
        })

        return {
            store,
            HouseOptions,
        }
    },
})
</script>
