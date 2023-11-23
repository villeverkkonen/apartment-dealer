<template>
    <div>
        {{ selectedHouseName }}
        <div v-for="(item) in selectedMockList" :key="item.street_address">
            {{ item.street_address }}
        </div>
    </div>
</template>
  
<script>
import { HouseOptions } from '~/store/apartment';
import { mockBlockOfFlats, mockTerracedHouses, mockTownHouses } from '~/mocks/houseMocks';

export default {
    name: 'ApartmentContainer',
    props: {
        house: {
            type: String,
            required: true,
            validator: value => Object.values(HouseOptions).includes(value),
        },
    },
    computed: {
        selectedMockList() {
            switch (this.house) {
                case HouseOptions.BLOCK_OF_FLATS:
                    return mockBlockOfFlats;
                case HouseOptions.TERRACED_HOUSES:
                    return mockTerracedHouses;
                case HouseOptions.TOWN_HOUSES:
                    return mockTownHouses;
                default:
                    return [];
            }
        },
        selectedHouseName() {
            switch (this.house) {
                case HouseOptions.BLOCK_OF_FLATS:
                    return 'Block of Flats';
                case HouseOptions.TERRACED_HOUSES:
                    return 'Terraced Houses';
                case HouseOptions.TOWN_HOUSES:
                    return 'Town Houses';
                default:
                    return 'Block of Flats';
            }
        }
    },
}
</script>
