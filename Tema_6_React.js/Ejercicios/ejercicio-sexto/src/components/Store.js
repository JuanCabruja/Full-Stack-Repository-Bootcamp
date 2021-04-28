import React from 'react'
import List from './ListaEjercicio2'

export default function store() {

    const store = {

        electronics: [
    
            {id: 27, producto: "Televisor", marca: "LG", modelo: "XP7302", precio: 399},
    
            {id: 28, producto: "Equipo Hi-FI", marca: "Samsung", modelo: "VF235", precio: 179},
    
            {id: 29, producto: "Televisor", marca: "Sony", modelo: "Bravia-173", precio: 498},
    
        ],
    
        groceries: [
    
            {id: 30, producto: "Galletas", marca: "María", precio: 0.90},
    
            {id: 31, producto: "Ensalada", marca: "Imizurra", precio: 1.30},
    
            {id: 32, producto: "Patatas", marca: "McKain", precio: 0.90},
    
            {id: 33, producto: "Pasta", marca: "Gallo", precio: 0.90},
    
        ],
    
        pets: [
    
            {id: 34, producto: "Croquetas para gato", marca: "Purina", precio: 4.90},
    
            {id: 35, producto: "Arena de gato", marca: "Limpior", precio: 1.10},
    
        ]
    
    };

    return (
        <div>
            
            <List 
            category="electronics"
            
            PropArray={store.electronics}
            />
            <List 
            
            category="groceries"
            PropArray={store.groceries}
            />

            <List
            category="pets" 
            PropArray={store.pets}
            />
            
        </div>
    )
}


