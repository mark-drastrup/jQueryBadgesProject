$(function() {

  $.ajax({
    url: "https://www.codeschool.com/users/markdrastrup.json",
    dataType: "jsonp",
    succes: function(response) {
        var badgeElements= $.map(response.courses.completed, function(item, index) {
            var badgeDiv = $('<div />', {class: "course"});
            $('<h3>'+response.courses.completed.title+'</h3>').appendTo(badgeDiv);
            $('<img />', {src: response.courses.completed.badge}).appendTo(badgeDiv);
            $('<a />', {class: "btn btn-primary", target: "_blank", href: response.courses.completed.course.url}).text("See Course").appendTo(badgeDiv);
            return badgeDiv;
        })
        $("#badges").html(badgeElements);
    }
  })
});

