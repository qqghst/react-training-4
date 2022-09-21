import React, { Component } from 'react'

export default class Form extends Component {
    state = {
        login: '',
        password: '',
        email: '',
        textArea: '',
        select: '',
        checkbox: false,
        choice: 'first'
    };

    inputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    };
    checkboxChange = (event) => {
        this.setState({ [event.target.name]: event.target.checked })
    };
    choiceChange = (event) => {
        this.setState({ choice: event.target.name })
    };

    render() {
        return (
            <div className='form'>
                <form>
                    <label>
                        Radiobutton:
                        <br />
                        <input
                            type='radio'
                            name='first'
                            checked={this.state.choice === 'first'}
                            onChange={this.choiceChange}
                        />
                        <input
                            type='radio'
                            name='second'
                            checked={this.state.choice === 'second'}
                            onChange={this.choiceChange}
                        />
                        <input
                            type='radio'
                            name='third'
                            checked={this.state.choice === 'third'}
                            onChange={this.choiceChange}
                        />
                    </label>

                    <br />

                    <label>
                        Checkbox:
                        <br />
                        <input
                            type='checkbox'
                            name='checkbox'
                            checked={this.state.checkbox}
                            onChange={this.checkboxChange}
                        />
                    </label>

                    <br />

                    <label>
                        Select:
                        <br />
                        <select
                            name='select'
                            value={this.state.select}
                            onChange={this.inputChange}
                        >
                            <option value="" disabled>No selected</option>
                            <option value="Elista">Elista</option>
                            <option value="Moscow">Moscow</option>
                            <option value="Egypt">Egypt</option>
                            <option value="Jupiter">Jupiter</option>
                        </select>
                    </label>

                    <br />

                    <label>
                        TextArea:
                        <br />
                        <textarea
                            name='textArea'
                            value={this.state.textArea}
                            onChange={this.inputChange}
                        />
                    </label>

                    <br />

                    <label>
                        Login:
                        <br />
                        <input
                            type="text"
                            name='login'
                            value={this.state.name}
                            onChange={this.inputChange}
                        />
                    </label>

                    <br />
                    <label>

                        Password:
                        <br />
                        <input
                            type="password"
                            name='password'
                            value={this.state.password}
                            onChange={this.inputChange}
                        />
                    </label>

                    <br />

                    <label>
                        Email:
                        <br />
                        <input
                            type="text"
                            name='email'
                            value={this.state.email}
                            onChange={this.inputChange}
                        />
                    </label>

                    <br />

                    <input
                        type="submit"
                        value='Отправить'
                    />
                </form>
            </div>
        )
    }
}
