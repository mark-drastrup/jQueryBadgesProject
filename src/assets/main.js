$(function() {

  $.ajax({
    url: "https://www.codeschool.com/users/markdrastrup.json",
    dataType: "jsonp",
    success: function(response) {
        var badgeElements = $.map(response.courses.completed, function(item, index) {
            var badgeDiv = $('<div />', {"class": "course"});
            $('<h3>'+item.title+'</h3>').appendTo(badgeDiv);
            $('<img />', {src: item.badge}).appendTo(badgeDiv);
            $('<a />', {"class": "btn btn-primary", target: "_blank", href: item.url}).text("See Course").appendTo(badgeDiv);
            return badgeDiv;
        })
        $("#badges").html(badgeElements);
    }
  })
});

