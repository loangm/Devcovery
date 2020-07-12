<template>
  <v-theme-provider dark>
    <base-section
      id="social"
      class="accent text-center py-12"
      space="56"
    >
      <base-icon class="mb-8">
        mdi-instagram
      </base-icon>

      <base-section-heading
        color="transparent"
        title="Instagram"
        class="mx-10"
      >
        Restez informé sur nos dernières actualités. Nous postons régulièrement des petits conseils et des astuces pour vous aider à réfléchir sur la conception de votre site.
      </base-section-heading>

      <div class="py-4" />

      <v-btn
        class="font-weight-bold"
        color="white"
        href="https://www.instagram.com/devcovery"
        light
        min-width="168"
        target="_blank"
        x-large
      >
        Nous suivre

        <v-icon right>
          mdi-open-in-new
        </v-icon>
      </v-btn>
    </base-section>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'SectionNews',

    provide: {
      heading: { align: 'center' },
    },
  }
</script>
