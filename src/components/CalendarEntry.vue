<script setup>

    import { ref } from 'vue';
    import { store } from '../store/store';

    const inputEntry = ref("");

    const error = ref(false);

    function submitEvent() {

                            if(inputEntry.value.trim() === ""){

                                                                error.value = true;
                                                                
                                                                return;

                                                              }

                            store.submitEvent(inputEntry.value);
                          
                            inputEntry.value = "";
                          
                            error.value = false;

                          } // Closing brace of the 'submitEvent()' method.

</script>

<template>

  <div class="entry-box">

    <h2>
      Day of Event:
      {{ store.getActiveDay().fullTitle }}
    </h2>

    <input
      type="text"
      v-model="inputEntry"
      placeholder="New Event"
    >

    <button @click="submitEvent">

      Submit

    </button>

    <p class="error" v-if="error">

      You must type something first!

    </p>

  </div>

</template>