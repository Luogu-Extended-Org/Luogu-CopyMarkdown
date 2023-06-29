// ==UserScript==
// @name         Luogu-CopyMarkdown
// @namespace    https://github.com/Luogu-Extended-Org/Luogu-CopyMarkdown
// @description  获取洛谷部分页面源代码
// @author       BlackPanda
// @license      MIT
// @version      0.3
// @match          https://*.luogu.com.cn/*
// @match          https://*.luogu.org/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var url = window.location.href;
    async function user_detail(){
        var button = document.createElement('button');
        button.textContent = '复制Md';
        button.classList.add('button', 'button-size');
        button.addEventListener('click', async function() {
            var introduction = _feInstance.currentData.user.introduction;
            await navigator.clipboard.writeText(introduction);
            alert('复制成功');
        });
        var tmp = document.getElementsByClassName('card padding-default');
        var pos = tmp[0];
        pos.appendChild(button);
    };
    function blog(){
        var button = document.createElement('button');
        button.textContent = '复制Md';
        button.style.position = "absolute";
        button.style.top = "100px";button.style.right = "100px";
        button.classList.add('button-blog', 'button-size-blog');
        button.addEventListener('click', async function() {
            fetch('/api/blog/detail/' + BlogGlobals.blogID).then(res => res.json()).then(res => navigator.clipboard.writeText(res.data.Content));
            alert('复制成功');
        });
        document.body.appendChild(button);
    };
    async function contest_detail(){
        var button = document.createElement('button');
        button.textContent = '复制Md';
        button.classList.add('button', 'button-size');
        button.addEventListener('click', async function() {
            var introduction = _feInstance.currentData.contest.description;
            await navigator.clipboard.writeText(introduction);
            alert('复制成功');
        });
        var tmp = document.getElementsByClassName('card padding-default');
        var pos = tmp[0];
        pos.appendChild(button);
    };
    async function training_detail(){
        var button = document.createElement('button');
        button.textContent = '复制Md';
        button.classList.add('button', 'button-size');
        button.addEventListener('click', async function() {
            var introduction = _feInstance.currentData.training.description;
            await navigator.clipboard.writeText(introduction);
            alert('复制成功');
        });
        var tmp = document.getElementsByClassName('card padding-default');
        var pos = tmp[0];
        pos.appendChild(button);
    };
    var style = document.createElement('style');
    style.textContent = `
        .button {
            background-color: #6495ed;
            color: #fff;
            font-size: 13px;
        }
         .button-blog {
            background-color: #6495ed;
            color: #fff;
            font-size: 13px;
        }
        .button-size {
            width: 50px;
            height: 25px;
        }
        .button-size-blog {
            width: 50px;
            height: 25px;
        }
        * {
          margin: 0;
          padding: 0;
          border: none;
        }
        `;
    document.head.appendChild(style);
    if (url.includes('blog')) {
        blog();
    }
    if (url.includes('user') && !url.endsWith('#practice') && !url.endsWith('#mine') && !url.endsWith('#problem') && !url.includes('follower') && !url.includes('following') && !url.endsWith('#favorite')) {
        window.addEventListener('load', user_detail);
    }
    if (url.includes('contest') && !url.includes('list') && !url.endsWith('#scoreboard') && !url.includes('edit') && !url.includes('contestId')) {
        window.addEventListener('load', contest_detail);
    }
    if (url.includes('training') && !url.includes('edit') && !url.endsWith('#problems') && !url.includes('list')) {
        window.addEventListener('load', training_detail);
    }
})();