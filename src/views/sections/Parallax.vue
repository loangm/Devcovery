<template>
          <section id="parallax">
        <v-parallax
          :height="$vuetify.breakpoint.smAndDown ? 500 : 400"
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=120"
        >
        </v-parallax>
      </section>
</template>

<script>

    export default {
    name: 'SectionParallax',

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