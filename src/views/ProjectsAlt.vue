<template>
  <div id="projects">
    <hero-banner title="My Projects" />
    <section class="section has-background-light has-text-primary">
      <div class="container is-fluid">
        <div class="columns is-multiline">
          <div class="column is-half">
            <project-info-alt
              title="Portfolio"
              image="portfolio.png"
              description="I wanted to learn more about Vue.js and so I made this portfolio page. I got to practice other new technologies as well: I used Bulma Framework for styling and also added option for using Airtable as CMS.
              This [tutorial](https://dev.to/markjohnson303/building-a-portfolio-site-with-vue-bulma-and-airtable-5a58) was a great help."
              technologies="Vue.js, Bulma, Airtable"
              resources="See the source code: [GitHub](https://github.com/ajjmai/portfolio)"
            />
          </div>
          <div class="column is-half">
            <project-info-alt
              title="Population Graphs App"
              image="population-graphs.png"
              description="I created this web page as part of [Sympa MOOC](https://mimmitkoodaa.ohjelmistoebusiness.fi/mimmit-koodaa-mooc-sympa/). It fetches population data from World Bank API and visualises it.
              I practiced vanilla JavaScript, using APIs and deploying to Heroku."
              technologies="HTML, CSS, JavaScript, Bootstrap"
              resources="See the source code: [GitHub](https://github.com/ajjmai/population-graphs).
              The project is online:
              [https://population-graphs-app.herokuapp.com/](https://population-graphs-app.herokuapp.com/)"
            />
          </div>
          <div class="column is-half">
            <project-info-alt title="Meower" image="logo.png" description="" />
          </div>
          <div class="column is-half">
            <project-info-alt title="Simple Calendar App" image="logo.png" description="" />
          </div>
          <div class="column is-half">
            <project-info-alt
              title="Triangle Puzzle Game"
              image="puzzle.png"
              description="This was my first big coding project as part of my computer science university studies. The game is played by setting puzzle pieces on the board so that symbols on the pieces match. The game can be saved as and loaded from a text file."
              technologies="Scala, Scala Swing, Java AWT"
              hasResources="visibility: hidden"
            />
          </div>
          <div class="column is-half">
            <project-info-alt title="Laser Squad Game" image="logo.png" description="" />
          </div>
          <div class="column is-half">
            <project-info-alt title="Book Bot" image="logo.png" description="" />
          </div>
          <div class="column is-half">
            <project-info-alt title="Game Store App" image="logo.png" description="" />
          </div>
        </div>
      </div>
    </section>
    <mimmit-koodaa />
  </div>
</template>

<script>
import ProjectInfoAlt from "@/components/ProjectInfoAlt.vue";
import HeroBanner from "@/components/HeroBanner.vue";
import MimmitKoodaa from "@/components/MimmitKoodaa.vue";

export default {
  name: "Projects",
  components: {
    ProjectInfoAlt,
    HeroBanner,
    MimmitKoodaa
  }
};
</script>
