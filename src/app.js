import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      items: [
        {activity: "Structure files in todo_hw", highPriority: true},
        {activity: "Complete MVP", highPriority: true},
        {activity: "Try extensions", highPriority: false}
       ],
      newItem: ""
    },
    methods: {
      saveNewItem: function () {
        this.items.push(this.newItem)
      }
    }
  });
});
