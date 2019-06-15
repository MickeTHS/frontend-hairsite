<template>
  <section class="staff" id="staff">
    <div class="container">
      <h2>Our Awesome Staff</h2>
      <div class="grid">
        <div class="col" v-for="(member, i) in staff" :key="i">
          <div class="team-member" :style="{background: 'url(' + member.imageURL + ')'}">
            <div class="info">
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
  </section>
</template>

<script>
export default {
  props: ['staff']
}
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
.staff {
  .team-member {
    width: 240px;
    height: 350px;
    background-size: cover !important;
    position: relative;
    .info {
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
    flex-wrap: wrap;
    justify-content: center;
    .grid {
      .col {
        flex-grow: 0;
      }
    }
  }
}
</style>

