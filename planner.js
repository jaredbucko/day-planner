console.log(this.localStorage);

var entry = $(".entry");
var saveBtn = $("button");
var background = $(".form-control");
var textarea = $("textarea");

// set date in jumbotron
var today = moment().format('dddd, LL');
$("#today").text(today);

// load events from storage
var saved = localStorage.getItem("testArray");
var savedEvents = JSON.parse(saved);
console.log(savedEvents);
console.log(savedEvents.length);
if (saved) {
  for (var j=0; j<savedEvents.length; j++) {
    var savedEvent = savedEvents[j];
    console.log(entry[j]);
    entry.eq(j).val(savedEvent);
    // entry[j].value = savedEvent;
  }
}

// save to local storage on click
function addToStorage() {
  localStorage.removeItem("testArray");
  var content = [];
  var x=0;
  for (var i=0; i<entry.length; i++) {
    let data = entry[x].value;
    content.push(data);
    x++;
  }
  localStorage.setItem("testArray", JSON.stringify(content));
};

// add click event to save buttons
saveBtn.click(function(){
  alert("Event(s) saved");
  addToStorage();
});

// change event background color based on time of day
var day = new Date();
var now = day.getHours();
console.log(now);
for (var k=0; k<textarea.length; k++) {
  var hour = parseInt($("textarea").eq(k).attr("hour"));
  if (hour < now) {
    $("textarea").eq(k).css("background-color", "#999999");
  } else if (hour === now) {
    $("textarea").eq(k).css("background-color", "#ff7e79");
    } else {
      $("textarea").eq(k).css("background-color", "darkseagreen");
    }
  }
