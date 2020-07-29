Vue.use(VueMaterial.default);

const card = new Vue({
  el: "#card",
  data: {
    title: "Heroes",
    heroes: [
      { title: 'Nightcrawler', desc: 'Furry, blue-skinned mutant' },
      { title: 'Doctor Strange', desc: 'Sorcerer Supreme' },
      { title: 'Raphael', desc: 'Only one cool but rude half-shell' },
      { title: 'RoboCop', desc: 'Detroit’s robotic protector' },
    ],
    newHero: '',
    newHeroDesc: ''
  },
  methods: {
    addHero: function() {
      if (this.newHero !== "") {
        this.heroes.unshift({
          title: this.newHero,
          desc: this.newHeroDesc
        });
        this.newHero = "";
        this.newHeroDesc = "";
      }
    },
    deleteHero: function(index) {
      this.heroes.splice(index, 1);
    }
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    url: function(value) {
      if (!value) return "";
      return `https://www.google.com/search?q=${value.toString()}`;
    }
  }
});
