<template>
    <div>
        {{ selectedApartmentType }}
        <div v-for="(item) in fetchedData" :key="item.street_address">
            {{ item.street_address }}
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { ApartmentType } from '~/store/apartment';

export default {
    name: 'ApartmentContainer',
    props: {
        house: {
            type: String,
            required: true,
            validator: value => Object.values(ApartmentType).includes(value),
        },
    },
    computed: {
        ...mapState('apartment', ['selectedApartmentType']),
        ...mapState('apartment', ['fetchedData']),
    },
}
</script>
