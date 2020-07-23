<template>
  <section class="section" id="how-works">
    <div class="container how-works">
      <div class="columns">
        <div class="column is-12">
          <h2 class="title">¿Cómo funciona?</h2>
        </div>
      </div>
      <div class="columns">
        <div class="column is-6">
          <div class="content">
            <img v-show="currentId === 1" src="https://via.placeholder.com/200" alt />
            <img v-show="currentId === 2" src="https://via.placeholder.com/202" alt />
            <img v-show="currentId === 3" src="https://via.placeholder.com/203" alt />
          </div>
        </div>
        <div class="column is-6">
          <div class="numbers">
            <template v-for="(item, index) in carousels">
              <div
                class="number"
                :class="{active: item.active}"
                @click="showContent(index)"
                :key="index"
              >{{index+1}}</div>
            </template>
          </div>
          <template v-for="(item, index) in carousels">
            <div class="content-text" v-show="item.active" :key="index">
              <h4 class="subtitle">{{item.title}}</h4>
              <p class="text">{{item.text}}</p>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
#how-works {
  min-height: 600px;
  padding-top: 0;
  display: flex;
  align-items: center;
  @include mobile {
    min-height: 560px;
    align-items: flex-start;
    padding-top: 70px;
  }
  .container {
    max-width: 980px;
  }
  .title {
    font-size: 32px;
    color: var(--color-primary);
    text-align: center;
    margin-bottom: 40px;
    font-weight: bold;
    @include mobile {
      font-size: 24px;
      margin-bottom: 20px;
    }
  }
  .numbers {
    margin-bottom: 32px;
    @include mobile {
      text-align: center;
    }
    .number {
      background-color: transparent;
      font-weight: bold;
      font-size: 30px;
      width: 26px;
      min-width: 26px;
      line-height: 37px;
      text-align: center;
      margin-right: 32px;
      position: relative;
      color: #dee2e6;
      cursor: pointer;
      &:last-child {
        @include mobile {
          margin-right: 0;
        }
      }
      &.active {
        color: var(--color-client);
        &:after {
          content: "";
          bottom: 0;
          position: absolute;
          border-radius: 4px;
          width: 26px;
          height: 5px;
          background-color: var(--color-client);
        }
      }
    }
  }
  .content-text {
    max-width: 300px;
    @include mobile {
      margin: 0 auto;
    }
    .subtitle {
      color: var(--color-client);
      margin-bottom: 18px;
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      @include mobile {
        text-align: center;
      }
    }
    .text {
      font-size: 14px;
      line-height: 20px;
      color: #2b2b2b;
      @include mobile {
        text-align: center;
      }
    }
  }
  .content {
    img {
      float: right;
      margin-right: 60px;
      @include mobile {
        float: none;
        margin: 0 auto;
        display: block;
        width: 126px;
      }
    }
  }
}
</style>
<script>
export default {
  name: "HowWorks",
  data() {
    return {
      currentId: 1,
      carousels: [
        {
          title: "Reserva tú vehículo en segundos",
          text:
            "Escoge tu pickup y drop location y selecciona el vehículo a utilizar. Nosotros nos encargamos del resto",
          active: true,
        },
        {
          title: "m, numquam, ab animi commo",
          text:
            "acere dolorem voluptatum, numquam, ab animi commodi blanditiis reprehenderit in corpor",
          active: false,
        },
        {
          title: "uptatum provident. Re",
          text:
            "sit suscipit ipsa debitis voluptatum provident. Rem totam esse nam mol",
          active: false,
        },
      ],
    };
  },
  methods: {
    showContent(id) {
      this.carousels.map((num) => {
        return (num.active = false);
      });
      this.carousels[id].active = true;
    },
  },
};
</script>
