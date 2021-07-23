<template>
  <div class="detail-container">
    <GTooltip class="g-p-10" text="Previous">
      <template #tooltip-trigger>
      <GButton
        size="big"
        variant="secondary"
        icon="arrow-left"
        @click="routePrevious"
      ></GButton>
      </template>
     </GTooltip>

     <Breadcrumb
        :propItems="propItems"
      />
    
     <StarshipDetail :starship = "starShip" />
  </div>
</template>

<script>
import StarshipDetail from '@/components/Starship/StarshipDetail'
import Breadcrumb from '@/components/Shared/Breadcrumb'
import axios from 'axios'
import GButton from '@trendyol-js/grace/core/GButton';
import GTooltip from '@trendyol-js/grace/core/GTooltip';

export default {
    components: {
      StarshipDetail,
      GButton,
      GTooltip,
      Breadcrumb
    },
    data(){
      return {
        starShip: { }
      }
    },
    computed: {
      starShipId(){
        return this.$route.params.id
      },
      propItems(){
        return [ 
          { text: this.starShipId, href: `/starship/${ this.starShipId }` } 
        ]
      }
    },
    async created(){
        await axios.get(`https://swapi.dev/api/starships/${ this.starShipId }`).then(response => {
            console.log('data',response.data)
            this.starShip = response?.data
        });
    },
    methods: {
      routePrevious(){
        this.$router.push('/')
      }
    }
}
</script>

<style scoped>
.detail-container{
  margin-top: 20px;
}
</style>