<template>
  <section class="staff" id="staff">
    <!-- <div class="container"> -->
    <h2>Our Awesome Staff</h2>
    <div class="grid">
      <div class="container">
        <div class="members">
          <i class="fas fa-plus" v-if="allowEdit"></i>
          <div class="col" v-for="(member, i) in staff" :key="i">
            <div class="team-member" :style="{background: 'url(' + member.imageURL + ')'}">
              <i class="fas fa-times" v-if="allowEdit" @click="deleteStaff(member.id)"></i>
              <div class="infos">
                <h4>{{ member.name }}</h4>
                <p>{{ member.title }}</p>
              </div>
              <div class="social">
                <a :href="network.url" v-for="(network, j) in member.social" :key="j">
                  <i :class="`fab fa-${network.code}`"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </section>
</template>

<script>
// import Carousel from "@/components/Carousel";
export default {
  props: ["staff", "allowEdit"],
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
      min-width: 260px;
      max-width: 460px;
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
      a {
        background-color: #fff;
        height: 36px;
        width: 36px;
        line-height: 36px;
        border-radius: 50%;
        text-align: center;
        color: $theme1;
        margin: 0 4px;
      }
    }
  }
}
@media (max-width: 1200px) {
  .staff {
    .grid {
      .col {
        flex-basis: 33.3333%;
        flex-grow: 0;
      }
    }
  }
}
@media (max-width: 940px) {
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

