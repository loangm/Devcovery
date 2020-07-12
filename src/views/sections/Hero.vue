<template>
  <section id="hero">
    <v-img
      height="700"
      :min-height="minHeight"
      src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
      class="white--text"
      gradient="to right, rgba(5, 11, 31, 1), rgba(5, 11, 31, .8)"
    >
      <v-container class="fill-height px-12 pb-12">
        <v-responsive
          class="d-flex align-center"
          height="100%"
          max-width="800"
          width="100%"
        >
          <base-heading title="Créez votre propre site Internet avec Devcovery" />

          <base-body>
            Agence de développement web, conseil et création de sites Internet personnalisés
          </base-body>

        </v-responsive>
      </v-container>
    </v-img>
  </section>
</template>

<script>
  export default {
    name: 'SectionHero',

    provide: {
      theme: { isDark: true },
    },

    computed: {
      minHeight () {
        const height = this.$vuetify.breakpoint.mdAndUp ? '100vh' : '50vh'

        return `calc(${height} - ${this.$vuetify.application.top}px)`
      },
    },
  }
</script>
