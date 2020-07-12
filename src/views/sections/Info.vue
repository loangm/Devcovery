<template>
  <v-theme-provider dark>
    <base-section
      id="info-alt"
      class="center grey darken-4">

      <v-responsive
        class="center mx-12"
        max-width="1800">

        <v-container
          fluid>
          <v-row
          class="mx-12">

            <v-col
              align-self="center"
              class="mr-12 my-12"
              cols="12"
              md="2">
              <base-info />
            </v-col>

            <v-col
              class="py-6"
              cols="12"
              md="4">
              <base-info-card title="Contact" />
              <base-business-contact dense />
            </v-col>

          </v-row>
        </v-container>
      </v-responsive>
    </base-section>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'SectionBusinessInfo',
  }
</script>

<style lang="sass">
  #info-alt a
    text-decoration: none
</style>
