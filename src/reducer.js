const { purple, green, red } = require("color-name");

const initialState={
  Todos:[
    {id:0,Content:'wash car',Completed:false,color:'red'},
    {id:1,Content:'buy bread',Completed:true,color:'green'},
    {id:2,Content:'wash car',Completed:false,color:'red'}
  ],
  filters:{
    status:'Active',
    colors:['red','blue']
  }
}
export deafult function appreducer(state=initialState,action){
switch(action.type){
  default:
    return state
}
}