(function(){

    function Start(){
        console.log("App started...");
    }

    window.addEventListener("load", Start);

})();

/*Kanban Board*/
function elem(id){
    var e = document.getElementById(id);
    return e;
  }
  function allowDrop(ev) {
      ev.preventDefault();
  }
  function drag(ev) {
      ev.dataTransfer.setData("text", ev.target.id);
  }
  function drop(ev, el) {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("text");
      el.appendChild(elem(data));
      elem(data).removeAttribute('style');
      el.classList.remove('drag-enter');
      countTask();
      saveBoards();
  }
  function dragEnter(e){
      e.target.classList.add('drag-enter');
  }
  function dragLeave(e){
      e.target.classList.remove('drag-enter');
  }
  function changeTask(){
      var taskList = document.querySelectorAll('.txt');
      for(i=0;i<taskList.length;i++){
          taskList[i].onclick = function() {	
              showModal();
              okModal(this.parentNode.id);
          }
      }
  }

  function upListener(e) {
      e.preventDefault();
      var wrapper = this.parentElement;
      if (wrapper.previousElementSibling){
          wrapper.parentNode.insertBefore(wrapper, wrapper.previousElementSibling);
          saveBoards();
      }
  }
  function downListener(e) {
      e.preventDefault();
      var wrapper = this.parentElement;
      if (wrapper.nextElementSibling){
          wrapper.parentNode.insertBefore(wrapper.nextElementSibling, wrapper);
          saveBoards();
      }
  }
  
  //COUNT TASK
  function countTask(){
      var cypher = document.querySelectorAll('.section');
      var totalNum = 0;
      for(var i=0; i<cypher.length; i++){
          var num = cypher[i].childElementCount;
          //console.log(num);
          var parent = cypher[i].parentNode;
          var childrn = parent.children[0];
          var nal = childrn.children[0];
          nal.innerHTML = num;
          totalNum += num;
      }
      elem('totalTask').innerHTML = totalNum;
  }