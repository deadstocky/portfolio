<template>
  <v-content id="fadein">
    <v-layout v-for="image in images" :key="image.title">
      <v-flex xs12>
        <v-container class="pa-0 mt-5" fill-height fluid grid-list-md>
          <v-layout row wrap>
            <v-card>
              <v-card-text>
                <div class="text-xs-left">
                  <v-flex xs12 sm8 offset-sm2 md6 offset-md3>
                    <h1 class="mt-5 mb-3" style="font-weight: 500;">Ensemble Website</h1>
                    <p class="description mb-3">
                      I helped update Ensemble's <a href="https://www.ensemble.com" target="_blank">website</a> by
                      designing all second level pages, updating iconography, and handling all mobile designs. I also
                      helped with some development aspects of the site such as small UI adjustments and some form
                      validation corrections.
                    </p>
                  </v-flex>
                </div>
              </v-card-text>
              <v-container grid-list-md>
                <v-flex xs12 sm10 offset-sm1>
                  <v-layout row wrap class="mb-5">
                    <div class="wrapper">
                      <img :src="image.home1" style="height: auto; width: 100%;">
                      <p class="bottom-center hidden-md-and-down"
                         style="font-size: 1em; font-weight: 700; text-transform: uppercase;">Home Top</p>
                    </div>
                    <div class="wrapper">
                      <img :src="image.home2" style="height: auto; width: 100%;">
                      <p class="bottom-center hidden-md-and-down"
                         style="font-size: 1em; font-weight: 700; text-transform: uppercase;">Home Bottom</p>
                    </div>
                    <div class="wrapper">
                      <img :src="image.products" style="height: auto; width: 100%;">
                      <p class="bottom-center hidden-md-and-down"
                         style="font-size: 1em; font-weight: 700; text-transform: uppercase;">Products</p>
                    </div>
                    <div class="wrapper">
                      <img :src="image.mobile" style="height: auto; width: 100%;">
                      <p class="bottom-center hidden-md-and-down"
                         style="font-size: 1em; font-weight: 700; text-transform: uppercase;">Mobile</p>
                    </div>
                  </v-layout>
                </v-flex>
                <v-footer class="white">
                  <v-layout row wrap>
                    <v-flex xs12>
                      <p class="grey--text text-xs-center ma-0">
                        All works &copy; <strong>Donovan Hong</strong> 2018.Please do not reproduce without the
                        expressed written consent of <strong>Donovan Hong</strong>.
                      </p>
                    </v-flex>
                  </v-layout>
                </v-footer>
              </v-container>
            </v-card>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </v-content>
</template>

<script>
    export default {
      name: 'ensemble-website',
      data () {
        return {
          images: [
            {
              title: 'EnsembleWebsite',
              home1: 'https://firebasestorage.googleapis.com/v0/b/donovan-hong.appspot.com/o/assets%2Fportfolio%2Fensemblewebsite%2Feweb-home-1.png?alt=media&token=b253bc32-6f6d-4693-a94a-fceae119e64d',
              home2: 'https://firebasestorage.googleapis.com/v0/b/donovan-hong.appspot.com/o/assets%2Fportfolio%2Fensemblewebsite%2Feweb-home-2.png?alt=media&token=b84eb75a-3a16-46e8-a20d-062661205899',
              products: 'https://firebasestorage.googleapis.com/v0/b/donovan-hong.appspot.com/o/assets%2Fportfolio%2Fensemblewebsite%2Feweb-products.png?alt=media&token=ba393bda-7c96-4bd3-8e4b-0fa8f3639270',
              mobile: 'https://firebasestorage.googleapis.com/v0/b/donovan-hong.appspot.com/o/assets%2Fportfolio%2Fensemblewebsite%2Feweb-mobile.png?alt=media&token=117c8534-7837-465c-a5a0-f7fe885ef829'
            }
          ]
        }
      }
    }
</script>

<style scoped>
  a {
    text-decoration: none;
  }

  .description {
    color: #333;
    font-size: 1.2em;
    line-height: 30px;
    font-weight: 100;
  }
  .wrapper {
    position: relative;
    text-align: center;
    color: white;
  }
  .bottom-center {
    position: absolute;
    bottom: 0em;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
