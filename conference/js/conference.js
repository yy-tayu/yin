var socket = io.connect("http://localhost:8095");
var box = document.getElementById('box');
var btns = document.querySelectorAll(".btn");;
// var btns = document.getElementsByTagName('button');
var con = box.querySelectorAll('.con');
for (var i = 0; i < btns.length; i++) {
    var btn = btns[i];
    btn.index = i;// 给每个按钮添加一个自定义属性，用来存储当前的索引
    btn.onclick = function () {
        for (var j = 0; j < btns.length; j++) {
            btns[j].className = '';
        }
        this.className = 'current';
        for (var k = 0; k < con.length; k++) {
            con[k].style.display = 'none';
        }
        con[this.index].style.display = 'block';
    }
}
// 会议列表
var content = document.getElementById('content');
var tableBtns = document.querySelectorAll(".bigBtn");;
var table = content.querySelectorAll('.tables');
for (var i = 0; i < tableBtns.length; i++) {
    var tableBtn = tableBtns[i];
    tableBtn.index = i;// 给每个按钮添加一个自定义属性，用来存储当前的索引
    tableBtn.onclick = function () {
        for (var j = 0; j < btns.length; j++) {
            tableBtns[j].className = '';
        }
        this.className = 'current';
        for (var k = 0; k < table.length; k++) {
            table[k].style.display = 'none';
        }
        table[this.index].style.display = 'block';
    }
}
// 发起视频弹窗
var open = document.getElementById("open")
var hidden = document.getElementById("hidden")
var startVideo = document.getElementById("start-video")
var close = document.getElementById("close")

open.onclick = function () {
    startVideo.style.display = 'flex';
    hidden.style.display = 'block';
}
close.onclick = function () {
    startVideo.style.display = 'none';
    hidden.style.display = 'none';
    startVideo.style.left = '';
}
// 进入会议
var login = document.getElementById("login")
login.onclick = function () {
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    if (username == "admin" && password == "123") {
        self.location = "meeting.html";
    }
}