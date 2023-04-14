function Todo ({arr, set}) {
    function checkedTodo(id) {
        let newArr = [...arr].filter(i => {
            if(i.id == id){
                i.checked = !i.checked
            }
            return i
        })
        set(newArr)
    }
    return (
        <div>
            {
                arr.map(item => (
                    <div className="list-component" key={item.id}>
                        <div className={item.checked == true ? 'checked':''}>{item.title}</div>
                        <button onClick={() => checkedTodo(item.id)}>{item.checked == true ? 'x' : '✓'}</button>
                    </div>
                ))
            }
        </div>
    )
}
export default Todo