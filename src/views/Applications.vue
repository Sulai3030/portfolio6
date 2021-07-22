<template>
  <v-container grid-list-xl>
    <v-layout flex-child wrap>
      <v-flex xs12 md4 d-flex>
        <v-layout wrap>
          <v-flex xs12>
            <v-sheet elevation="24" color="#2464E3" height="1450" width="1250"
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
                              ></a>
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
                                  <div class="headline">
                                    Project 2.
                                    <p>
                                      RuneSkype
                                      <a
                                        href="https://runeskype.heroku.app/"
                                        target="_blank"
                                        >https://github.com/Jroze88/RuneSkype</a
                                      >
                                    </p>
                                  </div>

                                  <div>Responsibilities</div>
                                  <div>
                                    Front-end design, Linting, cleaning up
                                    frontend and backend code and making sure
                                    both sides work together.
                                  </div>

                                  Technologies used: ReactJS, ChanceJS, Node,
                                  Express, Firebase, Twilio-Video, Twilio,
                                  WebRTC, Axios. Express, Faker, jQuery,
                                  React-dnd, React-dnd-html5-backend,React-dom,
                                  React-draggable, React-router-dom,
                                  Webpack-dev-middleware, Webpack hot-middleware

                                  <a
                                    href="https://github.com/Sulai3030/RuneSkype"
                                    target="_blank"
                                    >More Info</a
                                  >
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
                          elevation="24"
                          outlined
                          shaped
                          color="#0D5DFF"
                          class="white--text"
                        >
                          <v-layout row>
                            <v-flex xs7>
                              <v-card-title primary-title>
                                <div>
                                  <div class="headline">Project 3.</div>
                                  <div>
                                    <p>
                                      The GOAT Voter App |
                                      <a
                                        href="http://www.goatvoter.org/"
                                        target="_blank"
                                        >http://www.goatvoter.org/</a
                                      >
                                    </p>
                                  </div>

                                  <div>
                                    Front-End Design, created the CSS color
                                    scheme and front-end components.
                                  </div>
                                </div>
                                <p>
                                  The GOAT Voter App is a one-stop platform
                                  where voters can access information about
                                  candidates running for political offices
                                  anywhere in the United States. The GOAT Voter
                                  App streamlines information and increases
                                  voter participation. repo: By entering their
                                  zip code in a search field, users will be able
                                  to search and access detailed information
                                  about all candidates running for election in
                                  their district. In addition, users can enter
                                  their address to find out where their polling
                                  site is located and request transportation on
                                  election day.
                                </p>
                                <p>
                                  Technologies used: JavaScript, Handlebars,
                                  Bootstrap, CSS Parallax, Node.js, Express,
                                  Sequelize, Google Civic Information API,
                                  Heroku
                                </p>
                              </v-card-title>
                            </v-flex>
                            <v-flex xs5> </v-flex>
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
            </v-sheet>
          </v-flex>
        </v-layout>
      </v-flex> </v-layout
    ><sheet-footer> #5: (2r x 2c) </sheet-footer>
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
<style scoped>
a {
  color: #fff;
}
</style>
