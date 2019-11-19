console.log(this.localStorage);

$(document).ready(function() {

  let entry = $(".entry");
  let saveBtn = $(".btn");

  // set date in jumbotron
  let today = moment().format('LL');
  $("#today").text(today);

  // load events from storage
  let saved = localStorage.getItem("plannerEvent");
  if (saved) {
    entry.val(saved);
  }

  // save to local storage on click
  function saveEntry() {
    let content = entry.val();
    localStorage.setItem("plannerEvent", content);
  }

  // add click events to save buttons
  saveBtn.click(function(){
    alert("Event saved");
    saveEntry();
  });

});