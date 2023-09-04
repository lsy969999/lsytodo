import ResetDatabaseButton from "./component/ResetDatabaseButton"
import TodoLists from "./component/TodoLists"


const page = () => {
  return (
    <div>
        <h1>Dexie Test</h1>
        <TodoLists/>
        <ResetDatabaseButton/>
    </div>
  )
}

export default page