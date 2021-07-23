<template>
  <div>
      <ListStarship />
  </div>
</template>

<script>
import ListStarship from '@/components/Starship/ListStarship'
export default {
  components: {
    ListStarship
  },
  created(){
     this.$store.dispatch('fetchStarships', 1)
  }
}
</script>

<style>

</style>