// Create Data Variables
var ax1_data = [];
var ay1_data = [];
var az1_data = [];
var gx1_data = [];
var gy1_data = [];
var gz1_data = [];
var ax2_data = [];
var ay2_data = [];
var az2_data = [];
var gx2_data = [];
var gy2_data = [];
var gz2_data = [];
var axm_data = [];
var aym_data = [];
var azm_data = [];
var gxm_data = [];
var gym_data = [];
var gzm_data = [];
var hr_data = [];
let running = false;
let dist1_data = [];
let dist2_data = [];
let distm_data = [];
let dist1 = 0;
let dist2 = 0;
let distm = 0;
let color1 = "green";
let color2 = "green";
let currentMode = "analog"

// Start MQTT Connection
const clientId = "clientId-" + Math.random().toString(16);   // Like clientId-1
const client = new Paho.MQTT.Client("broker.emqx.io", Number(8084), "/mqtt", clientId);

// Set MQTT Callback Function
client.onMessageArrived = onMessageArrived;
client.onConnectionLost = onConnectionLost;

// Function to Start MQTT Connection
function conn(){
    running = true;
    if (!client.isConnected()){
      client.connect({
        useSSL: true,
        onSuccess: onConnect,
        onFailure: onFailure
      });
    }
    console.log("Start");
  }
  
  // Function to Stop MQTT Connection
  function disconn(){
    running = false;
    console.log("Stop");
  }
  
  // Function to Reset Array Data
  function reset(){
    ax1_data.length = 0;
    ay1_data.length = 0;
    az1_data.length = 0;
    gx1_data.length = 0;
    gy1_data.length = 0;
    gz1_data.length = 0;
    ax2_data.length = 0;
    ay2_data.length = 0;
    az2_data.length = 0;
    gx2_data.length = 0;
    gy2_data.length = 0;
    gz2_data.length = 0;
    axm_data.length = 0;
    aym_data.length = 0;
    azm_data.length = 0;
    gxm_data.length = 0;
    gym_data.length = 0;
    gzm_data.length = 0;
    hr_data.length = 0;
    console.log("Reset");
  }
    
  // MQTT Connect Function
  function onConnect() {
    console.log("Connected");
    client.subscribe("ton/server/#");
    message = new Paho.MQTT.Message(JSON.stringify({"data":"HELLO MQTT"}));
    message.destinationName = "ton/server";
    // client.send(message);
  }
  
  // MQTT Connection Failure Function
  function onFailure(responseObject) {
    console.log("Connection Failed: " + responseObject.errorMessage);
  }
  
  // MQTT Connection Lost Function
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("Connection Lost"+responseObject.errorMessage);
    }
  }
  
  // MQTT Message Arrive Function
  function onMessageArrived(message) {
    // console.log("onMessageArrived:"+message.payloadString);
    if (running){
      try {
        var data = JSON.parse(message.payloadString);
        // Process the payload
        if ("ax1" in data){
          ax1_data = ax1_data.concat(data.ax1);
          ay1_data = ay1_data.concat(data.ay1);
          az1_data = az1_data.concat(data.az1);
          gx1_data = gx1_data.concat(data.gx1);
          gy1_data = gy1_data.concat(data.gy1);
          gz1_data = gz1_data.concat(data.gz1);
          dist1 = cumsum(data.gz1, dist1_data, dist1);
          if (Math.abs(data.gz1[data.gz1.length - 1]) > 450){
            color1 = "red";
          }
          else if (Math.abs(data.gz1[data.gz1.length - 1]) > 400){
            color1 = "orange";
          }
          else if (Math.abs(data.gz1[data.gz1.length - 1]) > 350){
            color1 = "yellow";
          }
          else{
            color1 = "green";
          }
          plot_data();
        }
        else if ("ax2" in data){
          ax2_data = ax2_data.concat(data.ax2);
          ay2_data = ay2_data.concat(data.ay2);
          az2_data = az2_data.concat(data.az2);
          gx2_data = gx2_data.concat(data.gx2);
          gy2_data = gy2_data.concat(data.gy2);
          gz2_data = gz2_data.concat(data.gz2);
          dist2 = cumsum(data.gz2, dist2_data, dist2);
          if (Math.abs(data.gz2[data.gz2.length - 1]) > 450){
            color2 = "red";
          }
          else if (Math.abs(data.gz2[data.gz2.length - 1]) > 400){
            color2 = "orange";
          }
          else if (Math.abs(data.gz2[data.gz2.length - 1]) > 350){
            color2 = "yellow";
          }
          else{
            color2 = "green";
          }
          plot_data();
        }
        else if ("axm" in data){
          axm_data = axm_data.concat(data.axm);
          aym_data = aym_data.concat(data.aym);
          azm_data = azm_data.concat(data.azm);
          gxm_data = gxm_data.concat(data.gxm);
          gym_data = gym_data.concat(data.gym);
          gzm_data = gzm_data.concat(data.gzm);
        //   plot_data_m();
        }
        else if ("hr" in data){
          hr_data = hr_data.concat(data.hr);
        //   plot_data_hr();
        }
        else if ("name" in data) {
          document.getElementById("user").innerHTML = "Username : " + data.name;
        }
        falling_check();
      }catch (e) {
        console.error('Failed to parse JSON:', e);
        console.error('Original message payload:', message.payloadString);
      }
    }
  }
  
// Cumulative Sum
function cumsum(arr, dist_data, dist_num){
    // Using map to perform transformations
    arr.map((e)=>{
        e = Math.abs(e) * 0.3 / 10 * Math.PI / 180;
        // console.log(e);
        if (e > 0.0003){
            dist_num = dist_num + e;
        }
        dist_data.push(dist_num);
    });
    return dist_num;
  }

// Function to Plot Digital Data 
function plot_data(){
    var data = [
        {
            title: { text: "Right Wheel Speed (deg/s)" },
            type: "indicator",
            value: Math.abs(gz1_data[gz1_data.length-1]),
            delta: { reference: Math.abs(gz1_data[gz1_data.length-2]) },
            gauge: { axis: { range: [null, 500] }, bar: { color: color1 },  },
            domain: { row:0, column:2 },
            mode: "gauge+number+delta",
        },
        {
            title: { text: "Right Wheel Distance (m)" },
            type: "indicator",
            value: dist1_data[dist1_data.length-1],
            delta: { reference: dist1_data[dist1_data.length-2] },
            gauge: { axis: { range: [null, 500] } },
            domain: { row:0, column:3 },
            mode: "gauge+number+delta",
        },
        {
          title: { text: "Left Wheel Speed (deg/s)" },
          type: "indicator",
          value: Math.abs(gz2_data[gz2_data.length-1]),
          delta: { reference: Math.abs(gz2_data[gz2_data.length-2]) },
          gauge: { axis: { range: [null, 500] }, bar: { color: color2 },  },
          domain: { row:0, column:0 },
          mode: "gauge+number+delta",
      },
      {
          title: { text: "Left Wheel Distance (m)" },
          type: "indicator",
          value: dist2_data[dist2_data.length-1],
          delta: { reference: dist2_data[dist2_data.length-2] },
          gauge: { axis: { range: [null, 500] } },
          domain: { row:0, column:1 },
          mode: "gauge+number+delta",
      }
      ];    
    var layout = { grid: { rows: 1, columns: 4, pattern: "independent" }, height:300 ,autosize:true};
    Plotly.newPlot('digital1', data, layout);
}

function falling_check(){
  let led_label = document.getElementById("led_label");
  let led_color = document.getElementById("led_span");
  if (az1_data.length > 1 || az2_data.length > 1){
    let last_idx = az1_data[az1_data.length - 1];
    let last_id2 = az2_data[az2_data.length - 1];
    if ((last_idx < -0.7 || last_idx > 0.7) || (last_id2 < -0.7 || last_id2 > 0.7)){
      led_color.style.color = "red";
      led_label.innerHTML = "Falling Status : Falling";
    }
    else {
      led_color.style.color = "green";
      led_label.innerHTML = "Falling Status : Not Falling";
    }
  }
}

function modeChange(event){
  const selectMode = event.target.value;
  currentMode = selectMode;
  console.log("Mode", selectMode);
}

plot_data();
conn();
// plot_data2("green");