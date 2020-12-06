import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomList from './RoomList';


import {RoomConsumer} from '../context';

const RoomSearch = () => {
    return (
        <RoomConsumer>
            {(value) => {
                console.log(value);
                const {sorted_rooms, rooms} = value;
                return(
                    <div>
                        <RoomsFilter rooms={rooms}/>
                        <RoomList rooms={sorted_rooms}/>
                    </div>
                )
            }}
        </RoomConsumer>
    )
}

export default RoomSearch;