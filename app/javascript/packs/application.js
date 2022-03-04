// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import "jquery"
import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import '@doabit/semantic-ui-sass'

Rails.start()
Turbolinks.start()
ActiveStorage.start();

// auto-scrolling in chatbox to the newst message
window.scroll_bottom = function() {
  if ($('#messages').length > 0) {
    $('#messages').scrollTop($('#messages')[0].scrollHeight);
  }
}

// enter message by clicking enter
window.submit_message = function() {
  $('#message_body').on('keydwon', function(e) {
    if (e.keyCode == 13) {  // enter keydown = 13
      $('button').click();
    };
  });
};


$(document).on('turbolinks:load', function functionName() {
  $('.ui.dropdown').dropdown();

  $('.message .close').on('click', function() {
    $(this).closest('.message').transition('fade');
  });
  
  submit_message();

  $(document).bind("ajax:beforeSend", function(){
    $('#text-field').val('');
  });

  scroll_bottom();
})



