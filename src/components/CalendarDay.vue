<script setup>

    import { store } from '../store/store';
    import CalendarEvent from './CalendarEvent.vue';

    const props = defineProps({

                               day: Object

                             });

   function selectDay() {

                         store.setActiveDay(props.day.id);

                         store.showModal = true;

}

</script>

<template>

  <div
    class="day-box"
    @click="selectDay"
    :style="{
      backgroundColor: day.active ? '#d4ffd4' : 'white'
    }"
  >

    <h3>{{ day.abbvTitle }}</h3>

    <div
      v-for="event in day.events"
      :key="event.details"
    >

      <CalendarEvent
        :event="event"
        :day="day"
      />

    </div>

  </div>

</template>