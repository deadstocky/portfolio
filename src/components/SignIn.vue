<template>
  <v-container fluid text-xs-center>
    <v-layout>
      <v-flex xs10 offset-xs1 sm6 offset-sm3 md4 offset-md4>
        <form @submit.prevent="onSignIn" v-model="valid">
          <v-layout row wrap>
            <v-flex xs12>
              <v-text-field
                name="email"
                label="Email"
                id="email"
                v-model="email"
                :rules="emailRules"
                required>
              </v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                name="password"
                label="Password"
                id="password"
                v-model="password"
                type="password"
                min="8"
                required>
              </v-text-field>
            </v-flex>
            <v-flex align-center>
              <v-btn type="submit" fab small class="blue"><i class="fas fa-unlock white--text"></i></v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
    export default {
      name: 'sign-in',
      data () {
        return {
          valid: false,
          email: '',
          emailRules: [
            v => !!v || 'Required',
            v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Need a valid email'
          ],
          password: ''
        }
      },
      computed: {
        user () {
          return this.$store.getters.user
        },
        error () {
          return this.$store.getters.error
        }
      },
      watch: {
        user (value) {
          if (value !== null && value !== undefined) {
            this.$router.push('/portfolio')
          }
        }
      },
      methods: {
        onSignIn () {
          this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
        }
      }
    }
</script>

<style scoped>

</style>
