import React, { Component } from 'react';
import items from './data';

const RoomContext = React.createContext();

class RoomProvider extends Component {
    state = {
        rooms: [],
        sorted_rooms: [],
        featured_rooms: [],
        loading: true, //for future loading when hosting the app, not just locally
    };
    
    componentDidMount(){
        let rooms = this.formatData(items);
        let featured_rooms = rooms.filter(room => room.featured === true);
        this.setState({
            rooms,
            sorted_rooms: rooms,
            featured_rooms,
            loading: false,
        })
    }

    //formatData flattens out the object
    formatData(items){
        let temp = items.map(item => {
            let item_id = item.sys.id;
            let images = item.fields.images.map(image => {
                return(image.fields.file.url)
            });

            let room_info = {...item.fields, images, item_id} //images property gets replaced by flattened out image object with urls
            return room_info;    
        });

        return temp;
    }

    getRoom = (variable) => {
        let temp = [...this.state.rooms];
        const room = temp.find((room)=> room.variable === variable);
        return room;
    }

    render() {
        return (
            <RoomContext.Provider value={{...this.state, getRoom: this.getRoom}}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export{RoomProvider, RoomConsumer, RoomContext};