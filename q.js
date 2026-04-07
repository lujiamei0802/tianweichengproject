window.onload = function (){
    var odiv = document.getElementById("box");
    var drop = document.getElementById("drop");
    drop.onmousedown = function (ev) { //鼠标按下事件处理函数
        var oEvent = ev || event;
        var drag = oEvent.target || oEvent.srcElement;
        var gapX = oEvent.clientX - odiv.offsetLeft;
        var gapY = oEvent.clientY - odiv.offsetTop;
        document.onmousemove =function (ev) {//鼠标移动事件处理函数 
            var oEvent = ev || event;
            var l = oEvent.clientX - gapX;
            var t = oEvent.clientY - gapY;
            var otherX = document.documentElement.clientWidth - odiv.offsetWidth;
            var otherY = document.documentElement.clientHeight - odiv.offsetHeight;
            //限定拖动范围局限于浏览器窗口 
            if (l < 0) {
                odiv.style.left = 0 + "px";
            } else if (l > otherX) {
                odiv.style.left = otherX + "px";
            } else {
                odiv.style.left = l + "px";
            }
            if (t < 0) {
                odiv.style.top = 0 + "px";
            } else if (t > otherY) {
                odiv.style.top = otherY + "px";
            } else {
                odiv.style.top = t + "px";
            }
            odiv.onmouseup = function () { //松开鼠标，停止拖拽 
                document.onmousemove = null;
            }
            // 防止鼠标拖动时，选中拖动条中文字
            window.getSelection ? window.getSelection().removeAllRanges(): document.selection.empty();
        }
    }
}