<template>
      <section id="projet">
        <div class="py-12"></div>

        <v-container>

          <base-section-heading title="Votre projet">
          </base-section-heading>

          <v-row>
            <v-col
              v-for="({ src, text, title }, i) in articles"
              :key="i"
              cols="12"
              md="4"
            >
              <v-img
                :src="src"
                class="mb-4"
                height="275"
                max-width="100%"
              ></v-img>

              <div
                class="pl-4 title mb-4 text-uppercase"
                v-text="title"
              ></div>

              <div
                class="pl-4 mb-5"
                v-text="text"
              ></div>
            </v-col>
          </v-row>
        </v-container>

        <div class="py-12"></div>
      </section>

</template>

<script>

    export default {
    name: 'SectionProjet',

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
        articles: [
          {
            src: 'https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
            title: 'Responsive',
            text: 'Un site Internet accessible via tous les appareils disposant d\'un navigateur et d\'une connexion Internet.',
          },
          {
            src: 'https://images.unsplash.com/photo-1561517146-00b7595cb96c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
            title: 'Adaptable',
            text: 'Besoin d\'un changement ? Notre agence est joignable à tout moment pour vous et capable de gérer vos demandes à distance.',
          },
          {
            src: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
            title: 'Design',
            text: 'Un site qui vous correspond et mettra en valeur votre projet.',
          },
        ],
      }
    }
    }
</script>