import React from "react";
import "../css/ResetPassword.css";

const ResetPassword = () => {
    return (
        <>
            <div className="" id="middle">
                <h1 id="happeMe">HappeMe</h1>
                <div className="reset-password-container">
                    <div className="reset-password-box">
                        {/* <h1 className="app-logo">HappMe</h1> */}
                        <h2 className="greeting">Hi, [Name]</h2>
                        <form>
                            <div className="otp-inputs">
                                <input type="text" maxLength="1" />
                                <input type="text" maxLength="1" />
                                <input type="text" maxLength="1" />
                                <input type="text" maxLength="1" />
                            </div>
                            <input
                                type="password"
                                placeholder="Enter New Password"
                                className="password-input"
                            />
                            <input
                                type="password"
                                placeholder="Confirm New Password"
                                className="password-input"
                            />
                            <button type="submit" className="reset-button">
                                Reset Password
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResetPassword;
