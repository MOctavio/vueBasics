Vue.use(VueMaterial.default);

const card = new Vue({
  el: "#card",
  data: {
    title: "Heroes",
    items: [
      'Nightcrawler',
      'Raphael',
      'RoboCop'
    ]
  }
});
