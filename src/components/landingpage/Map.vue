<template>
  <div class="map" id="map"></div>
</template>
<script>
export default {};
</script>
<script>
export default {
  data() {
    return {
      lat: 27.1494174,
      lng: -13.2006577
    };
  },
  methods: {
    renderMap() {
      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: this.lat, lng: this.lng },
        zoom: 17
      });
      const marker = new google.maps.Marker({
        position: {lat: this.lat, lng: this.lng},
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

