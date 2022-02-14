<template>
  <h1>Events for Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
  import EventCard from "@/VueMastery_RealWorldVue3/components/EventCard.vue";
  import EventService from "@/VueMastery_RealWorldVue3/services/EventService.js";
  export default {
    name: "EventList",
    components: {
      EventCard,
    },
    data() {
      return {
        events: null,
      };
    },
    created() {
      EventService.getEvents()
        .then((response) => {
          this.events = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  };
</script>

<style scoped>
  .events {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
