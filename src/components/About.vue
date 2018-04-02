<template>
  <div id="backdrop">
    <!-- HERO -->
    <section id="fadein">
      <v-content>
        <div id="hero">
          <v-container fill-height style="max-width: 1300px;">
            <v-layout column align-center justify-center>
              <div id="header" class="text-xs-left">
                <h1 class="mb-3">Quick Facts 🙋🏻‍♂️  </h1>
                <p>
                  Born in
                  <v-tooltip top>
                    <span slot="activator" class="green--text word">South Africa</span>
                    <span class="headline">🇿🇦</span>
                  </v-tooltip>
                  but raised in
                  <v-tooltip top>
                    <span slot="activator" class="red--text word">Canada</span>
                    <span class="headline">🇨🇦</span>
                  </v-tooltip>.<br>
                  <v-tooltip top>
                    <span slot="activator" class="orange--text word">Basketball</span>
                    <span class="headline">🏀</span>
                  </v-tooltip> is my favourite sport.<br>
                  Previous occupation title was
                  <v-tooltip top>
                    <span slot="activator" class="brown--text word">bean counter</span>
                    <span class="headline">💼</span>
                  </v-tooltip>.<br>
                  I want to be a front-end
                  <v-tooltip top>
                    <span slot="activator" class="blue--text word">wizard</span>
                    <span class="headline">🧙✨</span>
                  </v-tooltip>
                  one day.
                </p>
              </div>
            </v-layout>
          </v-container>
        </div>
      </v-content>
    </section>
    <!-- INFO -->
    <section>
      <v-content id="content">
        <v-container grid-list-xl style="max-width: 1200px;">
          <v-layout row wrap>
            <v-flex xs12>
              <v-layout row wrap>
                <v-flex xs12 md6>
                  <v-card flat color="transparent">
                    <v-card-text>
                      <div>
                        <v-divider class="my-3 red bar"></v-divider>
                        <h2 class="section--title mb-3">Philosophy</h2>
                        <div class="section--text">I believe products should strike a balance between utility, simplicity,
                          and beauty. My goal is to build great products that achieve this balance to empower people
                          to do bigger and better things.
                        </div>
                      </div>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md6>
                  <v-card flat color="transparent">
                    <v-card-text>
                      <div>
                        <v-divider class="my-3 blue bar"></v-divider>
                        <h2 class="section--title mb-3">Process</h2>
                        <div class="section--text">I believe the best products are the result of strong collaboration and
                          rapid iteration. To that end, I blend research, user experience design, interaction design,
                          visual design, prototyping, and coding to create products that solve real problems.
                        </div>
                      </div>
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-flex xs12>
              <v-layout row wrap>
                <v-flex md6>
                  <v-card flat color="transparent">
                    <v-card-text>
                      <div>
                        <v-divider class="my-3 yellow bar"></v-divider>
                        <h2 class="section--title mb-3">Setup</h2>
                        <div class="section--text">I currently enjoy using Sketch to do all my design work in. For
                          prototyping, I use InVision (Craft plugin) and my approach for wireframing varies from
                          Sketch, XD, and Axure RP.
                        </div>
                      </div>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex md3>
                  <v-card flat color="transparent">
                    <v-card-text>
                      <div>
                        <v-divider class="my-3 green bar"></v-divider>
                        <h2 class="section--title mb-3">Skills</h2>
                        <ul class="section--text">
                          <li>UX Research</li>
                          <li>Visual Design</li>
                          <li>Interaction Design</li>
                          <li>Development</li>
                        </ul>
                      </div>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex md3>
                  <v-card flat color="transparent">
                    <v-card-text>
                      <div>
                        <v-divider class="my-3 purple bar"></v-divider>
                        <h2 class="section--title mb-3">Applications</h2>
                        <ul class="section--text">
                          <li>Sketch</li>
                          <li>InVision</li>
                          <li>Adobe XD</li>
                          <li>Adobe Illustrator</li>
                          <li>Adobe Photoshop</li>
                        </ul>
                      </div>
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </section>

    <!-- TECHNOLOGIES -->
    <section>
      <v-content id="technologies">
        <v-container grid-list-xl style="max-width: 1200px; margin-bottom: 88px;">
          <v-layout row wrap>
            <v-flex>
              <v-card flat color="transparent">
                <v-card-text>
                  <div>
                    <v-divider class="my-3 black bar"></v-divider>
                    <h2 class="section--title mb-3">Tools</h2>
                  </div>
                  <v-divider></v-divider>
                  <v-data-table
                    :headers="headers"
                    :items="items"
                    hide-actions
                    hide-headers
                    class="elevation-0">
                    <template slot="items" slot-scope="props">
                      <td width="20px">
                        <v-list-tile-avatar tile>
                          <img :src="props.item.avatar" style="height: 2em;">
                        </v-list-tile-avatar>
                      </td>
                      <td class="section--text hidden-xs-only" style="font-weight: 500; padding-left: 0">
                        {{ props.item.name }}
                      </td>
                      <td class="text-xs-right section--text">{{ props.item.level }}</td>
                    </template>
                  </v-data-table>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </section>

    <!-- FOOTER -->
    <v-footer absolute class="white">
      <v-layout row wrap align-center>
        <div class="hidden-sm-and-down">
          Made with
          <v-icon class="red--text" style="font-size: 1em;">favorite</v-icon>
          using <a class="black--text" href="https://vuetifyjs.com" target="_blank">Vuetify</a>
        </div>
        <v-spacer></v-spacer>
        <div>
          <v-btn
            class="mx-2"
            fab
            flat
            small
            style="font-size: 1.4em"
            href="https://codepen.io/deadstocky/"
            target="_blank">
            <i class="fab fa-codepen"></i>
          </v-btn>
          |
          <v-btn
            class="mx-2"
            fab
            flat
            small
            style="font-size: 1.6em"
            href="https://www.freecodecamp.org/deadstocky"
            target="_blank">
            <i class="fab fa-free-code-camp"></i>
          </v-btn>
          |
          <v-btn
            class="mx-2"
            fab
            flat
            small
            style="font-size: 1.5em;"
            href="https://github.com/deadstocky/"
            target="_blank">
            <i class="fab fa-github"></i>
          </v-btn>
        </div>
        <v-spacer></v-spacer>
        <div class="hidden-sm-and-down">
          &copy; {{ new Date().getFullYear() }} Donovan Hong
        </div>
      </v-layout>
    </v-footer>
  </div>
</template>



<script>
  export default {
    name: 'about',
    data () {
      return {
        headers: [
          {
            text: 'Technologies',
            align: 'left',
            sortable: true,
            value: 'name'
          },
          { text: 'Comfort',
            value: 'level'
          }
        ],
        items: [
          {
            value: false,
            name: 'Sketch',
            avatar: 'https://firebasestorage.googleapis.com/v0/b/donovan-hong.appspot.com/o/assets%2Ftechnologies%2Fsketch.svg?alt=media&token=0abeeec4-ca3b-438e-88b6-0818e699b1ef',
            level: 'Expert'
          },
          {
            value: false,
            name: 'XD',
            avatar: 'https://firebasestorage.googleapis.com/v0/b/donovan-hong.appspot.com/o/assets%2Ftechnologies%2Fadobe-xd.svg?alt=media&token=f0d3087f-95b0-40ed-9592-d0f5c3501c97',
            level: 'Expert'
          },
          {
            value: false,
            name: 'Photoshop',
            avatar: 'https://firebasestorage.googleapis.com/v0/b/donovan-hong.appspot.com/o/assets%2Ftechnologies%2Fadobe-ps.svg?alt=media&token=19ca4d9e-b844-4def-afb9-e382f9216f5a',
            level: 'Expert'
          },
          {
            value: false,
            name: 'Illustrator',
            avatar: 'https://firebasestorage.googleapis.com/v0/b/donovan-hong.appspot.com/o/assets%2Ftechnologies%2Fadobe-il.svg?alt=media&token=fbfe11cf-c784-4f41-842e-22f340dc729b',
            level: 'Expert'
          },
          {
            value: false,
            name: 'After Effects',
            avatar: 'https://firebasestorage.googleapis.com/v0/b/donovan-hong.appspot.com/o/assets%2Ftechnologies%2Fadobe-ae.svg?alt=media&token=7ea189cf-b548-49ac-9bee-da4980a8c366',
            level: 'Novice'
          },
          {
            value: false,
            name: 'InDesign',
            avatar: 'https://firebasestorage.googleapis.com/v0/b/donovan-hong.appspot.com/o/assets%2Ftechnologies%2Fadobe-id.svg?alt=media&token=c0b01c12-09a4-406d-b282-26f727f97135',
            level: 'Intermediate'
          },
          {
            value: false,
            name: 'Zeplin',
            avatar: 'https://firebasestorage.googleapis.com/v0/b/donovan-hong.appspot.com/o/assets%2Ftechnologies%2Fzeplin.svg?alt=media&token=c9e1b593-29ba-46ec-88f7-4a9762571cbc',
            level: 'Intermediate'
          },
          {
            value: false,
            name: 'HTML5',
            avatar: 'https://firebasestorage.googleapis.com/v0/b/donovan-hong.appspot.com/o/assets%2Ftechnologies%2Fhtml5.svg?alt=media&token=c2513852-89de-4b16-98bb-23e0d9b39a9b',
            level: 'Intermediate'
          },
          {
            value: false,
            name: 'CSS3',
            avatar: 'https://firebasestorage.googleapis.com/v0/b/donovan-hong.appspot.com/o/assets%2Ftechnologies%2Fcss3.svg?alt=media&token=b7dea6b7-0108-4735-b9e4-b29d50ce3184',
            level: 'Intermediate'
          },
          {
            value: false,
            name: 'JavaScript',
            avatar: 'https://firebasestorage.googleapis.com/v0/b/donovan-hong.appspot.com/o/assets%2Ftechnologies%2Fjavascript.svg?alt=media&token=5ecb97ef-58aa-43c1-8e50-07fd41f44139',
            level: 'Intermediate'
          },
          {
            value: false,
            name: 'Vue',
            avatar: 'https://firebasestorage.googleapis.com/v0/b/donovan-hong.appspot.com/o/assets%2Ftechnologies%2Fvue.svg?alt=media&token=9c398004-252f-450d-9748-d0ed2b4594dc',
            level: 'Novice'
          },
          {
            value: false,
            name: 'Angular',
            avatar: 'https://firebasestorage.googleapis.com/v0/b/donovan-hong.appspot.com/o/assets%2Ftechnologies%2Fangular.svg?alt=media&token=fc30e5f7-0b96-49a1-babf-d70ae68f9650',
            level: 'Novice'
          },
          {
            value: false,
            name: 'SourceTree',
            avatar: 'https://firebasestorage.googleapis.com/v0/b/donovan-hong.appspot.com/o/assets%2Ftechnologies%2Fsourcetree.svg?alt=media&token=927fd1e2-c9a2-4c58-b467-9c12ab7acbcd',
            level: 'Novice'
          },
          {
            value: false,
            name: 'GitHub',
            avatar: 'https://firebasestorage.googleapis.com/v0/b/donovan-hong.appspot.com/o/assets%2Ftechnologies%2Fgithub.svg?alt=media&token=52b2ef2e-2abd-4ca5-aa32-fb0bb7a643cf',
            level: 'Novice'
          },
          {
            value: false,
            name: 'Axure RP',
            avatar: 'https://firebasestorage.googleapis.com/v0/b/donovan-hong.appspot.com/o/assets%2Ftechnologies%2Faxure.svg?alt=media&token=89febfe0-deba-4d8b-af70-f1015c1fc4cb',
            level: 'Intermediate'
          },
          {
            value: false,
            name: 'InVision',
            avatar: 'https://firebasestorage.googleapis.com/v0/b/donovan-hong.appspot.com/o/assets%2Ftechnologies%2Finvision.svg?alt=media&token=6b33205f-a826-4fa1-9a26-f8e55b59f89d',
            level: 'Expert'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  #fadein  {
    -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 2s; /* Firefox < 16 */
    -ms-animation: fadein 2s; /* Internet Explorer */
    -o-animation: fadein 2s; /* Opera < 12.1 */
    animation: fadein 2s;
  }

  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  /* Firefox < 16 */
  @-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  /* Safari, Chrome and Opera > 12.1 */
  @-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  /* Internet Explorer */
  @-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  /* Opera < 12.1 */
  @-o-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  #backdrop {
    background: #ffffff;
    height: 100%;
    width: 100%;
  }

  #hero {
    height: 80vh;
  }

  #header {
    font-family: 'Quicksand', sans-serif;
  }

  .word {
    cursor: pointer;
    font-weight: 600;
  }

  .bar {
    width: 40px;
    height: 5px;
  }

  .section--title {
    font-size: 1.5em;
    text-transform: uppercase;
    font-family: 'Raleway', sans-serif;
  }

  .section--text {
    font-size: 1.5em;
  }

  ul {
    list-style-type: none;
  }

  h1 {
    font-size: 3em;
  }

  p  {
    font-size: 2.2em;
  }

</style>
