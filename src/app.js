import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      items: ["Buy food", "Do dishes", "Have a shower"],
    }
  });
});
