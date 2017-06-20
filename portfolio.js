$(document).ready(function() {

  function addVis() {
    if ($("body").hasClass("vis") || $("html").hasClass("vis")) {
      $("body").removeClass("vis");
      $("html").removeClass("vis");
    }
    else {
      $("body").addClass("vis");
      $("html").addClass("vis");
    }
  }


  function pointer1(div) {
    $(div).toggleClass("opened");
    function pointer2() {
      $(div).toggleClass("opened");
    }
    setTimeout(pointer2, 2500);
  }

  var divList = [".home", ".aboutMe", ".skills", ".projects", ".contact"];

  function setReturn2() {
    $(".return").toggleClass("open2");
  }
  function setReturn1() {
    $(".return").toggleClass("open");
  }

  function setReturn() {
    if ($(".return").hasClass("open") == false) {
      setReturn1();
      setTimeout(setReturn2, 4000);
    }
    else {
      setReturn2();
      setTimeout(setReturn1, 1000);
    }
  }

  function addOpen(div) {
    for (var i = 0; i < divList.length; i++) {
      if (divList[i] !== div) {
        $(divList[i]).toggleClass("open");
      }
    }
    setReturn();
  }

  function iconToName(divName) {
    var newClass = "devicon-" + divName.slice(1, divName.length) + "-plain";
    $(divName).toggleClass(newClass);
    $(divName).toggleClass("dev");
    $(divName).toggleClass("hoverOn");
    if ($(divName).hasClass(newClass)) {
      $(divName).html("");
    }
    else {
      $(divName).html((divName.slice(1, divName.length)).toUpperCase());
    }
  }

  // Clicks

  $(".home").on("click", function() {
    pointer1(".home");
    function showName() {
      $(".test").toggleClass("open");
    }
    function bgColor() {
      $(".home").toggleClass("open2");
    }
    function place1() {
      $(".aboutMe").toggleClass("open3");
      $(".skills").toggleClass("open3");
      $(".projects").toggleClass("open3");
      $(".contact").toggleClass("open3");
    }
    setTimeout(showName, 600);
    setTimeout(place1, 1);
    setTimeout(bgColor, 1);
    setTimeout(bgColor, 2400);
    setTimeout(place1, 2300);
    setTimeout(showName, 2000);
  });

  $(".aboutMe").on("click", function openAbout() {
    pointer1(".aboutMe");
    addOpen(".aboutMe");
    $(".about").toggleClass("open");
    function place() {
      $(".flexContainer").toggleClass("aboutMe1");
      $(".aboutMe").toggleClass("local");
    }


    function showText() {
      if ($(".about").hasClass("open")) {
        $(".about").addClass("open2");
      }
      else {
        $(".about").removeClass("open2");
      }
    }
    setTimeout(place, 1);
    if ($(".aboutMe").hasClass("local")) {
      setTimeout(showText, 1);
    }
    else {
      setTimeout(showText, 1000);
    }


    $(".return").on("click", function() {
      openAbout();
    });

  });

  $(".skills").on("click", function openSkills() {
    var langNames1 = ["css3", "javascript", "jquery", "sass", "atom", "html5", "python", "bootstrap"];
    pointer1(".skills");
    addOpen(".skills");
    function place() {
      $(".flexContainer").toggleClass("skills1");
      $(".skills").toggleClass("local");
    }
    function showText1() {
      $(".list").toggleClass("open");
    }
    setTimeout(place, 1);
    if ($(".skills").hasClass("local")) {
      setTimeout(showText1, 1);
    }
    else {
      setTimeout(showText1, 1000);
    }
    function slideItems() {
      $(".flexIcons").toggleClass("open");
    }
    setTimeout(slideItems, 2500);

    for (var n = 0; n < langNames1.length; n++) {
      if ($("." + langNames1[n]).hasClass("dev") == false) {
        $("." + langNames1[n]).toggleClass("dev");
        $("." + langNames1[n]).toggleClass("devicon-" + langNames1[n] + "-plain");
        $("." + langNames1[n]).toggleClass("hoverOn");
        $("." + langNames1[n]).html("");
      }
    }

    $("i").on("click", function() {
      var langNames = $(this).attr("class").split(" ");
      for (var i = 0; i < langNames1.length; i++) {
        if (langNames.indexOf(langNames1[i]) !== -1) {
          iconToName("." + langNames1[i]);
        }
        else if ($("." + langNames1[i]).hasClass("dev") == false) {
          iconToName("." + langNames1[i]);
        }
      }
    })
    $(".return").on("click", function() {
      openSkills();
    });
  });





  $(".projects").on("click", function openProjects() {
    pointer1(".projects");
    addOpen(".projects");
    function place() {
      $(".flexContainer").toggleClass("projects1");
      $(".projects").toggleClass("local");
    }
    setTimeout(place, 1);

    $(".return").on("click", function() {
      setTimeout(openProjects, 1);
      displayImages();
      addVis();
    });

    $(".list2").toggleClass("open");
    let displayImages = () => ($(".list2").hasClass("open")) ? $(".flexImages").toggleClass("open") : "";

    setTimeout(displayImages, 1000);

    if ($(".list2").hasClass("open")) {addVis()}

  });

  $(".contact").on("click", function openContact() {
    pointer1(".contact");
    addOpen(".contact");
    function place() {
      $(".flexContainer").toggleClass("contact1");
      $(".contact").toggleClass("local");
      $(".contact").toggleClass("hover");
    }
    setTimeout(place, 1);

    $(".return").on("click", function() {
      openContact();
    });
  });
})
