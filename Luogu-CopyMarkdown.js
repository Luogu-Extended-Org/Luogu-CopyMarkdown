// ==UserScript==
// @name         主页源代码获取
// @namespace    https://www.luogu.com.cn/user/486799/
// @description  获取个人主页源代码
// @author       BlackPanda
// @license      MIT
// @version      0.1
// @match        https://www.luogu.com.cn/user/*
// @grant        none
// ==/UserScript==
 
(function() {
    'use strict';
    async function user_detail(){
        var button = document.createElement('button');
        button.textContent = 'Copy';
        button.classList.add('red-button', 'button-size');
        button.addEventListener('click', async function() {
            var introduction = _feInstance.currentData.user.introduction;
            await navigator.clipboard.writeText(introduction);
            alert('复制成功');
        });
        var tmp = document.getElementsByClassName('card padding-default');
        var pos = tmp[0];
        pos.appendChild(button);
    };
    var style = document.createElement('style');
    style.textContent = `
        .red-button {
            background-color: rgba(0, 0, 0, 0.5);
            position: relative;
            display: inline-block;
            padding: 1px 10px 3px;
            color: #fff;
            border-radius: 6px;
            box-shadow: 0 0 7px #1e90ff;
            cursor: pointer;
        }
        .button-size {
            width: 75px;
            height: 25px;
        }
        `;
    document.head.appendChild(style);
    window.addEventListener('load', user_detail);
})();