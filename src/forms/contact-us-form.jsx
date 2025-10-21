import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email is required").email("Email must be valid"),
  phone: yup.string(),
  subject: yup.string().required("Subject is required"),
  message: yup.string().required("Message is required"),
}).required();

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/emails/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: data.subject + (data.phone ? ` (Phone: ${data.phone})` : ''),
          message: data.message
        })
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      setSuccess(true);
      reset();
      
      // Clear success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="box">
        {success && (
          <div className="alert alert-success mb-30">
            ✅ Message sent successfully! We'll get back to you soon.
          </div>
        )}
        
        {error && (
          <div className="alert alert-danger mb-30">
            ❌ {error}
          </div>
        )}

        <div className="row gx-20">
          <div className="col-12">
            <div className="postbox__comment-input mb-30">
              <input 
                type="text" 
                className="inputText" 
                {...register("name")}
                disabled={loading}
              />
              <span className="floating-label">Full Name</span>
              <p className="form_error">{errors.name?.message}</p>
            </div>
          </div>
          <div className="col-12">
            <div className="postbox__comment-input mb-30">
              <input 
                type="email" 
                className="inputText" 
                {...register("email")}
                disabled={loading}
              />
              <span className="floating-label">Your Email</span>
              <p className="form_error">{errors.email?.message}</p>
            </div>
          </div>
          <div className="col-12">
            <div className="postbox__comment-input mb-30">
              <input 
                type="tel" 
                className="inputText" 
                {...register("phone")}
                disabled={loading}
              />
              <span className="floating-label">Phone Number (Optional)</span>
            </div>
          </div>
          <div className="col-12">
            <div className="postbox__comment-input mb-30">
              <input 
                type="text" 
                className="inputText" 
                {...register("subject")}
                disabled={loading}
              />
              <span className="floating-label">Subject</span>
              <p className="form_error">{errors.subject?.message}</p>
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="postbox__comment-input mb-30">
              <textarea 
                className="textareaText" 
                {...register("message")}
                disabled={loading}
              ></textarea>
              <span className="floating-label-2">Message...</span>
              <p className="form_error">{errors.message?.message}</p>
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="postbox__btn-box">
              <button 
                type="submit" 
                className="submit-btn w-100" 
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send your Request'}
              </button>
            </div>
          </div>
        </div>
      </form>

      <style jsx>{`
        .alert {
          padding: 15px 20px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
        }
        .alert-success {
          background: #d1fae5;
          color: #065f46;
          border: 1px solid #6ee7b7;
        }
        .alert-danger {
          background: #fee;
          color: #c33;
          border: 1px solid #fcc;
        }
        .form_error {
          color: #ef4444;
          font-size: 13px;
          margin-top: 5px;
        }
        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      `}</style>
    </>
  );
};

export default ContactUsForm;
