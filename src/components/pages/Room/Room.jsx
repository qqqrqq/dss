import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './Room.css';

const Room = (props) => {

    const [currentRoom, setCurrentRoom] = useState(null);
    const [clients, setClients] = useState([]);
    const [userData, setUserData] = useState(null)
    const room = 1;

    useEffect(() => {
        const newSocket = io.connect('https://aa75ed01-6187-4024-8e22-8e8f0f974aa6-00-x63d1rwkgnee.sisko.replit.dev/:3001');
          const tg = window.Telegram.WebApp
          const user= tg.initDataUnsafe?.user;
          setUserData(user)
        const joinRoom = () => {
            if (room !== '') {
                newSocket.emit('join_room', {room , userData});
            }
        };

        joinRoom();

        newSocket.on('room_info', ({ room, clients }) => {
            setCurrentRoom(room);
            setClients(clients);
        });

        newSocket.on('clients_updated', (clients) => {
            setClients(clients);
        });

        // Функция очистки эффекта
        return () => {
            newSocket.off('room_info');
            newSocket.off('clients_updated');
            newSocket.disconnect();
        };
    }, [userData]); // Пустой массив зависимостей, чтобы эффект выполнился только один раз

    return (
        <div>
            <p>Room: {currentRoom}</p>
            <div>
                <p>Users:</p>
                <ul>
                    {clients.map((client, index) => (
                        <li key={index}>{client}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Room;