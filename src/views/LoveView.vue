<!-- @credits to https://github.com/saurabhnemade -->
<!-- Original project https://github.com/saurabhnemade/will-you-be-my-valentine -->

<template >
    <div class="centered-container" style="text-align: center;
    justify-content: center;
    display: flex;">
      <div class="valentine-container">
        <template v-if="yesPressed">
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div class="text-container">Ok yay!!!</div>
          Redirecting in {{ countdown }} seconds...

        </template>
        <template v-else>
          <img
            class="h-[200px]"
            :style="{ width: '400px', height: '240px' }"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 class="text-container">Will you be my Valentine?</h1>
          <div>
            <button
              class="yes-button"
              :style="{ fontSize: yesButtonSize + 'px' }"
              @click="setYesPressed"
            >
              Yes
            </button>
  
            <button @click="handleNoClick" class="no-button">
              {{ noCount === 0 ? 'No' : getNoButtonText }}
            </button>
          </div>
        </template>
      </div>
    </div>
  </template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router';

const noCount = ref(0)
const countdown = ref(3);
const yesPressed = ref(false)
const yesButtonSize = computed(() => noCount.value * 20 + 16)
const router = useRouter();


watch(yesPressed, (newValue) => {
      if (newValue) {
        const intervalId = setInterval(() => {
          countdown.value--;
        }, 1000);

        setTimeout(() => {
          clearInterval(intervalId);
          router.push({name: 'timelineLove'}); 
        }, 3000);
      }
    });

const handleNoClick = () => {
  noCount.value++
}

const getNoButtonText = computed(() => {
  const phrases = [
    'No',
    'Are you sure?',
    'Really sure?',
    'Think again!',
    'Last chance!',
    'Surely not?',
    'You might regret this!',
    'Give it another thought!',
    'Are you absolutely certain?',
    'This could be a mistake!',
    'Have a heart!',
    "Don't be so cold!",
    'Change of heart?',
    "Wouldn't you reconsider?",
    'Is that your final answer?',
    "You're breaking my heart ;("
  ]

  return phrases[Math.min(noCount.value, phrases.length - 1)]
})

const setYesPressed = () => {
  yesPressed.value = true
}
</script>

<style scoped>
.valentine-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
}

.yes-button {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  background-color: #a7efb8; 
  color: #fff;
  font-weight: bold; 
  padding: 8px 16px; 
  border-radius: 8px; 
  margin-right: 8px;
}

.yes-button:hover {
  background-color: #4f7457; 
}


.no-button {
  background-color: #c90d0d; 
  color: #fff; 
  font-weight: bold; 
  padding: 8px 16px; 
  border-radius: 8px;
}

.no-button:hover {
  background-color: #c82333; 
}

.text-container {
  font-size: 2.25rem; 
  margin-top: 1rem; 
  margin-bottom: 1rem; 
}

.centered-container {
  display: flex;
  font-size: large;
  font-family: 'Times New Roman', Times, serif;
  flex-direction: column;
  align-items: right;
  justify-content: right;
  height: 100vh;
  margin: 0;
}


</style>
