<template>
  <div id="backdrop">
    <v-container fill-height>
      <v-layout
        column
        align-center
        justify-center>
        <section id="fadein">
          <div class="text-xs-left">
            <div id="header">
              <h1 class="mb-3" style="font-weight: 500">Hello! 👋🏼</h1>
              <p class="mb-5" style="max-width: 700px;">
                I'm <span class="blue--text" style="font-weight: bold">Donovan</span> - UI/ UX Designer trying to help create useful and beautiful products, services, and experiences.
              </p>
            </div>
            <v-btn
              id="linkedin"
              icon
              large
              outline
              href="https://www.linkedin.com/in/donovanhong"
              target="_blank">
              <i class="fab fa-linkedin-in"></i>
            </v-btn>
            <v-btn
              icon
              large
              outline
              href="mailto:donovanhong@gmail.com">
              <i class="fas fa-envelope"></i>
            </v-btn>
            <v-btn
              round
              large
              dark
              href="https://firebasestorage.googleapis.com/v0/b/donovan-hong.appspot.com/o/assets%2Fresume%2FCV.pdf?alt=media&token=434ae888-d2b3-476b-9c5d-e3ba48f4a2da"
              target="_blank">
              Resume
            </v-btn>
          </div>
        </section>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
    export default {
      name: 'home'
    }
</script>

<style scoped>
  #backdrop {
    animation: colorchange 50s infinite;
    -webkit-animation: colorchange 50s infinite;
    height: 100%;
    width: 100%;
  }

  @keyframes colorchange
  {
    0%   {background: #ffffff;}
    25%  {background: #f3f9ff;}
    50%  {background: #efefef;}
    75%  {background: #ebf0f5;}
    100% {background: #ffffff;}
  }

  @-webkit-keyframes colorchange /* Safari and Chrome - necessary duplicate */
  {
    0%   {background: #ffffff;}
    25%  {background: #f3f9ff;}
    50%  {background: #efefef;}
    75%  {background: #ebf0f5;}
    100% {background: #ffffff;}
  }

  #header {
    font-family: 'Quicksand', sans-serif;
    font-weight: 400;
  }

  #linkedin {
    margin-left: 0;
  }

  h1 {
    font-size: 3em;
  }

  p  {
    font-size: 2.2em;
  }

</style>
