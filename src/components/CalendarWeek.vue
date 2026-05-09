<script setup>

    import { store } from '../store/store';
    import CalendarDay from './CalendarDay.vue';

</script>

<template>

  <div class="week">

                    <CalendarDay v-for="day in store.days" :key="day.id" :day="day" />

  </div>

</template>