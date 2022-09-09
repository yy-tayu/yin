var socket = io.connect("http://localhost:8095");
let onServerDisconnected = null;
const MAX_TRIALS = 10;
// 建立连接
socket.on('connect', function () {
    reconnectTimes = 0;
    // 检查与服务器是否连接
    console.log(socket.connected);
    socket.emit('authentication', { token: "testclient" }, (data) => {
        if (data.uid) {
            console.log('Authentication passed. User ID: ' + data.uid);
        } else {
            console.error('Faild to connect to Socket.IO server.');
        }
    });
    // 断开连接
    socket.on('disconnect', function () {
        console.info('Disconnected from websocket server.');
        // 重新连接时间》MAX_TRIALS与服务的连接丢失时
        if (reconnectTimes >= MAX_TRIALS && self.onServerDisconnected) {
            self.onServerDisconnected();
        }
    });
    var video = document.querySelector('video');
    // 根据json数据显示video的宽高
    $.getJSON("./api/data.json", function (data) {
        console.log(data);
        video.addEventListener('canplay', function () {
            this.width = data.width;
            this.height = data.height;
        });
    })
    // 点击按钮全屏播放
    var btnFull = document.getElementById("full");
    btnFull.onclick = () => {
        video.requestFullscreen()
    }
    // 鼠标在video上时打印位置
    video.addEventListener("mousemove", (e) => {
        let x = e.clientX;
        let y = e.clientY;
        console.log("鼠标在video上的位置:", x, y);
    })
    // 监听键盘事件
    window.addEventListener("keydown", (event) => {
        if (event.key == "F5") {
            return false;
        } else {
            console.log('按下的键盘是: ' + event.key);
        }
    })
    //单击延时触发
    var clickTimeId;
    // 单击坐标
    video.addEventListener("click", (e) => {
        // 取消上次延时未执行的方法
        clearTimeout(clickTimeId);
        //执行延时
        clickTimeId = setTimeout(function () {
            let x = e.clientX;
            let y = e.clientY;
            console.log("鼠标在video上点击的位置:", x, y);
        }, 300);
    })
    // 双击坐标
    video.addEventListener("dblclick", (e) => {
        // 取消上次延时未执行的方法
        clearTimeout(clickTimeId);
        let x = e.clientX;
        let y = e.clientY;
        console.log("鼠标在video上双击的位置:", x, y);
    })
    // mouse button
    video.addEventListener("mousedown", (e) => {
        if (e.button == 2) {
            console.log("你点了右键");
        } else if (e.button == 0) {
            console.log("你点了左键");
        } else if (e.button == 1) {
            console.log("你点了滚轮");
        }
    })
    // 滚动事件
    video.addEventListener("mousewheel", (e) => {
        let x = e.clientX;
        let y = e.clientY;
        console.log("鼠标滚轮在video上滚动的位置:", x, y);
    })
});