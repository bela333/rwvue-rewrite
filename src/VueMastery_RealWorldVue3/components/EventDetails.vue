<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script setup lang="ts">
  import EventService from "@/VueMastery_RealWorldVue3/services/EventService";
  import { onMounted, ref } from "vue";
  import IEvent from "../types/IEvent";

  const event = ref<IEvent>();
  const props = defineProps({
    id: {
      type: Number,
      required: true,
    },
  });

  onMounted(() => {
    EventService.getEvent(props.id)
      .then((response) => {
        event.value = response.data;
      })
      .catch(console.log);
  });
</script>
