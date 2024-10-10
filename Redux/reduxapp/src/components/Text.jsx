
import React, { useState } from 'react'
import { produce } from 'immer'


const initialState=[
    {
        name:'house',
        rooms:[
           {
             name:'room1', 
              text:'Room1'
           }
        ]
    },

    {
        name:'car',
        text:'i20'
    }
]

function RoomName(props){
    const{
        data,
        onChange
    }=props
     
    return(
        <div>
            <div>Update Room Name</div>
            <input type="text" value={data.text} onChange={onChange}/>
        </div>
    )
}

function CarName(props){
    const{
        data,
        onChange
    }=props
    return (
        <div>
            <div>Update Car Name</div>
            <input type="text" value={data.text} onChange={onChange}/>
        </div>
    )
}

function Text() {
    const[info,setInfo]=useState(initialState)
    const onRoomChange=(e)=>{
         setInfo((state)=>{    
        const newState= produce(state, (draft)=>{
            draft[0].rooms[0].text=e.target.value
        })
                                            
         })

         //     const newState=[
        //         {
        //             ...state[0],          // Shallow Cloning
        //             rooms:{
        //                 ...state[0].rooms[0],
        //                 text:e.target.value
        //             }
        //         }
        //     ]
                //Deep Cloning                                         // const newState=JSON.parse(JSON.stringify(state))
                                                                      // newState[0].rooms[0].text=e.target.value
    }
    const onCarChange=(e)=>{
        setInfo((state)=>{
            const newState= produce(state,(draft)=>{
                draft[1].text=e.target.value
            })
        },[])

         // const newState=[
            //     state[0],
            //     {
            //         ...state[1],
            //         text:e.target.value
            //     }
            // ]
            // const newState=JSON.parse(JSON.stringify(state))
            // newState[1].text=e.target.value
    }
    console.log(info);
    
  return (
    <div>
      <RoomName data={info[0].rooms[0]} onChange={onRoomChange}/>
      <CarName data={info[1]} onChange={onCarChange}/>
    </div>
  )
}

export default Text
