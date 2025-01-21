import React, { useState } from 'react';

const Alerts: React.FC = () => {
    const [priceAlert, setPriceAlert] = useState<number | null>(null);
    const [indicatorAlert, setIndicatorAlert] = useState<string>('');
    const [notifications, setNotifications] = useState<string[]>([]);

    const handleSetPriceAlert = () => {
        if (priceAlert) {
            setNotifications([...notifications, `Price alert set at ${priceAlert}`]);
        }
    };

    const handleSetIndicatorAlert = () => {
        if (indicatorAlert) {
            setNotifications([...notifications, `Indicator alert set for ${indicatorAlert}`]);
        }
    };

    return (
        <div>
            <h2>Set Alerts</h2>
            <div>
                <label>
                    Price Alert:
                    <input
                        type="number"
                        value={priceAlert || ''}
                        onChange={(e) => setPriceAlert(Number(e.target.value))}
                    />
                </label>
                <button onClick={handleSetPriceAlert}>Set Price Alert</button>
            </div>
            <div>
                <label>
                    Indicator Alert:
                    <input
                        type="text"
                        value={indicatorAlert}
                        onChange={(e) => setIndicatorAlert(e.target.value)}
                    />
                </label>
                <button onClick={handleSetIndicatorAlert}>Set Indicator Alert</button>
            </div>
            <div>
                <h3>Notifications</h3>
                <ul>
                    {notifications.map((notification, index) => (
                        <li key={index}>{notification}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Alerts;