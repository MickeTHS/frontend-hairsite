<template>
  <section class="about" id="about">
    <div class="container">
      <h2>Who We Are</h2>
      <div class="grid">
        <div class="col" style="background: url(/img/img-1.jpg)"></div>
        <div class="col">
          <p>Welcome to TechPlalace Salon! We believe in creativity, to see who you are and listen to who you want to be. From that we create your look. We are a strong team in constant development working towards one and the same goal; to give you a personalized overall experience!</p>
          <p>We take time for our customers, offer careful consultations and tailor-made treatments. Getting to us should at the same time feel relaxing and exclusive. exclusive product line that takes care of the quality of the hair through high quality raw materials and gives expressive style through its exceptional styling ability.</p>
        </div>
      </div>
    </div>
  </section>
</template>
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

