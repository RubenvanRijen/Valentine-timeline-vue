<template>
  <v-app>
    <div style="justify-content: center; text-align: center; display: flex">
      <div class="container" style="text-align: center; max-width: 400px">
        <h2
          class="centered-text bold-text"
          style="font-family: 'Comic Sans MS', cursive, sans-serif"
        >
          The most special and beautiful moments together with my big beloved GF
        </h2>
        <img
          class="max-size"
          src="https://media1.tenor.com/m/M0Sy7NiaaX4AAAAC/red-heart-heart.gif"
        />
      </div>
    </div>
    <v-timeline>
      <v-timeline-item v-for="(item, index) in items" :key="index" :color="item.text" small>
        <template v-slot:icon>
          <v-avatar>
            <img style="width: 50%; background-color: white" :src="heart" />
          </v-avatar>
        </template>
        <template v-slot:opposite>
          <span
            :class="`headline font-weight-bold ${item.color}--text align-opposite`"
            v-text="item.date"
            ref="timelineItems"
          ></span>
        </template>
        <div
          :class="`py-4 ${index % 2 === 1 ? 'text-end' : ''} item-hidden`"
          ref="timelineItems"
          :data-index="index"
        >
          <img :src="item.image" alt="GF" class="responsive-image" />
          <h2 :class="`headline font-weight-light mb-4 ${item.color}--text`">{{ item.title }}</h2>
          <div>
            {{ item.text }}
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </v-app>
</template>

<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue'
import heart from '@/assets/images/heart.png'
import image1 from '@/assets/images/image-1.jpg'
import image2 from '@/assets/images/image-2.jpg'
import image3 from '@/assets/images/image-3.jpg'
import image4 from '@/assets/images/image-4.jpg'

const items = ref([
  {
    title: 'Title',
    date: '17-04-2023',
    color: 'primary',
    text: 'text',
    image: image1
  },
  {
    title: 'Title',
    date: '17-04-2023',
    color: 'primary',
    text: 'text',
    image: image2
  },
  {
    title: 'Title',
    date: '17-04-2023',
    color: 'primary',
    text: 'text',
    image: image3
  },
  {
    title: 'Title',
    date: '17-04-2023',
    color: 'primary',
    text: 'text',
    image: image4
  }
  // Add more items as needed
])

const timelineItems: Ref<Element[]> = ref([])

onMounted(() => {
  observeItems()
})

function observeItems() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute('data-index'))
          const className = index % 2 === 1 ? 'item-fly-in-left' : 'item-fly-in-right'
          entry.target.classList.remove('item-hidden')
          entry.target.classList.add(className)
        }
      })
    },
    {
      threshold: 0.1
    }
  )

  timelineItems.value.forEach((item) => {
    if (item) observer.observe(item)
  })
}
</script>
<style scoped>
.responsive-image {
  width: 100%;
}

.text-end {
  text-align: end;
}

@media (min-width: 768px) {
  .responsive-image {
    width: 40%;
  }

  .align-opposite {
    text-align: center;
  }
}

.item-fly-in-left {
  animation: fly-in-left 1.5s forwards;
}

.item-fly-in-right {
  animation: fly-in-right 1.5s forwards;
}

@keyframes fly-in-left {
  0% {
    opacity: 0;
    transform: translateX(-5000px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fly-in-right {
  0% {
    opacity: 0;
    transform: translateX(5000px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
.item-hidden {
  opacity: 0;
}

.centered-text {
  text-align: center;
  display: flex;
  justify-content: center;
}

.bold-text {
  font-weight: bold;
}

.max-size {
  max-width: 100%;
  height: auto;
}
.v-avatar {
  background-color: white;
}
</style>
