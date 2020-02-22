<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <h3>JSON to Folder Structure</h3>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/MateenRay/aviso-pr"
        target="_blank"
        text
      >
        <span class="mr-2">GitHub Link</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      
      <v-row align="center">
        <v-col cols="6">
          <Editor/>
        </v-col>
        <v-col cols="6"> 
          <Output/>
          </v-col>
      </v-row>
    </v-content>
  </v-app>
</template>

<script>
import Editor from './components/Editor';
import Output from './components/Output';

export default {
  name: 'App',

  components: {Editor, Output},

  data: () => ({
    //
  }),
};
</script>
