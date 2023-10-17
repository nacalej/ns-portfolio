import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import '../styles/FormStyles.css';

const Form = () => {
    const form = useRef();
    const [data, setData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",});
    
      const [errors, setErrors] = useState({});
      let nameValidate = /^[a-zA-Z]+$/gm;
      let validateEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
      const validateForm = (data) => {
        let errors = {};
    
        if(!data.name){
          errors.name = "No debe estar vacío.";
        }else if(!nameValidate.test(data.name)){
          errors.name = "Solo se aceptan letras."
        }else if(data.name.trim() < 3 || data.name.length < 3){
          errors.name = "Ingrese más caracteres.";
        }else if(!data.email){
          errors.email = "Debes ingresar un email.";
        }else if(!validateEmail.test(data.email)){
           errors.email = "Email inválido."
        }else if(!data.subject){
          errors.subject = "Debes ingresar un asunto.";
        }else if(!isNaN(data.subject)){
          errors.subject = "Solo se aceptan letras."
        }else if(data.subject.trim() < 3 || data.subject.length < 3){
          errors.subject = "Ingrese más  caracteres.";
        }else if(!data.message){
          errors.message = "Debes ingresar un mensaje.";
        }else if(data.message.trim() < 3 || data.message.length < 3){
          errors.message = "Ingrese más de dos caracteres.";
        }
        return errors;
    
      }

        //alert 
  const show = (icon, title, text, type) => {
    Swal.fire({
    //   icon: 'success',
      icon: icon,
      title: title, 
      type: type,
    //   type: "success", 
      text: text
    //   text: "Nos comunicaremos contigo, cuando validemos tu pago.😊"
  
  }).then((result) => { window.location.reload(); });

  } 
      function handleChangeInputs(e) {
        e.preventDefault();
       
       setData({
           ...data, 
           [e.target.name] : e.target.value
       });
    
    setErrors(validateForm({
    ...data,                        
    [e.target.name] : e.target.value
    }));
    console.log("Input changing: ", data);
      }
    
      //Alert success
      const showAlert = () => {
        Swal.fire({
          title: "¡Mensaje enviado!",
          type: "success",
          icon: "success",
        }).then((result) => {
          window.location.reload();
        });
      };
    
     
      const showAlertError = () => {
        Swal.fire({
          title: "¡Error!",
          type: "error",
          icon: "error",
        }).then((result) => {
          window.location.reload();
        });
      };
       //Function submit:
       function handleSubmit(e){
        if(!errors.name &&
          !errors.email &&
          !errors.subject &&
          !errors.message
          ){  
    
        e.preventDefault();
        console.log("Input: ", data);
        emailjs
        .sendForm('gmailMessage', 'template_kgcoa1b',  form.current, 'HvW7qoCbK49SuIY84')
        .then(
          () => {
            // icon, title, text, type
            showAlert("success", "¡!", "¡Mensaje enviado! 😊", "success");
          },
          () => {
           showAlertError("error", "¡!","error", "¡No se pudo enviar el mensaje!😔", "error");
          }
        );
        e.target.reset();
        setData({
        name:  "",
        email: "",
        subject: "",
        message: ""
        });
     
        // navigate("/home");
    }else{
        alert("Por favor, verifique los campos del formulario.");
       }
    }
  return (

    <div className="form">             

                    <form ref={form} 
                     onSubmit={(e) => handleSubmit(e)}
                      >
                        
                            <label >Nombre</label>

                            <input type="text" 
                            name='name'
                           
                            placeholder='Ingresa tu nombre completo' 
                            value={data.name}
                            onChange={(e) => handleChangeInputs(e)}
                            required
                             />
                            <p >
                                {errors.name}
                            </p>
                      

                     
                        {/*  */}

                     
                            <label >Correo</label>

                            <input 
                            type='email'
                            name="email"
                            
                            placeholder='Ejemplo: unCorreo@correo.com' 
                            value={data.email}
                            onChange={(e) => handleChangeInputs(e)}
                            required
                             />
                              <p >
                                {errors.email}
                            </p>
                      

                           {/*  */}

                          
                            <label  >Asunto</label>

                            <input type="text" 
                            name="subject" 
                          
                            placeholder='Asunto'
                            value={data.subject}
                            onChange={(e) => handleChangeInputs(e)}
                            required
                             />

                            <p >
                                {errors.subject}
                            </p>
                 



                           {/*  */}

                        
                            <label  >Mensaje</label>

                            <textarea name="message"
                            cols='30'
                            rows="10"  
                          
                            placeholder="¡Cuéntame lo que necesitas!" 
                            value={data.message}
                            onChange={(e) => handleChangeInputs(e)}
                            required
                             />

                            <p  >
                                {errors.message}
                            </p>
                      

                        <button  type="submit"  className='btn button button--flex'>Enviar mensaje
                        <i className='uil uil-message' ></i>
                        </button>
                    </form>
                </div>

   
  )
}

export default Form
