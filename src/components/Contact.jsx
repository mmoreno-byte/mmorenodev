import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(formRef.current);

    emailjs.send(
      'service_fu08m1h',
      'template_7n2cgm2',
      {
        from_name:  formData.get('from_name'),
        from_email: formData.get('from_email'),
        message:    formData.get('message'),
      },
      'w_5AEwrBKAQWUYpCA'
    )
    .then(() => {
      setStatus('success');
      formRef.current.reset();
    })
    .catch(() => {
      setStatus('error');
    });
  };

  return (
    <section className="contact-container">
      <h2 className="contact-title">Contacto</h2>
      <p className="contact-subtitle">¿Tienes un proyecto en mente? ¡Escríbeme!</p>

      <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label>Nombre</label>
          <input 
            type="text" 
            name="from_name" 
            placeholder="Tu nombre" 
            required 
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            name="from_email" 
            placeholder="tu@email.com" 
            required 
          />
        </div>

        <div className="form-group">
          <label>Mensaje</label>
          <textarea 
            name="message" 
            placeholder="Cuéntame tu idea..." 
            rows="5" 
            required 
          />
        </div>

        <button type="submit" className="contact-btn" disabled={status === 'sending'}>
          {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
        </button>

        {status === 'success' && (
          <p className="contact-feedback success">¡Mensaje enviado! Te responderé pronto 🙌</p>
        )}
        {status === 'error' && (
          <p className="contact-feedback error">Algo salió mal. Inténtalo de nuevo.</p>
        )}
      </form>
    </section>
  );
}
