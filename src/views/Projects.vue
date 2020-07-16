<template>
  <div id="projects">
    <hero-banner title="My Projects" />
    <section class="section has-background-light has-text-primary">
      <div class="container is-fluid">
        <div class="columns is-multiline">
          <div class="column is-half">
            <project-info
              title="Portfolio"
              image="portfolio.png"
              description="I wanted to learn more about Vue.js and so I made this portfolio page. I got to practice other new technologies as well: I used Bulma Framework for styling and also added option for using Airtable as CMS.
              This [tutorial](https://dev.to/markjohnson303/building-a-portfolio-site-with-vue-bulma-and-airtable-5a58) was a great help."
              technologies="Vue.js, Bulma, Airtable"
              resources="See the source code: [GitHub](https://github.com/ajjmai/portfolio)"
            />
          </div>
          <div class="column is-half">
            <project-info
              title="Population Graphs App"
              image="population-graphs.png"
              description="I created this web page as part of [Sympa MOOC](https://mimmitkoodaa.ohjelmistoebusiness.fi/mimmit-koodaa-mooc-sympa/). It fetches population data from World Bank API and visualises it.
              I practiced vanilla JavaScript, using APIs and deploying to Heroku."
              technologies="HTML, CSS, JavaScript, Bootstrap"
              resources="See the source code: [GitHub](https://github.com/ajjmai/population-graphs)
The project is online: [Heroku](https://population-graphs-app.herokuapp.com/)"
            />
          </div>
          <div class="column is-half">
            <project-info
              title="Meower"
              image="meower.png"
              description="A study project for [Web-palvelinohjelmointi Java MOOC](https://web-palvelinohjelmointi-s19.mooc.fi/). This is a Twitter-like app where the users can among others create profiles, post messages and photos, friend other users and comment and like their friends' posts. "
              technologies="Java, Spring Boot, Thymeleaf, Bootstrap, PostgreSQL"
              resources="See the source code: [GitHub](https://github.com/ajjmai/wepa-Twitter)
The project is online: [Heroku](https://afternoon-scrubland-16835.herokuapp.com/home)"
            />
          </div>
          <div class="column is-half">
            <project-info
              title="Squid Squad"
              image="squid_squad.png"
              description="A group study project: two-player laser squad type game where squids battle with throwing rocks. "
              technologies="C++, SFML"
              hasResources="visibility: hidden"
            />
          </div>
          <div class="column is-half">
            <project-info
              title="Calendar App"
              image="c-calendar.png"
              description="A study project: Simple calendar app made with C."
              technologies="C"
              resources="See the source code: [GitHub](https://github.com/ajjmai/c-calendar)"
            />
          </div>
          <div class="column is-half">
            <project-info
              title="Game Store App"
              image="logo.png"
              description="A group study project. Game web store app where one can search, buy and play games."
              technologies="Python, Django, Bootstrap, Ajax"
              hasResources="visibility: hidden"
            />
          </div>
          <div class="column is-half">
            <project-info
              title="Triangle Puzzle Game"
              image="puzzle.png"
              description="This was my first big study project. The game is played by setting puzzle pieces on the board so that symbols on the pieces match. The game can be saved as and loaded from a text file."
              technologies="Scala, Scala Swing, Java AWT"
              hasResources="visibility: hidden"
            />
          </div>
        </div>
      </div>
    </section>
    <mimmit-koodaa />
  </div>
</template>

<script>
import ProjectInfo from "@/components/ProjectInfo.vue";
import HeroBanner from "@/components/HeroBanner.vue";
import MimmitKoodaa from "@/components/MimmitKoodaa.vue";

export default {
  name: "Projects",
  components: {
    ProjectInfo,
    HeroBanner,
    MimmitKoodaa
  }
};
</script>
