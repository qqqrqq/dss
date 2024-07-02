import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './Room.css';

const Room = (props) => {
    const socket = io.connect('http://localhost:3001');
    const [currentRoom, setCurrentRoom] = useState(null);
    const [clients, setClients] = useState([]);

    const room = 1;


    useEffect(() => {
        
    const joinRoom = () => {
        if (room !== '') {
            socket.emit('join_room', room);
        }
    };
        joinRoom();
     
        socket.on('room_info', ({ room, clients }) => {
            setCurrentRoom(room);
            setClients(clients);
        });
       
        socket.on('clients_updated', (clients) => {
     
            setClients(clients);
        });
       
        // Функция очистки эффекта
        return () => {
            socket.off('room_info');
            socket.off('clients_updated');
        };
    }, [socket]); // Пустой массив зависимостей, чтобы эффект выполнился только один раз


    
    return (
        <div>
            <p>Room: {currentRoom}</p>
            <div>
                <p>Users:</p>
                <ul>
                    {clients.length === 0 ? 'Loading!': clients.map((client, index) => (
                        <li key={index}>{client}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Room;
