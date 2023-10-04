import React, { Component } from 'react'
import itemArr from './data';

const RoomContext=React.createContext();


let url=[];

export default class RoomProvider extends Component {
    state = {
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true
    };

componentDidMount(){
    let rooms = this.formatData(itemArr);
    console.log(rooms);
}
formatData(itemArr){
    let tempItems = itemArr.map(item =>{
        let id = item.sys.id
        // console.log(items.sys);
        console.log(item.fields);
        let images = item.fields.images.map(x => 
          x.fields.file.url
        )
        // console.log(images)

        let room = {...item.fields,images, id}
        return room;
    });
    return tempItems;
}

  render() {
    return (
      <RoomContext.Provider value={{...this.state}}>
        {
            this.props.children
        }
      </RoomContext.Provider>
    )
  }
}
const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
