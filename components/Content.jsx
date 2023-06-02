import React from 'react'
import { Fragment } from 'react';

const Content = () => {
  return (
    <Fragment>
          <div className="content-wrapper">
    
    <div className="content-header">
      <div className="container">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0"> Top Navigation <small>Example 3.0</small></h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item"><a href="#">Layout</a></li>
              <li className="breadcrumb-item active">Top Navigation</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  
    <div className="content">
      <div className="container">
       <div className='row'>
            <div className='col-xs-12 col-md-8 col-lg-8'>
                <div className='card card-primary'>
                    <div className='card-header'>
                       <h1 className='card-title'><i className="fas fa-user-plus mr-2"></i>Agregar alumnos</h1>
                    </div>
                    <div className='card-body'>
                        <div className='form-group'>
                          <label >Nombre</label>
                          <input type="text" name="nombre" id="nombre" className='form-control' placeholder='Escribir aqui'/>
                        </div>
                        <div className='form-group'>
                          <label >Apellido Paterno</label>
                          <input type="text" name="a_paterno" id="a_paterno" className='form-control' placeholder='Escribir aqui'/>
                        </div>
                        <div className='form-group'>
                          <label >Apellido Materno</label>
                          <input type="text" name="a_materno" id="a_materno" className='form-control' placeholder='Escribir aqui'/>
                        </div>
                        <div className='row'>
                          <div className='form-group col-xs-6 col-md-6 col-lg-6'>
                          <label >Edad</label>
                          <input type="number" name="edad" id="edad" className='form-control' placeholder='0' step='0.5' max='10' min='7'/>
                        </div>
                        <div className='form-group col-xs-6 col-md-6 col-lg-6'>
                          <label >Calificacion</label>
                          <input type="number" name="edad" id="edad" className='form-control' placeholder='0' step='0.5' max='10' min='7'/>
                        </div>
                        </div>
                       
                  
                        <div className='form-group'>
                          <label >Correo electronico</label>
                          <input type="email" name="email" id="email" className='form-control' placeholder='ejemplo@.com.mx'/>
                        </div>
                    </div>
                    <div className='card-footer'>
                        <button className=' btn btn-success float-right'>Enviar</button>
                        <button className=' btn btn-danger  '>Cancelar</button>
                    </div>
                </div>
            </div>
            <div className='col-xs-12 col-md-8 col-lg-4'>
                <div className='card card-primary'>
                    <div className='card-header'>
                       <h1 className='card-title'><i className="fas fa-user-plus mr-2"></i>Agregar alumnos</h1>
                    </div>
                    <div className='card-body'>
                        <div className='form-group'>
                          <label >Nombre</label>
                          <input type="text" name="nombre" id="nombre" className='form-control' placeholder='Escribir aqui'/>
                        </div>
                        <div className='form-group'>
                          <label >Apellido Paterno</label>
                          <input type="text" name="a_paterno" id="a_paterno" className='form-control' placeholder='Escribir aqui'/>
                        </div>
                        <div className='form-group'>
                          <label >Apellido Materno</label>
                          <input type="text" name="a_materno" id="a_materno" className='form-control' placeholder='Escribir aqui'/>
                        </div>
                        <div className='form-group'>
                          <label >Edad</label>
                          <input type="number" name="edad" id="edad" className='form-control' placeholder='0' step='0.5' max='10' min='7'/>
                        </div>
                        <div className='form-group'>
                          <label >Correo electronico</label>
                          <input type="email" name="email" id="email" className='form-control' placeholder='ejemplo@.com.mx'/>
                        </div>
                    </div>
                    <div className='card-footer'>
                        <button className=' btn btn-success float-right'>Enviar</button>
                        <button className=' btn btn-danger  '>Cancelar</button>
                    </div>
                </div>
            </div>
       </div>
      
      </div>
    </div>
  
  </div>
    </Fragment>
  )
}

export default Content;