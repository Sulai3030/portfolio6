<template>
  <div id="e3" style="max-width: 1400px; margin: auto" class="grey lighten-3">
    <v-toolbar color="pink" dark>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-card>
      <v-container fluid grid-list-lg>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card
              color="#4583FF"
              class="white--text"
              style="max-width: 1200px; margin: auto"
            >
              <v-card-title primary-title>
                <div>
                  <div class="headline">
                    Ambitious, user-focused Web and Software Developer with
                    experience working in teams and independently. Has strong
                    project management experience and experience delegating
                    responsibilities to a team from time at Maximus where he
                    spearheaded a project to create the audio/ADA compliant
                    portion of a new healthcare plan for 1.5 million citizens of
                    New York State.
                  </div>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
          <v-flex xs12>
            <v-card
              color="#8FBD33"
              class="white--text"
              style="max-width: 1200px; margin: auto"
            >
              <v-layout>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div>
                        <div class="headline">
                          A flexible and quick learner committed to constantly
                          learning learning and evolving his skills to stay
                          abreast of ever-evolving technologies and trends in
                          the industry. Communicative, knowledgeable and
                          steadfast with excellent computer engineering skills
                          learned in the Columbia University Coding Bootcamp
                          where he created projects in HTML5, CSS, JavaScript,
                          VueJS, and ReactJS.
                        </div>
                      </div>
                      <div></div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                <v-spacer></v-spacer>
                <v-icon></v-icon>
                <v-icon></v-icon>
                <v-icon></v-icon>
                <v-icon></v-icon>
                <v-icon></v-icon>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex xs12>
            <v-card
              color="#BD4833"
              class="white--text"
              style="max-width: 1200px; margin: auto"
            >
              <v-layout row>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline"></div>
                      <div></div>
                      <div></div>
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs5>
                  <v-img src="" height="125px" contain></v-img>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                <v-spacer></v-spacer>
                <v-icon></v-icon>
                <v-icon></v-icon>
                <v-icon></v-icon>
                <v-icon></v-icon>
                <v-icon></v-icon>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      card_text: "",
    };
  },
};
</script>
