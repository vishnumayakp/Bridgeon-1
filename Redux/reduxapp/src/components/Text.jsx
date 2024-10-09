import React, { useState } from 'react'

const initialState =[
    {
        name:'house',
        rooms:[
           {
             name:'room1',
             text:'Room'
           }
        ]
    },
    {
        name:'car',
        text:'i20'
    }
]

function Text() {
    const [info,setInfo]=useState(initialState)

    function RoomName(props){
        const {
            data,
            onChange
         }=props
    
         const onRoomChange=(e)=>{
            setInfo((state)=>{
                var newState=[
                   {
                    ...state[0],
                    rooms:[
                     {
                         ...state[0].rooms[0],
                         text:e.target.value
                     }
                    ]
                   }
                ]
            })
         }
        return(
            <div>
                <div>update Room Name</div>
                <input type="text" value={data.text} onChange={onChange} />
            </div>
        )
    }
    
    function CarName(props){
        const{
            data,
            onChange
        }=props
    
       const onCarChange=(e)=>{
        setInfo((state)=>{
            const newState=[
                state[0],
                {
                    ...state[1],
                    text:e.target.value
                }
            ]
        })
       }
        return(
            <div>
                <div>update Car Name</div>
                <input type="text" value={data.text} onChange={onChange} />
            </div>
        )
    }
  return (
    <div>
      <RoomName data={info[0].rooms[0]} onChange={onRoomChange}/>
      <CarName data={info[1]} onChange={onCarChange}/>
    </div>
  )
}

export default Text
