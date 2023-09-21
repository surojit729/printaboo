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
  // Sidebar Dropdown
  jQuery(".sidebar-menu-outer li.menu-item-has-children > a").click(function () {
    jQuery('.sidebar-menu-outer .sub-menu').slideUp();
    if (jQuery(this).parent().find(".sub-menu").css('display') == 'none') {
      jQuery(this).parent().find(".sub-menu").slideDown();
      jQuery("body").addClass("sub_menu_active");
    } else {
      jQuery(this).parent().find(".sub-menu").slideUp();
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
  jQuery(function () {
    "use strict" // Start of use strict
    // Configure tooltips for collapsed side navigation
    jQuery('.navbar-sidenav [data-toggle="tooltip"]').tooltip({
      template:
        '<div class="tooltip navbar-sidenav-tooltip bs-tooltip-right" role="tooltip" style="pointer-events: none;"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    })
  })
})

jQuery(document).ready(function () {
  // Toggle sidebar when the button is clicked
  jQuery("#sidebarCollapse").on("click", function () {
    jQuery("#sidebar").toggleClass("active")
    jQuery("#content").toggleClass("active")
  })
})
