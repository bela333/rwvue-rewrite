<template>
  <h1>Events for Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script setup lang="ts">
  import EventService from "@/VueMastery_RealWorldVue3/services/EventService";
  import EventCard from "@/VueMastery_RealWorldVue3/components/EventCard.vue";
  import { onMounted, ref } from "vue";
  import IEvent from "../types/IEvent";

  const events = ref<IEvent[]>([]);

  onMounted(() => {
    EventService.getEvents()
      .then((response) => {
        events.value = response.data;
      })
      .catch(console.log);
  });
</script>

<style scoped>
  .events {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
