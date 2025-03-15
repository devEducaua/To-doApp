import { useState } from "react"

function App() {
    
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");

    function addTask() {
        if (task.trim() === "") return;
            setTasks([...tasks, task]);
            setTask('');
    }

    function removeTask(index) {
        setTasks(tasks.filter((_, i) => i !== index))
    }

    return (
        <main className="font-['sans-serif'] h-screen w-screen bg-zinc-200 flex flex-col justify-center items-center">
            <h1 className='text-[3em] text-zinc-400'>To-do</h1>

            <div className='m-10 w-130 h-12 overflow-hidden rounded-xl shadow-xl'>
                <input onKeyDown={(e) => e.key === 'Enter' && addTask()} value={task} onChange={(e) => setTask(e.target.value)} className='w-100 h-12 outline-none pl-5 text-zinc-500' type='text'/>
                <button onClick={addTask} className='w-30 h-12 text-zinc-500 cursor-pointer hover:shadow-2xl rounded-lg'>+</button>
            </div>

            <ul className='px-10 '>
                {tasks.map((t, index) => (
                        <li className='w-100 h-10 flex justify-between items-center bg-zinc-200 p-7  rounded-xl text-zinc-500 shadow-2xl m-5' key={index}>
                        {t}
                        <button className='text-zinc-200 hover:text-zinc-500 w-10 h-10 cursor-pointer' onClick={() => removeTask(index)}>x</button>
                    </li>
                ))}
            </ul>
            
            { /*<ul className=''>
                <li className='w-100 h-12 flex items-center justify-between pl-5 pr-5 rounded-xl shadow-2xl '> 
                    <p className='text-zinc-400'>Clean the room</p>
                    <button className='text-transparent text-lg hover:text-zinc-500'>x</button> 
                </li>
            </ul> */}
        </main>
  )
}

export default App
