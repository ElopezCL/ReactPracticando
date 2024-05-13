import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const [categorias, setCategorias] = useState(["One Punch", "RedBull"]);

    const AddCategoryButton = (newCategory) => {
        if (categorias.includes(newCategory)) return
        setCategorias([newCategory, ...categorias])
    }


    return (
        <>
            <h1>GifExpertAPP</h1>
            <AddCategory
                onNewCategory={(value) => AddCategoryButton(value)}
            // setCategorias={setCategorias}
            />
            <button onClick={AddCategoryButton}>Agregar</button>

            {
                categorias.map((categoria) => (

                    <GifGrid key={categoria} categoria={categoria} />

                ))


            }
        </>
    )
}
