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
                    <h1 class="mt-5 mb-3" style="font-weight: 500;">SalesJournal</h1>
                    <p class="description mb-3">
                      I helped redesign an entire sales platform by doing a visual exploration of layout, user
                      interactions, and colour palette. After finishing the design, I continuously tested and iterated on
                      new features that were being requested. My days after consisted of working closely with the 2-4
                      developers on the project to ensure designs were being carried out correctly.
                    </p>
                  </v-flex>
                </div>
              </v-card-text>
              <v-container grid-list-md>
                <v-flex xs12 sm10 offset-sm1>
                  <v-layout row wrap class="mb-5">
                    <div class="wrapper">
                      <img :src="image.oldAlert" style="height: auto; width: 100%;">
                      <p class="bottom-center hidden-md-and-down"
                         style="font-size: 1em; font-weight: 700; text-transform: uppercase;">Old Design</p>
                    </div>
                    <div class="wrapper">
                      <img :src="image.newAlert" style="height: auto; width: 100%;">
                      <p class="bottom-center hidden-md-and-down"
                         style="font-size: 1em; font-weight: 700; text-transform: uppercase;">New Design</p>
                    </div>
                    <div class="wrapper">
                      <img :src="image.dashboard" style="height: auto; width: 100%;">
                      <p class="bottom-center hidden-md-and-down"
                         style="font-size: 1em; font-weight: 700; text-transform: uppercase;">New Dashboard</p>
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
      name: 'sales-journal',
      data () {
        return {
          images: [
            {
              title: 'SalesJournal',
              oldAlert: 'https://firebasestorage.googleapis.com/v0/b/donovan-hong.appspot.com/o/assets%2Fportfolio%2Fsalesjournal%2Fsj-old.png?alt=media&token=37598a79-a2d7-4941-9fec-254ca7235d15',
              newAlert: 'https://firebasestorage.googleapis.com/v0/b/donovan-hong.appspot.com/o/assets%2Fportfolio%2Fsalesjournal%2Fsj-new.png?alt=media&token=a3677fc8-4a7f-409e-89d7-623ec25053a3',
              dashboard: 'https://firebasestorage.googleapis.com/v0/b/donovan-hong.appspot.com/o/assets%2Fportfolio%2Fsalesjournal%2Fsj-dashboard.png?alt=media&token=9e3a08d6-2e65-4ba7-b49c-bac218ae6e36'
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
