<template>
 <div class="card-carousel-wrapper">
    <div class="card-carousel-nav-left" @click="moveCarousel(-1)" :disabled="atHeadOfList"></div>
    <div class="card-carousel">
      <div class="card-carousel-overflow-container">
        <div class="card-carousel-cards" :style="{ transform: 'translateX' + '(' + currentOffset + 'px' + ')'}">
          <slot/>
        </div>
      </div>
    </div>
    <div class="card-carousel-nav-right" @click="moveCarousel(1)" :disabled="atEndOfList"></div>
 </div>
</template>
<script>
export default {
  data() {
    return {
      currentOffset: 0,
      windowSize: 4,
      paginationFactor: 260,
      itemsLength: 4
    }
  },
  watch: {
    windowSize(newSize, oldSize){
      console.log('size changed from: ' + oldSize + ' to: ' + newSize)
    }
  },
  mounted(){
    this.windowSize = Math.floor((window.innerWidth - 100) / this.paginationFactor)
    window.addEventListener('resize', () => {
        this.windowSize = Math.floor((window.innerWidth - 100) / this.paginationFactor)
    })
  },
  computed: {
    atEndOfList() {
      return this.currentOffset <= (this.paginationFactor * -1) * (this.itemsLength - this.windowSize);
    },
    atHeadOfList() {
      return this.currentOffset === 0;
    },
  },
  methods: {
    moveCarousel(direction) {
      // Find a more elegant way to express the :style. consider using props to make it truly generic
      if (direction === 1 && !this.atEndOfList) {
        this.currentOffset -= this.paginationFactor;
      } else if (direction === -1 && !this.atHeadOfList) {
        this.currentOffset += this.paginationFactor;
      }
    },
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
.card-carousel-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  color: #666;
}

.card-carousel {
  display: flex;
  justify-content: center;
  width: 1024px;
  
  &-overflow-container {
    overflow: hidden;
  }
  
  &-nav-left,
  &-nav-right {
    display: inline-block;
    width: 7px;
    height: 7px;
    padding: 7px;
    box-sizing: border-box;
    border-top: 2px solid $theme1;
    border-right: 2px solid $theme1;
    cursor: pointer;
    margin: 0 10px;
    transition: transform 150ms linear;
    &[disabled] {
      opacity: 0.2;
      border-color: #000;
    }
  }
  
  &-nav-left {
    transform: rotate(-135deg);
    &:active {
      transform: rotate(-135deg) scale(0.9);
    }
  }
  
  &-nav-right {
    transform: rotate(45deg);
    &:active {
      transform: rotate(45deg) scale(0.9);
    }
  }
}

.card-carousel-cards {
  display: flex;
  transition: transform 150ms ease-out;
  transform: translatex(0px);
}

@media (max-width: 1130px) {
  .card-carousel {
    width: 780px;
  }
}

@media (max-width: 880px) {
  .card-carousel {
    width: 520px;
  }
}
@media (max-width: 600px) {
  .card-carousel {
    width: 260px;
  }
}
</style>

