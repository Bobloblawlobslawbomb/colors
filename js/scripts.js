$(document).ready(function () {
  $("button#green").click(function () {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function () {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function () {
    $("body").removeClass();
    $("body").addClass("red-background");
  });

  $("button#grey-toggle").click(function () {
    $("body").removeClass();
    $("body").addClass("grey-background");//how to make this toggle?
  });
});