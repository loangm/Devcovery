<template>
    <section
        id="features2"
        class="grey lighten-3"
      >
        <div class="py-12"></div>

        <v-container class="text-center">
          <h2 class="display-1 font-weight-regular mb-8">Nos services</h2>

          <v-responsive
            class="mx-auto mb-12"
            width="56"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-row>
            <v-col
              v-for="({ icon, title, text }, i) in features"
              :key="i"
              cols="12"
              md="4"
            >
              <v-card
                height="460"
                class="mx-4 py-12 px-4"
                color="grey lighten-5"
                flat
              >
                <v-theme-provider dark>
                  <div>
                    <v-avatar
                      color="#6F8FC0"
                      size="80"
                    >
                      <v-icon
                        large
                        v-text="icon"
                      ></v-icon>
                    </v-avatar>
                  </div>
                </v-theme-provider>

                <v-card-title
                  class="justify-center font-weight text-uppercase"
                  v-text="title"
                ></v-card-title>

                <v-card-text
                  class="subtitle-1"
                  v-text="text"
                >
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>

        <div class="py-12"></div>
      </section>
</template>

<script>

    export default {
    name: 'SectionFeatures2',

    provide: {
      theme: { isDark: false },
    },

    computed: {
      minHeight () {
        const height = this.$vuetify.breakpoint.mdAndUp ? '100vh' : '50vh'

        return `calc(${height} - ${this.$vuetify.application.top}px)`
      },
    },


    data () {
      return {
        features: [
          {
            icon: 'mdi-pencil-ruler',
            title: 'Configuration',
            text: 'Analyse vos besoins et élaboration d\'un modèle adapté en fonction de vos attentes. Vous disposez d\'un large choix d\'outils et de composants de qualité afin de concevoir une site Internet à votre image.',
          },
          {
            icon: 'mdi-briefcase-check',
            title: 'Fiabilité',
            text: 'Une équipe spécialisée dans le digital, l\'informatique et le numérique. Nous sommes capable de fournir un service rapide et de qualité avec un hébergement et un nom de domaine fiable.',
          },
          {
            icon: 'mdi-sync',
            title: 'Suivi personnalisé',
            text: 'Un accompagnement personnalisé tout au long de l\'évolution de votre site Internet et une aide à la migration de votre projet vers un nouvel hébergement.',
          },
        ],
      }
    }
    }
</script>