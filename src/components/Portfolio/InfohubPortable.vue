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
                    <h1 class="mt-5 mb-3" style="font-weight: 500;">Infohub Portable</h1>
                    <p class="description mb-3">
                      Briggs & Stratton wanted to redo their existing mobile application from AEM mobile to PhoneGap.
                      I helped redesign their app by being more user friendly, including new features, and more
                      responsive for iOS and Android devices. The design process included wireframing, prototyping, and
                      visual designs. I worked closely with two developers to make sure the designs were being matched.
                      I was also able to help fix some UI bugs since I was interested in the VueJS framework.
                    </p>
                  </v-flex>
                </div>
              </v-card-text>
              <v-container grid-list-md>
                <v-flex xs12 sm10 offset-sm1>
                  <v-layout row wrap class="mb-5">
                    <div class="wrapper">
                      <img :src="image.low" style="height: auto; width: 100%;">
                      <p class="bottom-center hidden-md-and-down"
                         style="font-size: 1em; font-weight: 700; text-transform: uppercase;">Low Fidelity</p>
                    </div>
                    <div class="wrapper">
                      <img :src="image.mid" style="height: auto; width: 100%;">
                      <p class="bottom-center hidden-md-and-down"
                         style="font-size: 1em; font-weight: 700; text-transform: uppercase;">Mid Fidelity</p>
                    </div>
                    <div class="wrapper">
                      <img :src="image.final1" style="height: auto; width: 100%;">
                      <p class="bottom-center hidden-md-and-down"
                         style="font-size: 1em; font-weight: 700; text-transform: uppercase;">Final 1</p>
                    </div>
                    <div class="wrapper">
                      <img :src="image.final2" style="height: auto; width: 100%;">
                      <p class="bottom-center hidden-md-and-down"
                         style="font-size: 1em; font-weight: 700; text-transform: uppercase;">Final 2</p>
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
      name: 'infohub-portable',
      data () {
        return {
          images: [
            {
              title: 'InfohubPortable',
              low: 'https://firebasestorage.googleapis.com/v0/b/donovan-hong.appspot.com/o/assets%2Fportfolio%2Finfohubportable%2Finfo-low.png?alt=media&token=1919928f-dca0-4f13-a26c-1bc1ed6e94ca',
              mid: 'https://firebasestorage.googleapis.com/v0/b/donovan-hong.appspot.com/o/assets%2Fportfolio%2Finfohubportable%2Finfo-mid.png?alt=media&token=5b9ce3c0-742f-409f-8b29-66dc42a816b0',
              final1: 'https://firebasestorage.googleapis.com/v0/b/donovan-hong.appspot.com/o/assets%2Fportfolio%2Finfohubportable%2Finfo-final-1.png?alt=media&token=1f940c86-a1dd-4989-a25a-4e17f7df54f8',
              final2: 'https://firebasestorage.googleapis.com/v0/b/donovan-hong.appspot.com/o/assets%2Fportfolio%2Finfohubportable%2Finfo-final-2.png?alt=media&token=e3cef31b-a5d5-4db2-9c23-f7445a2e3591'
            }
          ]
        }
      }
    }
</script>

<style scoped>
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
