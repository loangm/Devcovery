<template>
    <section id="resume">
        <div class="py-12"></div>

        <v-container 
        class="text-center">

          <base-section-heading title="Notre agence">
          </base-section-heading>

          <v-responsive
            class="mx-auto title font-weight-light"
            max-width="720"
          >
            Devcovery est une agence de création de sites Internet personnalisés qui fournit un service de qualité en fonction de vos besoins. 
            Nous proposons différents types de formules selon le service ou le produit que vous désirez mettre en avant sur votre site. 
            Chaque projet est unique et innovant, notre objectif est de produire une expérience utilisateur attractive. 
            À long terme, notre agence pourra également proposer des applications mobiles natives.
          </v-responsive>

          <v-layout
            column>
            <img 
            src="@/assets/logoab.png"
            alt="Vuetify.js" 
            height="140"
            class="mx-auto my-12"
            max-width="140">
          </v-layout>
        </v-container>

        <div class="py-12"></div>
      </section>
</template>

<script>

    export default {
    name: 'SectionResume',

    provide: {
      theme: { isDark: false },
    },

    computed: {
      minHeight () {
        const height = this.$vuetify.breakpoint.mdAndUp ? '100vh' : '50vh'

        return `calc(${height} - ${this.$vuetify.application.top}px)`
      },
    },
    }
</script>