//state object

const initialState={
    todos:[
        {
            id:1,
            item:"Redux Tutorial"
        },
        {
            id:2,
            item:"Learn Redux"
        }
    ]
}

//define the Reducer Logic 
const todoReducer=(state=initialState,action)=>{
    switch(action.type){
        //logic to add Todo
        case "ADD_TODO":
            return{
                ...state,
                todos:[
                    ...state.todos,
                    action.payload
                ]
            }
            //logic to delete Todo
        case "DELETE_TODO":
            return{
                ...state,
                todos:state.todos.filter(todo=>todo.id!==action.payload)
            }
        default:
            return state
    }
}

export default todoReducer;