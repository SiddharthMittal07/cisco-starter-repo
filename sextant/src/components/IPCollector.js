import { useEffect, useState } from "react";

const IPCollector = ({ isIPv4 }) => {

    const url = ".ipify.org/?format=json";
    const [ip, setIp] = useState(null);

    useEffect(() => {
        const fetchIp = async () => {
            let fullUrl;
            if (isIPv4) {
                fullUrl = "https://api" + url;
            } else {
                fullUrl = "https://api64" + url;
            }

            const res = await fetch(fullUrl);
            const data = await res.json();
            setIp(data.ip);
        }

        fetchIp()
    }, [isIPv4])

    if (!ip) {
        return (
            <div className="loading-ip"></div>
        );
    }

    return (
        <p className="ip">
            {ip}
        </p>
    );
}

export default IPCollector;