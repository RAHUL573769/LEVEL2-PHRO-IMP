"use client";
import Counter from "@/components/Counter/Counter";
import { useState } from "react";

export default function Home() {
	// const [counter, setCounter] = useState(0);
	return (
		<div>
			<h1 className='text-4xl text-center'>Welcome to NextJs</h1>

			<h1>React Server Components</h1>
			<Counter></Counter>
			{/* <h1>Counter :{counter}</h1>
			<button onClick={() => setCounter(counter + 1)}>Add</button>
<Cou
			<button onClick={() => setCounter(counter - 1)}>Delete</button> */}
		</div>
	);
}
