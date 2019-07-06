<template>
  <section class="about" id="about">
    <div class="container">
      <h2>Who We Are</h2>
      <div class="grid">
        <div class="col" style="background: url(/img/img-1.jpg)"></div>
        <div class="col">
          <i class="far fa-edit" v-if="allowEdit"></i>
          <p>{{ salon.frontend_opts.about }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['allowEdit', 'salon']
}
</script>

<style lang="scss">
.about {
  overflow: hidden;
  .grid {
    display: flex;
    justify-content: flex-end;
    position: relative;
    .col {
      &:first-child {
        position: absolute;
        left: 0;
        top: -3%;
        height: 106%;
        width: 60%;
        background-size: cover !important;
      }
      &:last-child {
        float: right;
        z-index: 2;
        position: relative;
        background: rgba(249, 249, 249, 0.95);
        box-shadow: 0 0 10px rgba(66, 66, 66, 0.1);
        padding: 24px 32px;
        width: 60%;
        flex-grow: 0;
        p {
          line-height: 1.8;
          width: 100%;
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
@media (max-width: 900px) {
  .about {
    .grid {
      .col {
        &:last-child {
          width: 80%;
        }
      }
    }
  }
}
@media (max-width: 600px) {
  .about {
    .grid {
      .col {
        &:first-child {
          display: none;
        }
        &:last-child {
          width: 100%;
          box-shadow: none;
        }
      }
    }
  }
}
@media (max-width: 400px) {
  .about {
    .grid {
      .col {
        &:last-child {
          padding: 0;
          background-color: #fff;
          text-align: justify;
        }
      }
    }
  }
}
</style>

