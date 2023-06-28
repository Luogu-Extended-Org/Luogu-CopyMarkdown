// ==UserScript==
// @name         Luogu-CopyMarkdown
// @namespace    https://github.com/Luogu-Extended-Org/Luogu-CopyMarkdown
// @description  获取洛谷部分页面源代码
// @author       BlackPanda
// @license      MIT
// @version      0.25
// @match          https://*.luogu.com.cn/*
// @match          https://*.luogu.org/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var url = window.location.href;
    async function user_detail(){
        var button = document.createElement('button');
        button.textContent = 'Copy';
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
    //To do
    async function blog(){
        var button = document.createElement('button');
        button.textContent = 'Copy';
        button.classList.add('button-blog', 'button-size-blog');
        button.addEventListener('click', async function() {
            fetch('/api/blog/detail/' + BlogGlobals.blogID).then(res => res.json()).then(res => navigator.clipboard.writeText(res.data.Content));
            alert('复制成功');
        });
        var pos = document.querySelector('div>h2');
        pos.insertBefore(button, pos.children[0]);
    };
    async function contest_detail(){
        var button = document.createElement('button');
        button.textContent = 'Copy';
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
        button.textContent = 'Copy';
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
            border-radius: 6px;
        }
         .button-blog {
            background-color: #6495ed;
            color: #fff;
            border-radius: 6px;
            font-size: 15px;
        }
        .button-size {
            width: 50px;
            height: 25px;
        }
        .button-size-blog {
            width: 40px;
            height: 25px;
        }
        * {
          margin: 0;
          padding: 0;
          border: none;
        }
        `;
    if (url.includes('blog')) {
        //To do
        //document.head.appendChild(style);
        //window.addEventListener('load', blog);
    }
    if (url.includes('user') && !url.endsWith('#practice') && !url.endsWith('#mine') && !url.endsWith('#problem') && !url.includes('follower') && !url.includes('following') && !url.endsWith('#favorite')) {
        document.head.appendChild(style);
        window.addEventListener('load', user_detail);
    }
    if (url.includes('contest') && !url.includes('list') && !url.endsWith('#scoreboard') && !url.includes('edit')) {
        document.head.appendChild(style);
        window.addEventListener('load', contest_detail);
    }
    if (url.includes('training') && !url.includes('edit') && !url.endsWith('#problems') && !url.includes('list')) {
        document.head.appendChild(style);
        window.addEventListener('load', training_detail);
    }
})();