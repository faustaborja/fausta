import React from "react"
import { Link } from "gatsby"
const ListLink = props => 
(
    <li style = {{ display: 'inline-block', marginRight: '1rem' }}>
        <Link to = {props.to}>
            {props.children}    
        </Link>
    </li>
)

export default ({ children }) =>
(
    <div style = {{ margin: '0 auto', maxWidth: 1000, padding: '1.25 1rem' }}>
        <header style = {{ marginTop: '1.5rem', marginBottom: '1.5rem'}}>
            <Link to = "/" style = {{ textShadow: 'none', backgroundImage: 'none' }}>
                <h3 style = {{display: 'inline' }}>
                    Fausta Borja
                </h3>
            </Link>
            <ul style={{ listStyle: `none`, float: `right` }}>
                <ListLink to = "/">Home</ListLink>
                <ListLink to = "/novels/">Novels</ListLink>
                <ListLink to = "/shortstories/">Short Stories</ListLink>
                <ListLink to = "/collections/">Collections</ListLink>
            </ul>
        </header>
        {children}
    </div>
)