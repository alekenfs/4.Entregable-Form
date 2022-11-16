import React from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const UserForm = ({addUser, userSelected, updateUser}) => {

    const { register, handleSubmit,reset } = useForm();

    useEffect(() => {
      if(userSelected){
reset(userSelected)
      }
      }, [userSelected]);

    const submit = data => {
        if(userSelected){
            updateUser(userSelected)
        } else{addUser(data)

		console.log(data)}
}
    return (
        <form className='user-form' onSubmit={handleSubmit(submit)}>
            <div>
						<label htmlFor='first_name'>First Name</label>
						<input type='text' id='first_name' {...register("first_name")} />
				</div>
                <div>
						<label htmlFor='last_name'>Last Name</label>
						<input type='text' id='password' {...register("last_name")} />
				</div>
				<div>
						<label htmlFor='password'>Password</label>
						<input type='password' id='password' {...register("password")} />
				</div>
                <div>
						<label htmlFor='email'>Email</label>
						<input type='email' id='email' {...register("email")} />
				</div>
                <div>
						<label htmlFor='birthday'>Birthday</label>
						<input type='date' id='birthday' {...register("birthday")} />
				</div>
                <button>Submit</button>
        </form>
    );
};

export default UserForm;