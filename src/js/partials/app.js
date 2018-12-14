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
      scrollToTarget: function (scrollSelector, speed) {
         const links = $(scrollSelector);
         links.click(function (e) {
            e.preventDefault();
            const _this = $(this);
            const href = _this.attr('href');
            if (href.length <= 1) {
               return;
            }
            const target = $(href);
            if (!target.length) {
               return;
            }
            const top = target.offset().top;
            $('html, body').animate({
               scrollTop: top
            }, speed);
         });
      },
      init: function () {
         App.showCommentExpert();
         App.scrollToTarget('.js-scroll', 700);
      },
   };
})();