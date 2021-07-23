<template>
    <div class="starship-list">
        <Starship 
            v-for="starship in Starships"
            :key="shipKeyGenerator(starship)"
            :starship="starship"
        />
    </div>
</template>

<script>
import Starship from '@/components/Starship/Starship'
export default {
    components: {
        Starship
    },
    computed: {
        Starships(){
            return this.$store.getters.getStarships
        },
    },
    methods: {
        shipKeyGenerator(starship){
            return `${ starship.name } - ${ starship.model }`
        }
    }
}
</script>

<style>
.starship-list{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 1200px;
    column-gap: 20px;
    margin: 0 auto;
}
</style>