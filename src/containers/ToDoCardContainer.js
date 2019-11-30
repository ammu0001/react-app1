import React from 'react'
import ToDoCard from '../components/ToDoCard'

function ToDoCardContainer(props){

    function renderCards()
    {
        return props.cards.map(card => {
        return <ToDoCard key={ToDoCard.id} card={card}/>
    })
 }
}