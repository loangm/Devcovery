<template>
  <v-footer
    id="home-footer"
    color="grey darken-4"
    dark
    min-height="72"
  >
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="6">
          <div class="d-flex flex-wrap justify-md-start justify-center justify-md-none">
          </div>
        </v-col>

        <v-col
          class="text-center text-md-right"
          cols="12"
          md="6"
        >
          &copy; 2020 Devcovery
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
  export default {
    name: 'HomeFooter',

    data: () => ({
      social: [
        'Facebook',
        'Twitter',
        'Instagram',
        'Linkedin',
      ],
    }),
  }
</script>

<style lang="sass">
  #home-footer a
    text-decoration: none
</style>
