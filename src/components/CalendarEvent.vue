<script setup>

import { ref } from 'vue';
import { store } from '../store/store';

const props = defineProps({

  event: Object,
  day: Object

});

const newEventDetails = ref("");


function editEvent() {              

                      store.editEvent(
                                      props.day.id,
                                     
                                      props.event.details
                     
                                     );

                    }

function stopModal(){

                     store.closeModel;
     
                    }

function updateEvent() {

  let updatedText = newEventDetails.value;

  if(updatedText.trim() === ""){

    updatedText = props.event.details;

  }

  store.updateEvent(
    props.day.id,
    props.event.details,
    updatedText
  );

  newEventDetails.value = "";

}

function deleteEvent() {

  store.deleteEvent(
    props.day.id,
    props.event.details
  );

}

</script>

<template>

  <div class="event-box">

    <!-- NORMAL VIEW -->

    <div v-if="!event.edit">

      {{ event.details }}

      <button @click.stop="editEvent">
        ✏️
      </button>

      <button @click.stop="deleteEvent">
        🗑️
      </button>

    </div>

    <!-- EDIT VIEW -->

    <div v-else>

      <input type="text" @click.stop="stopModal" v-model="newEventDetails" :placeholder="event.details" >

      <button @click.stop="updateEvent">
        ✔️
      </button>

    </div>

  </div>

</template>

<style scoped>

.event-box{

  margin-top: 10px;
  padding: 5px;
  border: 1px solid gray;

}

</style>