<template>
  <v-theme-provider dark>
    <base-section
      id="contact-us"
      class="primary"
      space="40"
    >
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="10">
            <base-title
              :space="$vuetify.breakpoint.mdAndUp ? 0 : 4"
              title="Vous avez des questions ? Contactez-nous !"
            />

            <base-body space="0">
              <span class="white--text">
                Notre équipe répond à toutes vos demandes sous 24h.
              </span>
            </base-body>
          </v-col>

          <v-col
            cols="12"
            md="2"
          >

            <base-btn
              class="font-weight-bold"
              :block="$vuetify.breakpoint.smAndDown"
              color="white"
              light
              href="mailto:help.devcovery@gmail.com?subject=Question%20à%20propos%20de%20Devcovery"
              large
              outlined
              target="_blank">
              
              Nous écrire

              <v-icon right>
                mdi-email
              </v-icon>
            </base-btn>
          </v-col>
        </v-row>
      </v-container>
    </base-section>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'SectionContactUs',
  }
</script>
