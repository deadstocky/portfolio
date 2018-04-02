<template>
  <div id="backdrop">
    <v-container fill-height>
      <v-content>
        <v-layout id="jumbotron" column align-center justify-center>
          <img class="mb-5" src="/static/dh_tag.png" alt="donovanhong_tag" height="50">
          <h2 class="mb-5 white--text">PORTFOLIO <span class="blue--text">COMING SOON</span></h2>
        </v-layout>
      </v-content>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'placeholderPortfolio'
  }
</script>

<style scoped>
  #backdrop {
    animation: colorchange 50s infinite;
    -webkit-animation: colorchange 50s infinite;
    height: 100%;
    width: 100%;
    margin: 0;
  }

  @keyframes colorchange
  {
    0%   {background: #212121;}
    25%  {background: #213447;}
    50%  {background: #214161;}
    75%  {background: #213447;}
    100% {background: #212121;}
  }

  @-webkit-keyframes colorchange /* Safari and Chrome - necessary duplicate */
  {
    0%   {background: #212121;}
    25%  {background: #213447;}
    50%  {background: #214161;}
    75%  {background: #213447;}
    100% {background: #212121;}
  }

  #jumbotron {
    font-family: 'Quicksand', sans-serif;
  }

  a:hover i {
    color: #04A9F4;
  }

  h2  {
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 6px;
  }

  @media only screen and (max-width: 430px) {
    h2 {
      font-size: 1rem;
    }
  }

  @media only screen and (max-width: 355px) {
    h2 {
      font-size: .8rem;
    }
  }

  p {
    font-size: 18px;
    letter-spacing: 3px;
  }

</style>
