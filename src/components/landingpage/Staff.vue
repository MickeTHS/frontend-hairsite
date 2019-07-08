<template>
  <section class="staff" id="staff">
    <h2>Our Awesome Staff</h2>
    <div class="grid">
      <div class="container">
        <div class="members">
          <i class="material-icons add" v-if="allowEdit">add</i>
          <div class="col" v-for="(member, i) in staff" :key="i">
            <div class="team-member" :style="{background: 'url(' + member.imageURL + ')'}">
              <i class="material-icons delete" v-if="allowEdit" @click="deleteStaff(member.id)">delete</i>
              <div class="infos">
                <h4>{{ member.name }}</h4>
                <p>{{ member.title }}</p>
              </div>
              <div class="social">
                <a :href="network.url" v-for="(network, j) in member.social" :key="j">
                  <img :src="`/img/social/${network.name}.svg`" :alt="network.name">
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['staff', 'allowEdit'],
  methods: {
    deleteStaff(id) {
      this.$store.dispatch("updateStaff", id);
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
.staff {
  .members {
    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .col {
      flex-basis: 20%;
      min-width: 250px;
      max-width: 450px;
      flex-grow: 0;
    }
  }
  .team-member {
    width: 100%;
    height: 350px;
    background-size: cover !important;
    position: relative;
    .infos {
      background-color: rgba(192, 211, 84, 0.9);
      color: #fff;
      text-align: center;
      height: 84px;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding-top: 16px;
      h4 {
        font-style: italic;
      }
      p {
        color: #fff;
      }
    }
    .social {
      position: absolute;
      bottom: 67px;
      left: 0;
      width: 100%;
      display: flex;
      justify-content: center;
      img {
        width: 20px;
      }
      a {
        background-color: $theme1;
        height: 36px;
        width: 36px;
        line-height: 36px;
        border-radius: 50%;
        text-align: center;
        color: #fff;
        margin: 0 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 3px 3px 10px rgba(0, 0, 0, .05);
      }
    }
  }
}
@media (max-width: 1024px) {
  .staff {
    .grid {
      .col {
        flex-basis: 33.3333%;
        flex-grow: 0;
      }
    }
  }
}
@media (max-width: 768px) {
  .staff {
    .grid {
      .col {
        flex-basis: 50%;
        flex-grow: 0;
      }
    }
  }
}
@media (max-width: 600px) {
  .staff {
    .grid {
      .col {
        flex-basis: 100%;
        flex-grow: 0;
      }
    }
  }
}
</style>

