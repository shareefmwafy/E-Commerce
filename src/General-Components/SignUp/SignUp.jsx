import React from 'react'
import Style from './SginUp.module.css'
import sginImg from './sign.jpg'

function SingUp() {
    return (
        <div className={Style.container}>
            <div className={Style.row}>
                <div className={Style.sginup}>
                    <div className={Style.image}>
                        <img src={sginImg} alt="" />
                    </div>
                    <div className={Style.dataForm}>
                        <div className={Style.formTitle}>
                            <h2>Welcome to our store</h2>
                            <p>Create your account and join us</p>
                        </div>
                        <div className={Style.inputGroup}>
                            <div className={Style.inpuItem}>
                                <label htmlFor="username">Username</label>
                                <input type="text" id="username" name="username" placeholder="Enter Username" />
                            </div>
                            <div className={Style.inpuItem}>
                                <label htmlFor="email">E-Mail</label>
                                <input type="email" id="email" name="email" placeholder="Enter E-Mail" />
                            </div>
                            <div className={Style.inpuItem}>
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" name="password" placeholder="Enter Password" />
                            </div>
                            <div className={Style.inpuItem}>
                                <label htmlFor="password">Confirm Password</label>
                                <input type="password" id="password" name="password" placeholder="Enter Password" />
                            </div>
                        </div>
                        <button type="submit">Create Account</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SingUp