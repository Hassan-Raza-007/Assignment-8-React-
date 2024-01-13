import React from 'react'

const Input_Field = (props) => {

    return (
        <div>

            <input className='mx-10 px-10 p-1 rounded-md'
                type={props.type}
                placeholder={props.placeholder}
                id={props.id}
                onChange={(e) => props.onChangeHandle(e.target.value, props.id)}
            />
        </div>
    )
}

export default Input_Field