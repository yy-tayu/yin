1. add video player and loop local video.
2. Read the configuration json file to set the width and height of the video.
3. Put a button next to the video and click it to full screen.
4. After the full screen, move the mouse to the top of the screen for 2 seconds, and draw an exit full screen button on it.
5. The console prints the coordinates of the mouse on the video, but does not print outside the video
6. The console prints keyboard events, except for special keys such as F5, and prints the coordinates of the mouse double-click scroll event on the video.
7. Introduce soketio, link the signaling server port 8095, and set a breakpoint in the signaling server to enter the callback function of the connection. Of course you can do emit authentication as well.
8. Separate the files, js is proposed separately to form a specification, css, js, and images are all stored in folders.
9. Make a fake login page, enter the fixed username and password to jump to the next page.
10. Make a fake device list page, you can refer to Sunflower, which will be displayed after successful login.
11. After selecting the device, jump to a pure black page. The center of the page shows that it is being remote. After 5 seconds, it jumps to your mp4 playing page.
12. Replace the mp4 with owt, and delete the code for pushing the stream from the sample I gave you, just leave the display.
13. page beautification