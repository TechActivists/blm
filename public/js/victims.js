var victimList = $("uk-container");
var victimContainer = $(".victimCard");


$(document).on('click', "#submit-btn", handleVictimFormSubmit);

function handleVictimFormSubmit(event) {
  event.preventDefault();
  insertVictim({
    first_name: $("#first_name").val().trim(),
    last_name: $("#last_name").val().trim(),
    gender: $("#gender").val().trim(),
    city: $("#city").val().trim(),
    state: $("#state").val().trim(),
    testimonial: $("#testimonial").val().trim(),
    media_resources: $("#media_resources").val().trim(),
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

function getVictims() {
 
}