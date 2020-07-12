<template>
  <base-section id="404">
    <base-heading title="404"/>
    
    <base-subheading
      title="PAGE NOT FOUND"
      space="12"
    />

    <base-subheading
      space="8"
      title="Cette page n'existe pas"
    />

    <base-img
      :src="require('@/assets/logoab.png')"
      class="mx-auto"
      contain
      height="350"
      width="250"
    />

    <div class="text-center">
      <base-btn :to="{ name: 'Accueil' }">
        Revenir à l'accueil
      </base-btn>
    </div>
  </base-section>
</template>

<script>
  export default {
    name: 'FourOhFour',

    provide: {
      heading: { align: 'center' },
    },
  }
</script>
