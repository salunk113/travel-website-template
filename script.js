$(document).ready(function () {
    // Hide and position the main-right-container to the right
    $(".main-right-container").css({
      opacity: 0,
      transform: "translateX(100px)"
    });
  
    // Animate from right to left on page load
    $(".main-right-container").delay(400).animate({ opacity: 1 }, {
      duration: 1000,
      step: function (now, fx) {
        $(this).css("transform", "translateX(" + (100 * (1 - now)) + "px)");
      }
    });
  
    // You can keep or adjust this for the main-left-container
    $(".main-left-container").css({
      opacity: 0,
      transform: "translateY(50px)"
    });
  
    $(".main-left-container").delay(200).animate({ opacity: 1 }, {
      duration: 1000,
      step: function (now, fx) {
        $(this).css("transform", "translateY(" + (50 * (1 - now)) + "px)");
      }
    });
  });

  
  
  // scroll section of animation on category


  $(document).ready(function () {
    function animateOnScroll() {
      $('.category-container').each(function () {
        var containerTop = $(this).offset().top;
        var scrollTop = $(window).scrollTop();
        var windowHeight = $(window).height();
  
        if (scrollTop + windowHeight > containerTop + 100) {
          // Animate header
          $('.decore-category, .category-container h3, .category-container h1').each(function (i) {
            var el = $(this);
            setTimeout(function () {
              el.addClass('animate-up');
            }, i * 200);
          });
  
          // Animate cards
          $('.cards-container .card, .cards-container .decor-card').each(function (i) {
            var el = $(this);
            setTimeout(function () {
              el.addClass('animate-up');
            }, (i + 3) * 200);
          });
        }
      });
    }
  
    // Initial check and on scroll
    animateOnScroll();
    $(window).on('scroll', animateOnScroll);
  });
  
  $(document).ready(function () {
    function animateTripsOnScroll() {
      $('.main-heading.animate-on-scroll, h3.animate-on-scroll, .trip-card.animate-on-scroll, .trip-card-new.animate-on-scroll').each(function () {
        var el = $(this);
        var elementTop = el.offset().top;
        var scrollTop = $(window).scrollTop();
        var windowHeight = $(window).height();
  
        if (scrollTop + windowHeight > elementTop + 50) {
          el.addClass('animate-up');
        }
      });
    }
  
    // Run on page load and on scroll
    animateTripsOnScroll();
    $(window).on('scroll', animateTripsOnScroll);
  });

  $(document).ready(function () {
    const testimonials = [
      "What People Say<br>About Us.",
      "Our Customers <br>Love Our Service.",
      "Experience That <br>Delights Our Clients."
    ];
  
    let currentIndex = 0;
    let interval;
  
    function updateTestimonial(index) {
      $(".dot").removeClass("active").eq(index).addClass("active");
  
      const textEl = $(".testimonial-text");
      textEl.html(testimonials[index]);
      textEl.addClass("blink-animate");
  
      setTimeout(() => {
        textEl.removeClass("blink-animate");
      }, 500); // Match animation duration
      currentIndex = index;
    }
  
    function startAutoSlide() {
      interval = setInterval(() => {
        let next = (currentIndex + 1) % testimonials.length;
        updateTestimonial(next);
      }, 4000);
    }
  
    function stopAutoSlide() {
      clearInterval(interval);
    }
  
    $(".dot").on("click", function () {
      stopAutoSlide();
      updateTestimonial($(this).index());
      startAutoSlide();
    });
  
    startAutoSlide();
  });
    


  //down up button arow click function in testimonial section
  $(document).ready(function () {
    const testimonialsData = [
      {
        img: "./image/imagemen.png",
        text: "“On the Windows talking painted pasture yet its express parties use...”",
        name: "Mike Taylor",
        location: "Lahore, Pakistan"
      },
      {
        img: "./image/image2.png",
        text: "“They delivered beyond expectations.set a Highly recommend.”",
        name: "John Doe",
        location: "London, UK"
      }
    ];
  
    let currentIndex = 0;
  
    function updateTestimonial(direction) {
      if (direction === "up") {
        currentIndex = (currentIndex - 1 + testimonialsData.length) % testimonialsData.length;
      } else {
        currentIndex = (currentIndex + 1) % testimonialsData.length;
      }
  
      const testimonial = testimonialsData[currentIndex];
      const container = $(".testimonial-new-front");
  
      // Eye blinking animation: scale Y to 0 (close), update content, scale Y back to 1 (open)
      container.animate({ scaleY: 0 }, 150, function () {
        // Update content
        container.find("img").attr("src", testimonial.img);
        container.find("p.para-heading").text(testimonial.text);
        container.find(".step-heading").text(testimonial.name);
        container.find(".para-heading").last().text(testimonial.location);
  
        // Animate open
        container.animate({ scaleY: 1 }, 150);
      });
    }
  
    // To animate scaleY, we need to add jQuery transform plugin or use CSS + JS workaround
    // But jQuery animate does not support scale directly.
    // We'll do it with CSS transitions and toggling a class instead:
  
    // So let's rewrite updateTestimonial with CSS class toggling for blinking effect:
  
    function updateTestimonialBlinking(direction) {
      if (direction === "up") {
        currentIndex = (currentIndex - 1 + testimonialsData.length) % testimonialsData.length;
      } else {
        currentIndex = (currentIndex + 1) % testimonialsData.length;
      }
  
      const testimonial = testimonialsData[currentIndex];
      const container = $(".testimonial-new-front");
  
      // Add blink class to trigger CSS animation
      container.addClass("blink");
  
      // After 150ms (half blink duration), update content
      setTimeout(() => {
        container.find("img").attr("src", testimonial.img);
        container.find("p.para-heading").text(testimonial.text);
        container.find(".step-heading").text(testimonial.name);
        container.find(".para-heading").last().text(testimonial.location);
      }, 150);
  
      // Remove blink class after full blink duration (300ms)
      setTimeout(() => {
        container.removeClass("blink");
      }, 300);
    }
  
    $(".up-arrow").click(function () {
      updateTestimonialBlinking("up");
    });
  
    $(".down-arrow").click(function () {
      updateTestimonialBlinking("down");
    });
  });
  
  