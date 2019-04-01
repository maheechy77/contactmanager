import React from 'react';
import classnames from 'classnames';

const Input = (props) => {
    let Input=null;
    switch (props.InputType){
        case 'input':
        Input=<input className={classnames('form-control form-control-sm col-sm-10',{'is-invalid':props.error})} type={props.Type} value={props.value} name={props.name} placeholder={props.placeholder} onChange={props.onChange} />;
        break;
        case 'textarea':
        Input=<textarea className={classnames('form-control form-control-sm col-sm-10',{'is-invalid':props.error})} rows="4" cols="50"  placeholder={props.placeholder} name={props.name} onChange={props.onChange}>{props.value}</textarea>;
        break;
        case 'select':
        Input=(<select className='form-control form-control-sm col-sm-10'>
        {props.options.map(option=><option value={option.value}>{option.displayValue}</option>)}
        </select>);
        break;
        default :
        Input=<input className={classnames('form-control form-control-sm col-sm-10',{'is-invalid':props.error})} type='text' name={props.name} value={props.value} placeholder='Enter Default' />;
        break; 
    }
    return (
    <div className='container' >
        <div className='form-group row' >
            <lable className='col-sm-2' ><b>{props.label}</b>:</lable>{Input}{props.error && <div className='invalid-feedback' >{props.error}</div>}
        </div>  
    </div>
  )
}

export default Input;
