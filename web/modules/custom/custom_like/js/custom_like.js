(function ($, Drupal) {
  Drupal.behaviors.customLike = {
    attach: function (context, settings) {
      $(".like-button", context).click(function () {
        var nodeId = $(this).data("nodeId");
        var button = $(this); // Define the button variable here
        $.ajax({
          url: "/custom_like/like/" + nodeId,
          method: "POST",
          success: function (response) {
            button.text("Like (" + response.likes + ")");
          },
        });
      });
    },
  };
})(jQuery, Drupal);
