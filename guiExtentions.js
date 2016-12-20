(function () {
    
    activate();

    function activate() {
        addScrollToNewCommentButton();
    }

    function addScrollToNewCommentButton() {
        var parentContainer = $('div.pull-request-title');
        
        var btn = $('<button type="button" id="customScrollToNewCommentButton" style="">Go To New Comment</button>')
                      .on('click', scrollToNewComment);
        parentContainer.append(btn);
    }

    function scrollToNewComment() { 
        var newCommentBoxOffset =  $('li.new-comment').offset().top;
        $('html, body').animate({scrollTop: newCommentBoxOffset}, 1000); 
    }
})();
