<template>
  <v-app>
    <v-navigation-drawer app></v-navigation-drawer>
    <v-content>
      <div>
        <p>
          Ambitious, user-focused Web and Software Developer with experience
          working in teams and independently. Has strong project management
          experience and experience delegating responsibilities to a team from
          time at Maximus where he spearheaded a project to create the audio/ADA
          compliant portion of a new healthcare plan for 1.5 million citizens of
          New York State.te sapiente corrupti asperiores rem nemo numquam fuga
          ab at.
        </p>
        <p>
          A flexible and quick learner committed to constantly learning learning
          and evolving his skills to stay abreast of ever-evolving technologies
          and trends in the industry. Communicative, knowledgeable and steadfast
          with excellent computer engineering skills learned in the Columbia
          University Coding Bootcamp where he created projects in HTML5, CSS,
          JavaScript, VueJS, and ReactJS.
        </p>
      </div>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
  }),
  props: {
    source: String,
  },
};
</script>
