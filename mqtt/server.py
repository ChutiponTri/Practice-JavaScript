import paho.mqtt.client as mqtt
import random
import time
import json

class MQTT_Server():
    def __init__(self):
        self.client = mqtt.Client(callback_api_version=mqtt.CallbackAPIVersion.VERSION2)
        
        self.client.on_connect = self.onConnect
        self.client.on_disconnect = self.onDisconnect
        self.client.on_message = self.onMessage
        
        broker_address = "broker.emqx.io"
        broker_port = 1883

        self.client.connect(broker_address, broker_port)

    def main(self):
        self.client.loop_start()
        time.sleep(10)
        self.stop()

    def stop(self):
        self.client.loop_stop()

    def onConnect(self, client, userdata, connect_flags, reason_code, properties):
        self.client.subscribe("ton/server/#")
        print("Connected", reason_code)
    
    def onDisconnect(self, client, userdata, disconnect_flags, reason_code, properties):
        print("Disconnected")

    def onMessage(self, client, userdata, message):
        message = json.loads(message.payload)
        print(message)

if __name__ == '__main__':
    mqt = MQTT_Server()
    mqt.main()