// ==UserScript==
// @name         主页源代码获取
// @namespace    https://www.luogu.com.cn/user/486799/
// @description  获取个人主页源代码
// @author       BlackPanda
// @license      MIT
// @version      0.2
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
            background-color: #6495ed;
            color: #fff;
            border-radius: 6px;
        }
        .button-size {
            width: 75px;
            height: 25px;
        }
        * {
          margin: 0;
          padding: 0;
          border: none;
        }
        `;
    document.head.appendChild(style);
    window.addEventListener('load', user_detail);
})();