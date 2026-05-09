<script setup>

import { ref } from 'vue';
import { store } from '../store/store';

const inputEntry = ref("");

const error = ref(false);

function submitEvent(){

                       if(inputEntry.value.trim() === ""){
                      
                                                          error.value = true;
                                                         
                                                          return;
                      
                                                        }
                      
                       store.submitEvent(inputEntry.value);
                      
                       inputEntry.value = "";
                      
                       error.value = false;

                       store.showModal = false;

                    }

function closeModal(){

                      store.showModal = false;

                      store.deactivateDay();

                    }

</script>

<template>

  <div class="modal-overlay">

    <div class="modal-box">

      <h2>

        {{ store.getActiveDay().fullTitle }}

      </h2>

      <input
        type="text"
        placeholder="Enter the event here"
        v-model="inputEntry"
      >

      <div class="button-row">
        <button @click="submitEvent" id="submit-btn">
          Submit
        </button>

        <button @click="closeModal" id="close-btn">
          Close
        </button>
      </div>

      <p class="error" v-if="error">

        Please enter something!

      </p>

    </div>

  </div>

</template>

<style scoped>

.modal-overlay{

  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: rgba(0,0,0,0.5);

  display: flex;
  justify-content: center;
  align-items: center;

}

.modal-box{

  background-color: white;

  padding: 30px;

  border-radius: 10px;

  width: 300px;

  display: flex;
  flex-direction: column;

  gap: 15px;

}

.button-row{

  display: flex;
  gap: 12px;
  justify-content: space-between;
}

.button-row button{

  flex: 1;
  border: none;
  padding: 12px 16px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: box-shadow 0.2s ease, transform 0.2s ease, background-color 0.2s ease, color 0.2s ease;
}

#submit-btn{

  
  color: #062f4f;
  box-shadow: inset 0 0 0 1px rgba(0,0,0,0.08);
}

#submit-btn:hover{

  background-color: #4caf50;
  color: #ffffff;
  box-shadow: 0 0 20px 8px #d4ffd4;
  transform: scale(1.03);
}

#close-btn{

  background-color: #f0f0f0;
  color: #111;
  box-shadow: inset 0 0 0 1px rgba(0,0,0,0.08);
}

#close-btn:hover{

  background-color: #999999;
  color: #ffffff;
  box-shadow: 0 0 14px 5px rgba(0,0,0,0.15);
  transform: scale(1.03);
}

</style>