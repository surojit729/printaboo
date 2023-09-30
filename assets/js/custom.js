jQuery(document).ready(function () {
  // Password Toggle
  jQuery(function () {
    jQuery("#eye").click(function () {
      if (jQuery(this).hasClass("la-eye-slash")) {
        jQuery(this).removeClass("la-eye-slash")

        jQuery(this).addClass("la-eye")

        jQuery("#loginPassword").attr("type", "text")
      } else {
        jQuery(this).removeClass("la-eye")

        jQuery(this).addClass("la-eye-slash")

        jQuery("#loginPassword").attr("type", "password")
      }
    })
  })
  // Initialize Tooltip
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  )
  jQuery('[data-bs-toggle="tooltip"]').tooltip({
    container: 'body'
  });
  // Sidebar Dropdown
  jQuery(".sidebar-menu-outer li.menu-item-has-children > a").click(function () {
    jQuery('.sidebar-menu-outer .sub-menu').slideUp(300);
    if (jQuery(this).parent().find(".sub-menu").css('display') == 'none') {
      jQuery(this).parent().find(".sub-menu").slideDown(300);
      jQuery("body").addClass("sub_menu_active");
    } else {
      jQuery(this).parent().find(".sub-menu").slideUp(300);
    }
  });

  jQuery(".sidebar-menu-outer li.menu-item-has-children > a").click(function () {
    if (jQuery(this).parents(".sidebar-menu-outer ul > li").hasClass('sub-menu-active')) {
      jQuery(this).parents(".sidebar-menu-outer ul > li").removeClass('sub-menu-active');
    } else {
      jQuery('.sidebar-menu-outer ul > li').removeClass("sub-menu-active");
      jQuery(this).parents(".sidebar-menu-outer  ul > li").addClass("sub-menu-active");
    }
  });

  jQuery(".sidebar-menu-outer .navbar-nav > li > a").click(function () {
    if (jQuery(this).hasClass('active')) {
      jQuery(this).removeClass('active')
    } else {
      jQuery(".sidebar-menu-outer .navbar-nav > li > a").removeClass('active')
      jQuery(this).addClass("active");
    }
  });

  // Toggle sidebar when the button is clicked
  jQuery(".sidebar-toggle-btn").on("click", function () {
    jQuery("body").toggleClass("sidebar-collapsed");
    jQuery(".sidebar-menu-outer .sub-menu").css("display", "none");
  })
  // Datatabel Initialization
  new DataTable('#example');
  // Product list-grid view mode
  jQuery(".gridView").click(function () {
    if (jQuery(this).parents(".view-mode-btn-outer .listView").hasClass('active')) {
    } else {
      jQuery(this).addClass('active');
      jQuery('.view-mode-btn-outer .listView').removeClass("active");
      jQuery("body").removeClass('productListViewActive');
      jQuery("body").addClass('productGridViewActive');
      // jQuery(this).parents(".sidebar-menu-outer  ul > li").addClass("sub-menu-active");
    }
  });
  jQuery(".listView").click(function () {
    if (jQuery(this).parents(".view-mode-btn-outer .gridView").hasClass('active')) {
    } else {
      jQuery(this).addClass('active');
      jQuery('.view-mode-btn-outer .gridView').removeClass("active");
      jQuery("body").removeClass('productGridViewActive');
      jQuery("body").addClass('productListViewActive');
      // jQuery(this).parents(".sidebar-menu-outer  ul > li").addClass("sub-menu-active");
    }
  });
  // Contact Form Upload Finction
  jQuery(".custom-file-input").each(function () {
    jQuery(this).attr({
      id: "digitalProductFile",
    })
    jQuery(this).parent().parent().find(".cancelIcon").hide()
    jQuery(this)
      .parent()
      .parent()
      .find(".cancelIcon")
      .on("click", function () {
        jQuery(this).parent().find(".custom-file-input").val("")
        jQuery(this).parent().parent().find(".fileName").html("Select file")
        jQuery(this).parent().parent().find(".cancelIcon").hide()
        jQuery(this).parent().parent().find(".custom-file-uploader-label").css({
          "padding-right": "20px",
        })
      })
  })
  jQuery(".custom-file-input").on("change", function () {
    let fileName = jQuery(this).val()
    let fileNameMain = fileName.substring(
      fileName.lastIndexOf("\\") + 1,
      fileName.length
    )
    if (fileNameMain != "") {
      jQuery(this).parent().parent().find(".fileName").html(fileNameMain)
      jQuery(this).parent().parent().find(".cancelIcon").show()
      jQuery(this).parent().parent().find(".custom-file-uploader-label").css({
        "padding-right": "60px",
      })
    } else {
      jQuery(this).val("")
      jQuery(this).parent().parent().find(".fileName").html("")
      jQuery(this).parent().parent().find(".cancelIcon").hide()
      jQuery(this).parent().parent().find(".custom-file-uploader-label").css({
        "padding-right": "0",
      })
    }
  })


  // Social Share Image upload
  jQuery(".image-box").click(function (event) {
    var previewImg = jQuery(this).children("img");
    jQuery(this).siblings().children("input").trigger("click");
    jQuery(this).siblings().children("input")
      .change(function () {
        var reader = new FileReader();

        reader.onload = function (e) {
          var urll = e.target.result;
          jQuery(previewImg).attr("src", urll);
          previewImg.parent().css("background", "transparent");
          previewImg.show();
          previewImg.siblings("p").hide();
        };
        reader.readAsDataURL(this.files[0]);
      });
  });
  // Data Scroll
  jQuery('a[data-scroll]').click(function (e) {
    e.preventDefault();
    var offset = 80;
    var target = ('#' + jQuery(this).data('scroll'));
    var $target = $(target);
    //Animate the scroll to, include easing lib if you want more fancypants easings
    jQuery('html, body').stop().animate({
      'scrollTop': $target.offset().top - offset
    }, 800, 'swing');
  });

  // Category Table Collapse
  jQuery(function () {
    jQuery('.category-collpase-btn').click(function () {
      jQuery(this).parents(".parent-category").next('.child-category').find('table').toggle();
      if (jQuery(this).parents(".parent-category").hasClass("collapsed")) {
        jQuery(this).parents(".parent-category").removeClass("collapsed").next(".child-category").removeClass("show");
      } else {
        jQuery(".parent-category").next(".child-category").removeClass("show");
        jQuery(this).parents(".parent-category").addClass("collapsed").next(".child-category").addClass("show");
      }
    });
  });
  // DatePicker
  if (jQuery.fn.datepicker) {
    jQuery(function () {
      jQuery(".datepicker").datepicker({
        dateFormat: "yy-mm-dd",
        changeMonth: true,
        changeYear: true,
        minDate: -0,
        maxDate: "+1M +10D"
      });
    });
  }
  // TimePicker
  if (jQuery.fn.timepicker) {
    jQuery(function () {
      jQuery(".timepicker").timepicker({
        timeFormat: "h:mm p",
        interval: 30,
        minTime: "06",
        maxTime: "23:55pm",
        defaultTime: "06",
        startTime: "23:59",
        dynamic: true,
        dropdown: true,
        scrollbar: true
      });
    });
  }
  // Minimum Order Coupon Condion
  jQuery('#orderValue').change(function () {
    if (jQuery(this).is(":checked")) {
      jQuery(this).parents('.coupon-condition-field').removeClass('coupon-order-quantity-active').addClass('coupon-order-value-active');
    }
  });
  // Minimum Order Coupon Condion
  jQuery('#orderQuantity').change(function () {
    if (jQuery(this).is(":checked")) {
      jQuery(this).parents('.coupon-condition-field').removeClass('coupon-order-value-active').addClass('coupon-order-quantity-active');
    }
  });
  // Coupon Duration Validation
  jQuery('#coupnEnd').change(function () {
    if (jQuery(this).is(":checked")) {
      jQuery(this).parents('.add-product-form-row').addClass('coupon-end-show');
    } else {
      jQuery(this).parents('.add-product-form-row').removeClass('coupon-end-show');
    }
  });

})




