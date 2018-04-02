<template>
  <v-app light>
    <!-- TOOLBAR -->
    <nav>
      <v-toolbar id="toolbar" flat dense fixed class="white">
        <v-toolbar-title>
          <v-btn href="/" icon>
            <img src="/static/favicon-120x120.png" alt="Donovan Hong Logo" height="30">
          </v-btn>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn flat href="/portfolio">Portfolio</v-btn>
          <v-btn flat href="/about">About</v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </nav>
    <!-- PAGES -->
    <v-content>
      <v-container class="pa-0" fluid fill-height>
        <v-layout justify-center align-center>
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>

<style>
  a:hover i {
    color: #1B75BB;
  }

  @media only screen and (max-width: 430px) {
    html {
      font-size: 0.7em;
    }
  }

  @media only screen and (max-width: 355px) {
    html {
      font-size: 0.6em;
    }
  }

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

</style>
