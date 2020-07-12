<template>
  <base-section
    id="pro-features"
  >
    <v-img
      :src="require('@/assets/logoab.png')"
      class="mx-auto mb-8"
      max-width="128"
    />

    <base-section-heading title="Nos offres">
      Nous proposons actuellement trois formules<br>pour développer votre site Internet. Chaque formule<br>comprends différents éléments personnalisables.
    </base-section-heading>

    <v-container>
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
        >
          <v-simple-table>
            <thead>
              <tr>
                <th />

                <th 
                  class="body-1 font-weight-bold text-center px-4">
                  Bronze
                </th>

                <th class="body-1 font-weight-bold text-center px-5">
                  Silver
                </th>

                <th class="body-1 font-weight-bold text-center px-6">
                  Gold
                </th>
                
              </tr>
            </thead>

            <tbody class="body-1">
              <tr
                v-for="([name, one, two, three], i) in features"
                :key="i"
              >
                <td v-text="name" />

                <td class="text-center font-weight-bold">
                  <template v-if="typeof one === 'boolean'">
                    <v-icon :color="one ? 'success' : 'error'">
                      mdi-{{ one ? 'check' : 'close' }}
                    </v-icon>
                  </template>

                  <template v-else>
                    {{ one }}
                  </template>
                </td>

                <td class="text-center font-weight-bold">
                  <template v-if="typeof two === 'boolean'">
                    <v-icon :color="two ? 'success' : 'error'">
                      mdi-{{ two ? 'check' : 'close' }}
                    </v-icon>
                  </template>

                  <template v-else>
                    {{ two }}
                  </template>
                </td>

                <td class="text-center font-weight-bold">
                  <template v-if="typeof three === 'boolean'">
                    <v-icon :color="three ? 'success' : 'error'">
                      mdi-{{ three ? 'check' : 'close' }}
                    </v-icon>
                  </template>

                  <template v-else>
                    {{ three }}
                  </template>
                </td>

              </tr>
            </tbody>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionProChart',

    data: () => ({
      features: [
        ['Nombre maximum de pages', 2, 6, 'Infini'],
        ['Durée de garantie (SAV)', '4 mois', '6 mois', '1 an'],
        ['Nom de domaine', true, true, true],
        ['Affichage dynamique', false, true, true],
        ['Contenu vidéo', false, true, true],
        ['Éléments programmables', false, false, true],
        ['Prix', '300 €', '600 €', '1000 €'],
      ],
    }),
  }
</script>
