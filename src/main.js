Vue.config.devtools = true;

var app = new Vue({
    el: '#root',
    data: {
      rooms: [],
      room: null,
    },
    created(){
             axios.get("http://localhost/DB/ESERCIZI/db-hotel/rooms.php")
             .then((response)=> {
                 this.rooms = response.data.response;
                 console.log(this.rooms);
            });
         
    },
    methods: {
        getDetails: function (id) {
        axios.get(`http://localhost/DB/ESERCIZI/db-hotel/rooms.php?id=${id}`)
            .then((response)=> {
                 this.room = response.data.response[0];
                 console.log(this.room);
            });
        }
    }
  });