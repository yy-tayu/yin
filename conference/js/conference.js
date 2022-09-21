var socket = io.connect("http://localhost:8095");
var box = document.getElementById('box');
var btns = document.querySelectorAll(".btn");;
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
        var tab = document.getElementsByTagName("table")[0];
        tab.innerHTML += `<tr>
        <td>2022/09/19 18：30</td>
        <td>我的会议</td>
        <td>561 948 197</td>
        <td><button class="smallBtn join"><a href="meeting.html">加入会议</a></button></td>
    </tr>`
    } else {
        alert("密码错误，请重新输入密码")
    }
}
// 删除
var del = document.querySelector(".delete")
del.onclick = function () {
    var tr = document.querySelectorAll("#table tr")[1];
    tr.remove();
}
// 发起会议
var openBtn = document.querySelector(".btns #open")
openBtn.onclick = function () {
    startVideo.style.display = 'flex';
    hidden.style.display = 'block';
}