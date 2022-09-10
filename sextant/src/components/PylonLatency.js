import { useEffect, useState } from "react";
import { w3cwebsocket } from "websocket";

const client = new w3cwebsocket('ws://127.0.0.1:55455');

const PylonLatency = () => {

    const [latency, setLatency] = useState(null);

    useEffect(() => {
        client.onopen = () => {
            console.log("Opened");
        }
        client.onmessage = (message) => {
            const dataFromServer = JSON.parse(message.data);
            const now = new Date();
            const secondSinceEpoch = now - dataFromServer;
            setLatency(Math.abs(secondSinceEpoch));
        }
    })

    return (
        <div className="latency">{latency} s</div>
    );
}

export default PylonLatency;