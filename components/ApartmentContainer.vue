<template>
    <div>
        {{ selectedApartmentType }}
        <div v-if="selectedApartmentType && fetchedApartments.length > 0">
            <div v-for="(item) in fetchedApartments" :key="item.streetAddress">
                {{ item.streetAddress }}
            </div>
        </div>
        <div v-else>
            Loading...
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
        ...mapState('apartment', ['selectedApartmentType', 'apartments']),
        fetchedApartments() {
            return this.apartments || [];
        },
    },
}
</script>