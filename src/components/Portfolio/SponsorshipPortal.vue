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
                    <h1 class="mt-5 mb-3" style="font-weight: 500;">Sponsorship Portal</h1>
                    <p class="description mb-3">
                      I explored user research, user flow, wireframes, and visual design throughout this project. The
                      web application was extremely in-depth and required extensive iterations and meetings in order to
                      finalize designs. I worked closely with another designer where we would present our designs via
                      conference to Viacom’s business and development teams each week in order to finalize them.
                    </p>
                  </v-flex>
                </div>
              </v-card-text>
              <v-container grid-list-md>
                <v-flex xs12 sm10 offset-sm1>
                  <v-layout row wrap class="mb-5">
                    <div class="wrapper">
                      <img :src="image.oldList" style="height: auto; width: 100%;">
                      <p class="bottom-center hidden-md-and-down"
                         style="font-size: 1em; font-weight: 700; text-transform: uppercase;">Old Design</p>
                    </div>
                    <div class="wrapper">
                      <img :src="image.newList" style="height: auto; width: 100%;">
                      <p class="bottom-center hidden-md-and-down"
                         style="font-size: 1em; font-weight: 700; text-transform: uppercase;">New Design</p>
                    </div>
                    <div class="wrapper">
                      <img :src="image.dashboard" style="height: auto; width: 100%;">
                      <p class="bottom-center hidden-md-and-down"
                         style="font-size: 1em; font-weight: 700; text-transform: uppercase;">Dashboard</p>
                    </div>
                    <div class="wrapper">
                      <img :src="image.form" style="height: auto; width: 100%;">
                      <p class="bottom-center hidden-md-and-down"
                         style="font-size: 1em; font-weight: 700; text-transform: uppercase;">Form</p>
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
      name: 'sponsorship-portal',
      data () {
        return {
          images: [
            {
              title: 'SponsorshipPortal',
              oldList: 'https://firebasestorage.googleapis.com/v0/b/donovan-hong.appspot.com/o/assets%2Fportfolio%2Fsponsorshipportal%2Fspons-old.png?alt=media&token=0b203f9d-a815-4d45-a1b4-6b80b96893d5',
              newList: 'https://firebasestorage.googleapis.com/v0/b/donovan-hong.appspot.com/o/assets%2Fportfolio%2Fsponsorshipportal%2Fspons-new.png?alt=media&token=4fc626cf-324a-49b1-b472-d1e34e88bf29',
              dashboard: 'https://firebasestorage.googleapis.com/v0/b/donovan-hong.appspot.com/o/assets%2Fportfolio%2Fsponsorshipportal%2Fspons-dashboard.png?alt=media&token=efb2ef35-1a74-49c0-8ba0-1bcdb6263d0b',
              form: 'https://firebasestorage.googleapis.com/v0/b/donovan-hong.appspot.com/o/assets%2Fportfolio%2Fsponsorshipportal%2Fspons-form.png?alt=media&token=1c31aedf-8a4f-4fea-bbee-25941a8978cd'
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
