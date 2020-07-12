
<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Services',

    metaInfo: { title: 'Nos services' },

    extends: View,

    mixins: [
      LoadSections([
        'hero-alt',
        'features',
        'projet',
        'parallax',
        'pro-features',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'services',
      },
    },
  }
</script>
