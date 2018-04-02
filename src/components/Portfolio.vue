<template>
  <div id="backdrop">
    <v-layout column align-center justify-center style="margin-top: 68px; margin-bottom: 38px">
      <v-container grid-list-md fill-height style="max-width: 1400px;">
        <v-layout row wrap>
          <v-flex xs12 md6
                  v-for="project in projects"
                  :key="project.title">
            <v-card id="fadein" color="transparent" flat ripple hover :to="project.link">
              <v-container pa-4>
                <v-card flat color="transparent">
                  <v-card-media
                    :src="project.image"
                    height="320px">
                  </v-card-media>
                  <v-card-title primary-title>
                    <div>
                      <span class="headline">{{ project.title }}</span><br>
                      <span class="grey--text">{{ project.platform }} / {{project.year}}</span>
                    </div>
                  </v-card-title>
                </v-card>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
  </div>
</template>

<script>
    export default {
      name: 'portfolio',
      data () {
        return {
          projects: [
            {
              title: 'Infohub PORTABLE',
              platform: 'Web Application',
              year: 2018,
              image: 'https://firebasestorage.googleapis.com/v0/b/donovan-hong.appspot.com/o/assets%2Fportfolio%2Finfohubportable%2Finfo-cover.png?alt=media&token=47bcd322-991a-4fe7-8228-1ee2b1c0cc60',
              link: '/infohubportable'
            },
            {
              title: 'SalesJournal',
              platform: 'Web Application',
              year: 2017,
              image: 'https://firebasestorage.googleapis.com/v0/b/donovan-hong.appspot.com/o/assets%2Fportfolio%2Fsalesjournal%2Fsj-cover.png?alt=media&token=fac77cf7-0460-417d-99d4-21391fd6f418',
              link: '/salesjournal'
            },
            {
              title: 'Ensemble Website',
              platform: 'Website',
              year: 2017,
              image: 'https://firebasestorage.googleapis.com/v0/b/donovan-hong.appspot.com/o/assets%2Fportfolio%2Fensemblewebsite%2Feweb-cover.png?alt=media&token=b83bf50b-11e0-4f50-803b-da277b4a9532',
              link: '/ensemblewebsite'
            },
            {
              title: 'Sponsorship Portal',
              platform: 'Web Application',
              year: 2017,
              image: 'https://firebasestorage.googleapis.com/v0/b/donovan-hong.appspot.com/o/assets%2Fportfolio%2Fsponsorshipportal%2Fspons-cover.png?alt=media&token=d24edba4-7f33-40cd-b368-d69cb720ba58',
              link: '/sponsorshipportal'
            }
          ]
        }
      }
    }
</script>

<style scoped>
  #backdrop {
    width: 100vw;
  }
</style>
