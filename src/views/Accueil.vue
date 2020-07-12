
<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Accueil',

    metaInfo: { title: 'Accueil' },

    extends: View,

    mixins: [
      LoadSections([
        'hero',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'accueil',
      },
    },
  }
</script>
