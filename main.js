// var errorMsg = document.getElementById('errorMsg');
// errorMsg.style.visibility = 'hidden';

$(document).ready(function(){
  $('#errorMsg').hide();
})



const app = new Vue({
  el:'#app',
  data:{
    listItems: [{isDone:false, whatToDo: 'Get some dinner'}]
  },
  methods:{
    addItem: function(){
      var newItem = document.getElementById('newItem').value;
      if(newItem != ""){
        this.listItems.push({isDone:false, whatToDo: newItem});
        var newItem = document.getElementById('newItem').value = '';
      }
      else{
        $(document).ready(function(){
          $('#errorMsg').slideDown(450);
        });
      }
    },
    hideError:function(){
      $(document).ready(function(){
        $('#errorMsg').slideUp(450);
      });
    },
    removeItem: function(task){
      this.listItems.splice(this.listItems.indexOf(task), 1);
    },
    removeAll:function() {
      this.listItems = [];
    }
  }
});
