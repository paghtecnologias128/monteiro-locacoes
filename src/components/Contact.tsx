
import React, { useState } from 'react'
import styled from 'styled-components'
import { SectionTitle, SectionSubtitle, Button } from '../styles/GlobalStyles'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaPaperPlane } from 'react-icons/fa'
import toast from 'react-hot-toast'

const ContactSection = styled.section`
  background: var(--white);
`

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`

const ContactForm = styled.form`
  background: var(--gray-light);
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: var(--shadow);
`

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  
  label {
    display: block;
    font-weight: 600;
    color: var(--dark-blue);
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
  }
  
  input, textarea {
    width: 100%;
    padding: 1rem;
    border: 2px solid var(--gray-light);
    border-radius: 12px;
    font-family: inherit;
    font-size: 1rem;
    transition: all 0.3s ease;
    background: var(--white);
    
    &:focus {
      border-color: var(--primary-blue);
      outline: none;
      box-shadow: 0 0 0 3px rgba(0, 176, 240, 0.1);
    }
    
    &::placeholder {
      color: var(--gray-medium);
    }
  }
  
  textarea {
    resize: vertical;
    min-height: 120px;
  }
`

const ContactInfo = styled.div`
  h3 {
    font-size: 1.5rem;
    color: var(--dark-blue);
    margin-bottom: 2rem;
  }
`

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  background: var(--white);
  border-radius: 15px;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-hover);
  }
  
  .icon {
    font-size: 1.3rem;
    color: var(--primary-blue);
    margin-top: 0.2rem;
    flex-shrink: 0;
  }
  
  .content {
    h4 {
      font-size: 1rem;
      color: var(--dark-blue);
      margin-bottom: 0.25rem;
      font-weight: 600;
    }
    
    p {
      color: var(--gray-medium);
      margin: 0;
      line-height: 1.4;
    }
    
    a {
      color: var(--primary-blue);
      transition: color 0.3s ease;
      
      &:hover {
        color: var(--dark-blue);
      }
    }
  }
`

const SubmitButton = styled(Button)`
  width: 100%;
  margin-top: 1rem;
`

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validação básica
    if (!formData.name.trim()) {
      toast.error('Por favor, informe seu nome')
      return
    }
    
    if (!formData.location.trim()) {
      toast.error('Por favor, informe o local do evento')
      return
    }
    
    if (!formData.message.trim()) {
      toast.error('Por favor, deixe uma mensagem')
      return
    }

    // Simular envio
    console.log('Dados do formulário:', formData)
    toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.')
    
    // Limpar formulário
    setFormData({
      name: '',
      location: '',
      message: ''
    })
  }

  return (
    <ContactSection id="contato" className="section-padding">
      <div className="container">
        <SectionTitle data-aos="fade-up">
          Entre em Contato
        </SectionTitle>
        
        <SectionSubtitle data-aos="fade-up" data-aos-delay="100">
          Vamos planejar juntos o evento perfeito para você
        </SectionSubtitle>
        
        <ContactContent>
          <ContactForm onSubmit={handleSubmit} data-aos="fade-right">
            <FormGroup>
              <label htmlFor="name">Nome Completo *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Seu nome completo"
                required
              />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="location">Local do Evento *</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="Endereço onde será o evento"
                required
              />
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="message">Mensagem *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Conte-nos mais sobre seu evento, data, horário e quais brinquedos tem interesse..."
                required
              />
            </FormGroup>
            
            <SubmitButton type="submit" size="large" $variant="primary">
              <FaPaperPlane />
              Enviar Mensagem
            </SubmitButton>
          </ContactForm>
          
          <ContactInfo data-aos="fade-left">
            <h3>Informações de Contato</h3>
            
            <ContactItem>
              <FaPhone className="icon" />
              <div className="content">
                <h4>Telefone / WhatsApp</h4>
                <p>
                  <a href="https://wa.me/5567981396452" target="_blank" rel="noopener noreferrer">
                    (67) 98139-6452
                  </a>
                </p>
              </div>
            </ContactItem>
            
            <ContactItem>
              <FaEnvelope className="icon" />
              <div className="content">
                <h4>E-mail</h4>
                <p>
                  <a href="mailto:contato@monteirolocacoes.com.br">
                    contato@monteirolocacoes.com.br
                  </a>
                </p>
              </div>
            </ContactItem>
            
            <ContactItem>
              <FaMapMarkerAlt className="icon" />
              <div className="content">
                <h4>Localização</h4>
                <p>Campo Grande - MS<br />Atendemos toda a região metropolitana</p>
              </div>
            </ContactItem>
            
            <ContactItem>
              <FaInstagram className="icon" />
              <div className="content">
                <h4>Instagram</h4>
                <p>
                  <a href="https://instagram.com/monteirolocacoes" target="_blank" rel="noopener noreferrer">
                    @monteirolocacoes
                  </a>
                </p>
              </div>
            </ContactItem>
          </ContactInfo>
        </ContactContent>
      </div>
    </ContactSection>
  )
}

export default Contact
