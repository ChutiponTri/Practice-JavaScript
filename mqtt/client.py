import paho.mqtt.client as mqtt
import random
import time
import json

class MQTT_Client():
    def __init__(self):
        self.client = mqtt.Client(callback_api_version=mqtt.CallbackAPIVersion.VERSION2)
        
        self.client.on_connect = self.onConnect
        self.client.on_disconnect = self.onDisconnect
        
        broker_address = "broker.emqx.io"
        broker_port = 1883

        self.client.connect(broker_address, broker_port)

    def main(self):
        self.client.loop_start()
        while True:
            ax = [random.randint(-1, 1) for _ in range(10)]
            ay = [random.randint(-1, 1) for _ in range(10)]
            az = [random.randint(-1, 1) for _ in range(10)]
            gx = [random.randint(-200, 200) for _ in range(10)]
            gy = [random.randint(-200, 200) for _ in range(10)]
            gz = [random.randint(-200, 200) for _ in range(10)]
            data = json.dumps({"ax1":ax, "ay1":ay, "az1":az, "gx1":gx, "gy1":gy, "gz1":gz})
            self.client.publish("ton/server/one", data)
            time.sleep(2)

    def stop(self):
        self.client.loop_stop()

    def onConnect(self, client, userdata, connect_flags, reason_code, properties):
        print("Connected", reason_code)
    
    def onDisconnect(self, client, userdata, disconnect_flags, reason_code, properties):
        print("Disconnected")

if __name__ == '__main__':
    mqt = MQTT_Client()
    mqt.main()