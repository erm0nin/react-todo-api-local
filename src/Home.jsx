import React, { useState } from 'react'
import TodoItem from './components/item/TodoItem'
import CreateTodoFiled from './components/item/CreateTodoFiled'

const data = [
	{
		_id: 'wqewe21',
		title: 'Finish the essay collaboration',
		isComplited: false,
	},
	{
		_id: 'wqewe22131',
		title: 'Read next book',
		isComplited: true,
	},
	{
		_id: 'wqew123e21',
		title: 'Lorem ipsum dolor sit, amet consectetur tempore?',
		isComplited: false,
	},
]

const Home = () => {
	const [todos, setTodos] = useState(data)

	const changeTodo = id =>{
		const copy = [...todos]
		const current = copy.find(t => t._id === id)
		current.isComplited = !current.isComplited
		setTodos(copy)
	}

	const removeTodo = id => setTodos([...todos].filter(t => t._id !== id))



	return (
		<div className=' text-black w-4/5 mx-auto'>
			<h1 className='text-2xl font-bold text-center mb-10'>Todo</h1>
			{todos.map(todo => (
				<TodoItem  key={todo._id} todo={todo} changeTodo={changeTodo} removeTodo={removeTodo}/>
			))}
			<CreateTodoFiled setTodos={setTodos}/>
		</div>
	)
}

export default Home
