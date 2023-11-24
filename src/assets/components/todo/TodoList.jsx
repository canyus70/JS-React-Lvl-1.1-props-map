import TodoItem from "./TodoItem";
import { v4 as uuidv4 } from "uuid";

const TodoList = (props) => {
    return ( 
            <section>
                
            {props.todoArr.map((bla) => 
            <TodoItem key={uuidv4()}
            inhalt={bla.todo}/>)}

            </section>

       );
}

export default TodoList;