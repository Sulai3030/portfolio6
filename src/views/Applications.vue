<template>
  <v-container grid-list-xl>
    <v-layout flex-child wrap>
      <v-flex xs12 md4 d-flex>
        <v-layout wrap>
          <v-flex xs12>
            <v-sheet elevation="24" color="#2464E3" height="1250" width="1250"
              ><div
                id="e3"
                style="max-width: 1100px; margin: auto"
                class="grey lighten-3"
                elevation="24"
              >
                <v-toolbar color="pink" dark>
                  <v-toolbar-title>Applications</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon></v-icon>
                  </v-btn>
                </v-toolbar>
                <v-card>
                  <v-container fluid grid-list-lg>
                    <v-layout row wrap>
                      <v-flex xs12>
                        <v-card
                          color="#6B9611"
                          class="white--text"
                          elevation="24"
                          outlined
                          shaped
                        >
                          <v-card-title primary-title>
                            <div>
                              <div class="headline">Project 1.</div>
                              <span
                                ><a
                                  href="https://partydash.com/"
                                  target="_blank"
                                  >https://partydash.com/</a
                                ></span
                              >
                            </div>
                            <p>Front-End Design</p>
                            <p>
                              We built Party Dash with a simple goal in mind: to
                              help party hosts plan parties more easily.
                            </p>
                            <p>Responsibilities:</p>
                            <p></p>
                            Follow design specs handed down from site owner.
                            Used CSS and HTML to create inviting website

                            <p>Technologies used: HTML, CSS, Bootstrap</p>
                            <div>
                              <p></p>
                              <a
                                href="https://partydash.com/pages/about-us"
                                target="_blank"
                                >More Info</a
                              >
                            </div>
                          </v-card-title>
                          <v-card-actions> </v-card-actions>
                        </v-card>
                      </v-flex>
                      <v-flex xs12>
                        <v-card
                          color="#E3553B"
                          class="white--text"
                          elevation="24"
                          outlined
                          shaped
                        >
                          <v-layout>
                            <v-flex xs7>
                              <v-card-title primary-title>
                                <div>
                                  <div class="headline">Project 2.</div>
                                  <div>
                                    RuneSkype
                                    <a
                                      href="https://runeskype.heroku.app/"
                                      target="_blank"
                                      >https://github.com/Jroze88/RuneSkype</a
                                    >
                                  </div>
                                  <div>Responsibilities</div>
                                  <div>
                                    Front-end design, Linting, cleaning up
                                    frontend and backend code and making sure
                                    both sides work together.
                                  </div>
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
                        <v-card color="#0D5DFF" class="white--text">
                          <v-layout row>
                            <v-flex xs7>
                              <v-card-title primary-title>
                                <div>
                                  <div class="headline">Halycon Days</div>
                                  <div>Ellie Goulding</div>
                                  <div>(2013)</div>
                                </div>
                              </v-card-title>
                            </v-flex>
                            <v-flex xs5>
                              <v-img
                                src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
                                height="125px"
                                contain
                              ></v-img>
                            </v-flex>
                          </v-layout>
                          <v-divider light></v-divider>
                          <v-card-actions class="pa-3">
                            Rate this album
                            <v-spacer></v-spacer>
                            <v-icon>star_border</v-icon>
                            <v-icon>star_border</v-icon>
                            <v-icon>star_border</v-icon>
                            <v-icon>star_border</v-icon>
                            <v-icon>star_border</v-icon>
                          </v-card-actions>
                        </v-card>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card>
              </div>
              <sheet-footer> #5: (2r x 2c) </sheet-footer>
            </v-sheet>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  components: {
    SheetFooter: {
      functional: true,

      render(h, { children }) {
        return h(
          "v-sheet",
          {
            staticClass: "mt-auto align-center justify-center d-flex",
            props: {
              color: "rgba(0, 0, 0, .36)",
              dark: true,
              height: 50,
            },
          },
          children
        );
      },
    },
  },
  data: () => ({
    cards: [
      {
        title: "Pre-fab homes",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 12,
      },
      {
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 6,
      },
      {
        title: "Best airlines",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 6,
      },
    ],
  }),
};
</script>
