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
});