<template>
      <section id="hero2">
          <v-img
            height="700"
            :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
            src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
            gradient="to top, #0149, #000f"
          >
            <v-theme-provider dark>
              <v-container fill-height>
                <v-row
                  align="center"
                  class="white--text mx-auto"
                  justify="center"
                >
                  <v-col
                    class="white--text text-center mb-12"
                    cols="12"
                    tag="h1"
                  >
                    <span
                    :class="[$vuetify.breakpoint.smAndDown ? 'display-3' : 'display-4']"
                      class="font-weight-regular"
                    >
                      Devcovery
                    </span>

                    <br>

                    <span
                      :class="[$vuetify.breakpoint.smAndDown ? 'display-1': 'display-2']"
                      class="font-weight-light subtitle-2"
                    >
                      Agence de développement Web
                    </span>

                  </v-col>
                </v-row>
              </v-container>
            </v-theme-provider>
          </v-img>
      </section>
</template>

<script>

    export default {
    name: 'SectionHero2',

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