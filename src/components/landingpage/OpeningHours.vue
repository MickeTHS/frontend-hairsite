<template>
  <section class="opening-hours">
    <div class="container">
      <h2>Opening Hours</h2>
      <ul>
        <i class="material-icons edit" v-if="allowEdit" :style="{background: theme}" @click="$emit('updateOpeningHours')">edit</i>
        <li v-for="(item, index) in openingHours" :key="index">
          <div class="day">
            <span>{{ item.day }}</span>
          </div>
          <div class="morning">
            <span v-if="item.hours[0]">{{ item.hours[0] }} - {{ item.hours[1] }}</span><span v-else>salon closed</span>
          </div>
          <div class="afternoon">
            <span v-if="item.hours[2]">{{ item.hours[2] }} - {{ item.hours[3] }}</span><span v-else>salon closed</span>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  props: ['openingHours', 'allowEdit', 'theme']
};
</script>

<style lang="scss">
.opening-hours {
  ul {
    position: relative;
    li {
      width: 800px;width: 100%;
      max-width: 1000px !important;
      margin: 0 auto;
      max-width: 100%;
      display: flex;
      justify-content: space-between;
      overflow: hidden;
      flex-wrap: nowrap;
      line-height: 1.8;
      &:before {
        content: ". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .";
        float: left;
        width: 0;
        white-space: nowrap;
        color: #afafaf;
      }
      div {
        width: 33.33333%;
        span {
          background-color: #fff;
        }
        &:first-child {
          text-align: left;
        }
        &:nth-child(2) {
          text-align: center;
        }
        &:last-child {
          text-align: right;
        }
      }
    }
  }
}
</style>

