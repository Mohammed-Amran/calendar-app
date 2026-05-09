<script setup>

import CalendarWeek from './components/CalendarWeek.vue';
import EventModal from './components/EventModal.vue';

import { store } from './store/store';

</script>

<template>

  <h1>📅 Calendar App</h1>

  <CalendarWeek />

  <EventModal v-if="store.showModal" />

</template>