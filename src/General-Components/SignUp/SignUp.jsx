import React, { useState } from 'react';
import Style from './SginUp.module.css';
import sginImg from './sign.jpg';
import axios from 'axios';

function SingUp() {
    const [user, setUser] = useState({
        userName: '',
        email: '',
        password: '',
        image: '',
    });

    const handleChange = (e) => {
        const{name,value} = e.target;
        setUser({
        ...user,
        [name]:value
        })

    };
    const handleSumbit = async(e) => {
        // We need to use FormData just when there's a file to send
        e.preventDefault();
        const formData = new FormData(); 
        formData.append('userName',user.userName);
        formData.append('email',user.email);
        formData.append('password',user.password);
        formData.append('image',user.image );
        const {data} =await axios.post(`${import.meta.env.VITE_API}/auth/signup`,formData);
        console.log(data)
        setUser({
            userName: '',
            email: '',
            password: '',
            image: '',
        });
        console.log(user);
    }; 
    const handleImageChange = (e)=>{
        const {name,files} = e.target;
        setUser({
        ...user,
        [name]:files[0]
        });

    };
    return (
        <div className={Style.container}>
            <div className={Style.row}>
                <div className={Style.sginup}>
                    <div className={Style.image}>
                        <img src={sginImg} alt="" />
                    </div>
                    <form className={Style.dataForm} onSubmit={handleSumbit}>
                        <div className={Style.formTitle}>
                            <h2>Welcome to our store</h2>
                            <p>Create your account and join us</p>
                        </div>
                        <div className={Style.inputGroup}>
                            <div className={Style.inpuItem}>
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    value={user.userName}
                                    name="userName"
                                    onChange={handleChange}
                                    placeholder="Enter Username"
                                />
                            </div>
                            <div className={Style.inpuItem}>
                                <label htmlFor="email">E-Mail</label>
                                <input
                                    type="emai l"
                                    value={user.email}
                                    id="email"
                                    name="email"
                                    onChange={handleChange}
                                    placeholder="Enter E-Mail"
                                />
                            </div>
                            <div className={Style.inpuItem}>
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    value={user.password}
                                    id="password"
                                    name="password"
                                    onChange={handleChange}
                                    placeholder="Enter Password"
                                />
                            </div>
                            <div className={Style.inpuItem}>
                                <label htmlFor="image">Upload Your image</label>
                                <input
                                    type="file"
                                    id="image"
                                    name="image"
                                    onChange={handleImageChange}
                                />
                            </div>
                        </div>
                        <button type="submit" className={Style.create}>
                            Create Account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SingUp;
