import React, { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {
    const [InputValue, setInputValue] = useState("")

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event)  => {
        event.preventDefault();
        if(InputValue.trim().lenght < 1 ) return

        // setCategorias(categorias => ([...categorias, InputValue]))
        onNewCategory(InputValue.trim());
        setInputValue("");
    }
  return (
    <>  
    <form onSubmit={event => onSubmit(event)}>
    <input
            type="text"
            placeholder="Buscar Gifs"
            value={InputValue}
            onChange={onInputChange}
        />
    </form>
     
    </>
  )
}
