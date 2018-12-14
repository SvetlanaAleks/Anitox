const App = (function () {
   "use strict";
   return {
      showCommentExpert: function () {
         $(document).on('click', '.js-show-more', function () {
            const _this = $(this);
            const comment = _this.siblings('.desc');
            comment.toggleClass('desc--full');
         });
      },
      init: function () {
         App.showCommentExpert();
      },
   };
})();