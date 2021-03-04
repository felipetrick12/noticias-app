import React from 'react';
import { Noticias } from './Noticias';

export const ListNews = ({noticias}) =>  ( 
        <div className="row">
            {noticias.map(noticia => (
                <Noticias 
                    key={noticia.url}
                    noticia={noticia}
                />
            ))}
        </div>
);