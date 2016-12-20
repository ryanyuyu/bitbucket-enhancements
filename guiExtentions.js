// ==UserScript==
// @name         Bitbucket scroll to new comment in pull request
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Augment bitbucket pull request interface with a button that scrolls you to the new comment section
// @author       Ryan Yuyuenyongwatana
// @match        https://bitbucket.org/*/pull-requests/*
// @grant        none
// ==/UserScript==

(function () {
    
    activate();

    function activate() {
        addScrollToNewCommentButton();
    }

    function addScrollToNewCommentButton() {
        var parentContainer = $('div.pull-request-title');
        
        var btn = $('<button type="button" id="customScrollToNewCommentButton" onclick="scrollToNewComment()" style="">Go To New Comment</button>');
        parentContainer.append(btn);
    }

    function scrollToNewComment() { 
        var newCommentBoxOffset =  $('li.new-comment').offset().top;
        $('html, body').animate({scrollTop: newCommentBoxOffset}, 1000); 
    }
})();
