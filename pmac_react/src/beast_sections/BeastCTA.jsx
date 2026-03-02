import React, { useState } from 'react';
import { useMutation, useAction } from "convex/react";
import { api } from "../../convex/_generated/api";
import contactDecoration from '../assets/contact_section_decoration.png';

function BeastCTA() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitContact = useMutation(api.contacts.submitContact);
  const sendEmail = useAction(api.actions.sendLeadEmail);
  const sendAutoReply = useAction(api.actions.sendAutoReplyEmail);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return alert("Please fill in required fields");

    setIsSubmitting(true);
    try {
      // 1. Save to Database
      await submitContact({
        fullName: formData.fullName,
        businessEmail: formData.email,
        phoneNumber: formData.phone,
        message: formData.details,
        source: "Website CTA"
      });

      // 2. Trigger Email Actions (Async)
      // Send Lead Alert to Admin (Resend)
      sendEmail({
        fullName: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phone,
        message: formData.details
      }).catch(err => console.error("Admin notification failed:", err));

      // Send Auto-Reply to Customer (EmailJS)
      sendAutoReply({
        fullName: formData.fullName,
        email: formData.email
      }).catch(err => console.error("Auto-reply failed:", err));

      setIsSubmitted(true);
      setFormData({ fullName: '', email: '', phone: '', details: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      console.error(err);
      alert("Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="beast-cta-section" style={{
      width: '100%',
      backgroundColor: '#fff',
      padding: '110px 90px 130px 90px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <div className="beast-cta-container" style={{
        width: '1200px',
        height: '342.2px',
        backgroundColor: 'rgba(248, 239, 255, 1)',
        borderRadius: '20px',
        position: 'relative',
        display: 'flex',
        padding: '50px 50px 50px 90px',
        overflow: 'hidden',
        boxSizing: 'border-box'
      }}>
        {/* Decoration - Bottom Left */}
        <img src={contactDecoration} alt="" style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: 'auto',
          height: 'auto',
          pointerEvents: 'none',
          zIndex: 1
        }} />

        {/* Title Plate */}
        <div style={{
          width: '240px',
          zIndex: 2,
          position: 'relative',
          paddingTop: '0px'
        }}>
          <h2 style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 300,
            fontSize: '24px',
            lineHeight: '28.8px',
            color: 'rgba(21, 18, 22, 1)',
            margin: 0
          }}>
            {isSubmitted ? "Thank you! We'll be in touch soon." : "Have production requirements? Our engineering team can help."}
          </h2>
        </div>

        {/* Elements Container */}
        <form onSubmit={handleSubmit} className="elements-container" style={{
          width: '770.38px',
          height: '242.2px',
          marginLeft: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '15.5px',
          zIndex: 2,
          position: 'relative'
        }}>
          {/* First Row: 2 Columns */}
          <div style={{
            display: 'flex',
            gap: '15px',
            height: '180.41px'
          }}>
            {/* Column Left (Inputs) */}
            <div style={{
              width: '377.69px',
              display: 'flex',
              flexDirection: 'column',
              gap: '15px'
            }}>
              <input
                type="text"
                placeholder="Full name"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                style={{
                  width: '377.69px',
                  height: '50px',
                  borderRadius: '10px',
                  backgroundColor: '#fff',
                  border: '1px solid #fff',
                  padding: '15.5px 20px',
                  boxSizing: 'border-box',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  color: 'rgba(21, 18, 22, 1)'
                }}
              />
              <input
                type="email"
                placeholder="Email address"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{
                  width: '377.69px',
                  height: '50px',
                  borderRadius: '10px',
                  backgroundColor: '#fff',
                  border: '1px solid #fff',
                  padding: '15.5px 20px',
                  boxSizing: 'border-box',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  color: 'rgba(21, 18, 22, 1)'
                }}
              />
              <input
                type="text"
                placeholder="Contact number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                style={{
                  width: '377.69px',
                  height: '50px',
                  borderRadius: '10px',
                  backgroundColor: '#fff',
                  border: '1px solid #fff',
                  padding: '15.5px 20px',
                  boxSizing: 'border-box',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  color: 'rgba(21, 18, 22, 1)'
                }}
              />
            </div>

            {/* Column Right (Textarea) */}
            <div style={{ width: '377.69px' }}>
              <textarea
                placeholder="Details"
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                style={{
                  width: '377.69px',
                  height: '180.41px',
                  borderRadius: '10px',
                  backgroundColor: '#fff',
                  border: '1px solid #fff',
                  padding: '15px 20px',
                  boxSizing: 'border-box',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '19.6px',
                  color: 'rgba(21, 18, 22, 1)',
                  resize: 'none'
                }}
              />
            </div>
          </div>

          {/* Second Row: Submit Button */}
          <div style={{ width: '100%' }}>
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                width: '100%',
                height: '46.29px',
                backgroundColor: isSubmitting ? '#444' : 'rgba(43, 10, 61, 1)',
                color: 'rgba(243, 243, 243, 1)',
                borderRadius: '10px',
                border: 'none',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '19.2px',
                textAlign: 'center',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                transition: 'opacity 0.2s ease',
                opacity: isSubmitting ? 0.7 : 1
              }}
            >
              {isSubmitting ? "Submitting..." : (isSubmitted ? "Submitted ✅" : "Submit")}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default BeastCTA;
