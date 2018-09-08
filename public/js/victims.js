var victimList = $("uk-grid");
var victimContainer = $(".uk-card");


$(document).on('click', "#submit-btn", handleVictimFormSubmit);

function handleVictimFormSubmit(event) {
  event.preventDefault();
  console.log("Age: " + parseInt($("#age").val().trim()));
  insertVictim({
    first_name: $("#first_name").val().trim(),
    last_name: $("#last_name").val().trim(),
    age: $("#age").val().trim(),
    gender: $("#gender").val().trim(),
    city: $("#city").val().trim(),
    state: $("#state").val().trim(),
    testimonial: $("#testimonial").val().trim(),
    media_resources: $("#media_resources").val().trim(),
    officer_involved: $("#officer_involved").val().trim(),
    police_department: $("#police_department").val().trim(),
    contact_person_name: $("#contact_person_name").val().trim(),
    contact_person_email: $("#contact_person_email").val().trim()
  });
}

function insertVictim(victimData) {
  $.ajax("/victims/new", {
    type: "POST",
    data: victimData
  }).then(getVictims);
}


function createVictimRow(victimData) {
    // var newDiv = $("<div class='uk-grid-match uk-grid-small uk-child-width-expand@s' uk-grid>");
    var newDiv = $("<div>");
    newDiv.data("victim", victimData);
    
    newDiv.append("<a href='#" + victimData.first_name.val().toLowerCase() + "Card'" + " uk-toggle>"); 
    newDiv.append("<div>");
    newDiv.append("<div id='" + victimData.first_name.val().toLowerCase() + victimData.last_name + "' class='uk-card uk-card-large uk-card-default uk-card-hover'>");
    newDiv.append("<div class='uk-card-body'>");
    newDiv.append("<p class='victimName'>" + victimData.first_name + " " + victimData.last_name + ", " + victimData.age + "</p>")
    newDiv.append("<p class='victimDate'>February 23, 2015</p>")
    newDiv.append("</div>");
    newDiv.append("<div class='tag'>" + victimData.city + ", " + victimData.state +"</div>")
    newDiv.append("</div>");
    newDiv.append("</div>");
    newDiv.append("</a>");

    newDiv.append("<div id='" + victimData.first_name.val().toLowerCase() + "Card' class='victimModal' uk-modal>"); 
    newDiv.append("<div class='uk-modal-dialog'>");
    newDiv.append("<button class='uk-modal-close-outside' type='button' uk-close></button>");
    newDiv.append("<div class='uk-modal-header'>");
    newDiv.append("<span uk-icon='paint-bucket'></span>&nbsp;<h2 class='uk-modal-title victimName'>" + victimData.first_name + " " + victimData.last_name + ", " + victimData.age + "</h2>");
    newDiv.append("<h3 class='victimDate'>April 30, 2015</h3>");
    newDiv.append("</div>");
    newDiv.append("<div class='uk-modal-body' uk-overflow-auto>");
    newDiv.append("<img class='uk-align-left' src='http://dev.rjactioncenter.org/wp-content/uploads/2016/05/68e4d585-d735-452a-b9ae-9c20279ef323_profile-300x225.jpg'>" + victimData.testimonial + "</p>");
    newDiv.append("</div>");
    newDiv.append("<div class='officerSection uk-modal-footer uk-text-left'>");
    newDiv.append("<span class='officerLabel tag'>Officer(s) Involved:</span><span class='tag officer'>" + victimData.officer_involved + ", " + victimData.police_department + "</span>");
    newDiv.append("</div>");
    newDiv.append("<div class='locationSection uk-modal-footer uk-text-lef'>");
    newDiv.append("<span class='locationLabel tag'>Location:</span><span class='tag location'>" + victimData.city + ", " + victimData.state + "</span>");
    newDiv.append("</div>");
    newDiv.append("<div class='sourceSection uk-modal-footer uk-text-left'>");
    newDiv.append("<span class='sourceLabel tag'>Source:</span><a target='_blank' href='https://www.theguardian.com/us-news/ng-interactive/2015/jun/01/the-counted-police-killings-us-database#alexia-christian-371'><span class='source tag'>Guardian</span></a><span uk-icon='arrow-right'></span>");
    newDiv.append("</div>");
    newDiv.append("</div>");
    newDiv.append("</div>");
    return newDiv;
  }

function getVictims() {
    $.get("/", function(data) {
        var rowsToAdd = [];
        for (var i = 0; i < data.length; i++) {
            rowsToAdd.push(createVictimRow(data[i]));
        }
        renderVictimList(rowsToAdd);
        // nameInput.val("");
        }); 
}

function renderVictimList(rows) {
    //victimList.children().not(":last").remove();
    //victimContainer.children(".alert").remove();
    if (rows.length) {
      console.log(rows);
      victimList.prepend(rows);
    }
    else {
      renderEmpty();
    }
}