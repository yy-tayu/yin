var video = document.querySelector('video');
// 根据json数据显示video的宽高
$.getJSON("./api/data.json", function (data) {
    console.log(data);
    video.addEventListener('canplay', function () {
        this.width = data.width;
        this.height = data.height;
    });
})
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

var socket = io.connect("http://localhost:8095");
const signaling = new SignalingChannel();
let publicationForCamera;
const p2p = new Owt.P2P.P2PClient({
    audioEncodings: true,
    videoEncodings: [{
        codec: {
            name: 'h264',
        },
    }, {
        codec: {
            name: 'vp9',
        },
    }, {
        codec: {
            name: 'vp8',
        },
    }],
}, signaling);

let localStream;
let screenStream;
// 5秒后显示共享弹窗
$(function () {
    setTimeout(function () {
        $("#video").show();
        $(".loading").removeClass("loading");
        const config = {
            audio: {
                source: 'screen-cast',
            },
            video: {
                source: 'screen-cast',
            },
        };
        let mediaStream;
        Owt.Base.MediaStreamFactory.createMediaStream(config).then((stream) => {
            mediaStream = stream;
            screenStream = new Owt.Base.LocalStream(mediaStream, new Owt.Base.StreamSourceInfo('screen-cast', 'screen-cast'));
            $('#localVideo').get(0).srcObject = screenStream.mediaStream;
        }, (err) => {
            console.error('Failed to create MediaStream, ' + err);
        });
    }, 5000);
})