import React, { useState } from "react";
import EyeOff from "../svg/eye-off";
import EyeOn from "../svg/eye-on";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"; 
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
import GoogleIcon from "../svg/google-icon";


const schema = yup
  .object({
    fullname: yup.string().required().label("FullName"),
    email: yup.string().required().email().label("Email"),
    password: yup.string().required().min(6).label("Password"),

  })
  .required();


const RegisterForm = () => {
  const { register: registerUser, googleLogin } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit, reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  
  const onSubmit = async (data) => { 
    setLoading(true);
    setError('');
    
    const result = await registerUser(data.fullname, data.email, data.password);
    
    if (result.success) {
      reset();
      // Redirect based on user role (new users are 'user' by default)
      if (result.data.user.role === 'admin') {
        router.push('/admin/blogs');
      } else {
        router.push('/blog');
      }
    } else {
      setError(result.error);
    }
    
    setLoading(false);
  };

  // Handle Google Sign-In
  const handleGoogleLogin = () => {
    if (typeof window !== 'undefined' && window.google) {
      window.google.accounts.id.initialize({
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        callback: handleGoogleCallback
      });
      
      window.google.accounts.id.prompt();
    }
  };

  const handleGoogleCallback = async (response) => {
    setLoading(true);
    setError('');
    
    try {
      // Decode JWT token from Google
      const base64Url = response.credential.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      
      const googleUser = JSON.parse(jsonPayload);
      
      const result = await googleLogin(
        response.credential,
        googleUser.email,
        googleUser.name,
        googleUser.picture
      );
      
      if (result.success) {
        // Redirect based on user role
        if (result.data.user.role === 'admin') {
          router.push('/admin/blogs');
        } else {
          router.push('/blog');
        }
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError('Google authentication failed');
    }
    
    setLoading(false);
  };

  // password show & hide
  const [passwordType, setPasswordType] = useState("password");
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {error && (
          <div className="alert alert-danger mb-30" role="alert">
            {error}
          </div>
        )}
        
        <div className="row">
          <div className="col-12">
            <div className="postbox__comment-input mb-30">
              <input 
              name="fullname"
              {...register("fullname")}
              className="inputText"
              disabled={loading}
              />
              <span className="floating-label">Full Name</span>
              <p className="form_error">{errors.fullname?.message}</p>
            </div>
          </div>
          <div className="col-12">
            <div className="postbox__comment-input mb-30"> 
              <input
                name="email"
                className="inputText"
                {...register("email")}
                disabled={loading}
              />
              <span className="floating-label">Your Email</span>
              <p className="form_error">{errors.email?.message}</p>
            </div>
          </div>
          <div className="col-12">
            <div className="mb-30">
            <div className="postbox__comment-input"> 
              <input
                id="myInput"
                className="inputText password"
                type={passwordType}
                name="password"
                {...register("password")}
                disabled={loading}
              />
              <span className="floating-label">Password</span>
              <span id="click" className="eye-btn" onClick={togglePassword}>
                {passwordType === "password" ? (
                  <span className="eye-off">
                    <EyeOff />
                  </span>
                ) : (
                  <span className="eye-off">
                    <EyeOn />
                  </span>
                )}
              </span>
            </div>
              <p className="form_error">{errors.password?.message}</p>
            </div>
          </div> 
        </div>

        <div className="signin-banner-form-remember">
          <div className="row">
            <div className="col-6">
              <div className="postbox__comment-agree">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Remember me
                  </label>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="postbox__forget text-end">
                <Link href="#">Forgot password ?</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="signin-banner-from-btn mb-20">
          <button type="submit" className="signin-btn" disabled={loading}>
            {loading ? 'Creating account...' : 'Register'}
          </button>
        </div>
        
        <div className="signin-divider mb-20">
          <span>OR</span>
        </div>
        
        <div className="signin-google-btn mb-20">
          <button 
            type="button" 
            className="google-signin-btn"
            onClick={handleGoogleLogin}
            disabled={loading}
          >
            <GoogleIcon />
            <span>Continue with Google</span>
          </button>
        </div>
        
        <div className="signin-banner-from-register">
          <Link href="/sign-in">
            Already have an account? <span>Sign In</span>
          </Link>
        </div>
      </form>

      <style jsx>{`
        .alert {
          padding: 12px 20px;
          border-radius: 8px;
          font-size: 14px;
        }
        .alert-danger {
          background: #fee;
          color: #c33;
          border: 1px solid #fcc;
        }
        .signin-divider {
          text-align: center;
          position: relative;
          margin: 20px 0;
        }
        .signin-divider span {
          background: white;
          padding: 0 15px;
          color: #666;
          font-size: 14px;
          position: relative;
          z-index: 1;
        }
        .signin-divider:before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
          background: #ddd;
        }
        .google-signin-btn {
          width: 100%;
          padding: 14px 20px;
          border: 2px solid #e0e0e0;
          background: white;
          border-radius: 8px;
          font-weight: 600;
          font-size: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .google-signin-btn:hover {
          border-color: #4285f4;
          background: #f8f9fa;
        }
        .google-signin-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      `}</style>
    </>
  );
};

export default RegisterForm;
