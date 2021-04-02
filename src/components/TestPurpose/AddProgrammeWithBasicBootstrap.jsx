import React, { Component } from 'react'
import axios from 'axios'
import { FaCommentsDollar } from 'react-icons/fa'
class PostForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			id: '',
			name: '',
			durationInMonths: ''
		}
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		// axios
		// 	.post('https://jsonplaceholder.typicode.com/posts', this.state)
		// 	.then(response => {
		// 		console.log(response)
		// 	})
		// 	.catch(error => {
		// 		console.log(error)
		// 	})
	}


	render() {
		const { id, name, durationInMonths } = this.state
		return (
			<div>
				<form onSubmit={this.submitHandler}>
					<div>
						<input
							type="text"
							name="id"
							value={id}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							type="text"
							name="name"
							value={name}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<input
							type="text"
							name="durationInMonths"
							value={durationInMonths}
							onChange={this.changeHandler}
						/>
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

export default PostForm