<template>
  <base-section
    id="features"
    class="secondary"
  >
    <v-responsive
      class="mx-auto"
      max-width="1350"
    >
      <v-container fluid>
        <v-row>
          <v-col
            v-for="card in cards"
            :key="card.title"
            cols="12"
            md="4"
            class="pa-8"
          >
            <base-info-card
              align="center"
              dark
              v-bind="card"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionFeatures',

    data: () => ({
      cards: [
        {
          icon: 'mdi-pencil-ruler',
          title: 'Configuration',
          text: 'Analyse de vos besoins et élaboration d\'un modèle adapté en fonction de vos attentes. Vous disposez d\'un large choix d\'outils et de composants de qualité afin de concevoir une site Internet à votre image.',
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
    }),
  }
</script>
