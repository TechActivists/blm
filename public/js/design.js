$(document).ready(function() {
    var listContainer = $(".uk-grid");

    //var postCategorySelect = $("#category");
    // $(document).on("click", "button.delete", handlePostDelete);
  
    var victims;
  
    getVictims();

    function getVictims() {
      $.get("/", function(data) {
        console.log("Victims: ", data);
        victims = data;
        initializeRows();
      });
    }
  
    function initializeRows() {
      listContainer.empty();
      var victimsToAdd = [];
      for (var i = 0; i < victims.length; i++) {
        victimsToAdd.push(createNewRow(victims[i]));
      }
      listContainer.append(victimsToAdd);
    }


    function createNewRow(victim) {
        var newVictimDiv = $("<div>");
        var newVictimCard = $("<a href='#" + victim.first_name + "Card'>");
        newVictimCard.addClass("uk-toggle");
        var newVictimCardHeading = $("<div>");
        newVictimCardHeading.addClass("uk-card uk-card-large uk-card-default uk-card-hover");
        var newVictimNameDiv = $("<div>");
        newVictimNameDiv.addClass("uk-card-body");
        var newVictimName = $("<p>");
        newVictimName.addClass("victimName");
        var newVictimDate = $("<p>");
        newVictimDate.addClass("victimDate");
        var newVictimLocation = $("<div>");
        newVictimLocation.addClass("tag");

        newVictimName.text(victim.first_name + " " + victim.last_name);
        newVictimDate.text("February 24th, 2018");
        newVictimLocation.text(victim.city + ", " + victim.state);

        newVictimNameDiv.append(newVictimName);
        newVictimNameDiv.append(newVictimDate);

        newVictimCardHeading.append(newVictimNameDiv);
        newVictimCardHeading.append(newVictimLocation);

        newVictimCard.append(newVictimCardHeading);

        newVictimDiv.append(newVictimCard);
        newVictimDiv.data("victim", victim);

        return newVictimDiv;
      }
});
  