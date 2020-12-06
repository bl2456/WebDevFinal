import React, { Component } from 'react';
import items from './data';

const RoomContext = React.createContext();

class RoomProvider extends Component {
    state = {
        rooms: [],
        sorted_rooms: [],
        featured_rooms: [],
        loading: true, //for future loading when hosting the app, not just locally

        //state for default filtering
        type: 'all',
        capacity: 1,
        price: 0,
        size: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        bathrooms: 1,
        beds: 1,
        pets: false,

    };

    handleChange = (e) => {
        const type = e.target.type;
        const name = e.target.name;
        const value = (type === "checkbox" ? e.target.checked : e.target.value);;
        console.log(type,name,value);

        this.setState({
            [name]: value,
        },this.filterRooms)
    }

    filterRooms = () => {
        let {
            rooms,
            type,
            capacity,
            price,
            size,
            beds,
            bathrooms,
            breakfast,
            pets,
        } = this.state;

        let temp = [...rooms];
        if (type !== 'all'){
            temp = temp.filter(room => (room.type === type));
        }

        if (capacity !== 1){
            temp = temp.filter(room => (room.capacity >= parseInt(capacity)));
        }

        if (beds !== 1){
            temp = temp.filter(room => (room.beds >= parseInt(beds)));
        }

        if (bathrooms !== 1){
            temp = temp.filter(room => (room.bathrooms >= parseInt(bathrooms)));
        }

        temp = temp.filter(room => (room.price <= parseInt(price)));
        temp = temp.filter(room => (room.size <= parseInt(size)));
        
        if (breakfast){
            temp = temp.filter(room => (room.breakfast === true));
        }

        if (pets){
            temp = temp.filter(room => (room.pets === true));
        }

        this.setState({sorted_rooms: temp});
    }
    
    componentDidMount(){
        let rooms = this.formatData(items);
        let featured_rooms = rooms.filter(room => room.featured === true);
        let maxPrice = Math.max(...rooms.map(room=>room.price));
        let maxSize = Math.max(...rooms.map(room=>room.size));
        this.setState({
            rooms,
            sorted_rooms: rooms,
            featured_rooms,
            loading: false,
            price: maxPrice,
            size: maxSize,
            maxPrice: maxPrice,
            maxSize: maxSize,
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
            <RoomContext.Provider value={{...this.state, getRoom: this.getRoom, handleChange: this.handleChange}}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export{RoomProvider, RoomConsumer, RoomContext};