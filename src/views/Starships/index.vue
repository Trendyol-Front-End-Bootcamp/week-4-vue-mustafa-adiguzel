<template>
  <div>
      <Search />
      <ListStarship />
  </div>
</template>

<script>
import ListStarship from '@/components/Starship/ListStarship'
import Search from '@/components/Search/Search'
export default {
  components: {
    ListStarship,
    Search
  },
  created(){
     this.$store.dispatch('fetchStarships', 1)
  }
}
</script>

<style>

</style>