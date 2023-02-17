<template>
  <div>
    Header
    {{usersList}}
  </div>
</template>

<script>
import {mapGetters} from 'vuex'


export default {
    name:"CompHeader",
    computed: {
        ...mapGetters('users', ['usersList'])
    }
}
</script>

<style>

</style>