//FunFunFun - D
let eleFromID, createEle, addCls, sendMsg, printMsg, cls;
//FunFunFun - I
eleFromID = (id) => document.getElementById(id);
createEle = (ele) => document.createElement(ele);
addCls = (ele, cls) => ele.classList.add(...cls);
sendMsg = () => {
  const chatValue = chatArea.value;
  chatArea.value = "";
  if (/\S/.test(chatValue)) {
    printMsg(chatValue, 0);
    //emit
  }
};
printMsg = (msg, c) => {
  let ele = createEle("div");
  ele.classList.add("msg", cls[c]);
  ele.innerHTML = msg;
  msgArea.appendChild(ele);
  msgArea.scrollTop = msgArea.scrollHeight;
};
cls = ["msg-sent", "msg-recived"];
//send button
const sendButton = eleFromID("send-msg");
const chatArea = eleFromID("chat-msg");
const msgArea = eleFromID("msg-area");
sendButton.addEventListener("click", sendMsg);
chatArea.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    sendButton.click();
  }
});
//send button
//Colors and Brushes
const currBrush = {
  size: 1,
  colorCode: 1,
};
//
document.querySelectorAll(".brush").forEach((item) => {
  item.addEventListener("click", (event) => {
    currBrush.size = parseInt(event.target.getAttribute("value"), 10);
  });
});
document.querySelectorAll(".palette-color-btn").forEach((item) => {
  item.addEventListener("click", (event) => {
    currBrush.colorCode = parseInt(event.target.getAttribute("value"), 10);
  });
});
//sketch
let sketchWidth = () =>
  parseInt(
    getComputedStyle(document.getElementById("sketch-holder")).width,
    10
  );
let sketchHeight = () =>
  parseInt(
    getComputedStyle(document.getElementById("sketch-holder")).width,
    10
  ) *
  (3 / 4);

function setup() {
  var canvas = createCanvas(sketchWidth(), sketchHeight());

  canvas.parent("sketch-holder");

  background(255);
}
function windowResized() {
  resizeCanvas(sketchWidth(), sketchHeight());
  setup();
}
