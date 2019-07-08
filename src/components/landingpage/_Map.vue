<template>
  <div class="map" id="map"></div>
</template>
<script>
export default {};
</script>
<script>
export default {
  props: ['coord'],
  methods: {
    renderMap() {
      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: this.coord.lat, lng: this.coord.lng },
        zoom: 17
      });
      const marker = new google.maps.Marker({
        position: {lat: this.coord.lat, lng: this.coord.lng},
        map
      })
    }
  },
  mounted() {
    this.renderMap();
  }
};
</script>

<style lang="scss">
.map {
  width: 100%;
  height: 500px;
}
</style>

