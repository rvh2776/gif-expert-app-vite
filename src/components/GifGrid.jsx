import { useFetchGifs } from "../hooks/useFetchGifs";

import { GifItem } from "./GifItem";


export const GifGrid = ({category}) => {
    
    const {images, isLoading} = useFetchGifs(category);

    return (
            <>
                <h3>{category}</h3>
                
                {
                    isLoading && (<h2>Cargando...</h2>) //si isLoading esta en true no muestra el cargando...
                }

                <div className="card-grid">
                    {
                        images.map((image) => (
                            
                            <GifItem key={image.id} 
                                     {...image} // envio todas las props esparcidas
                            />
                            
                        ))
                    }

                </div>
            </>        
    )  
}
