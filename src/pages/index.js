import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default () => 
(
    <Layout>
        <div style = {{ margin: '10rem auto', maxWidth: 800 }}>
            {" "}
            <h1>Fausta Borja, Author of Erotic Fairy Tales</h1>
            <div>
                <p>
                    <a href = "https://www.amazon.com/Fausta-Borja/e/B01N2HHCXO">
                    Buy on Amazon   
                    </a> 
                    &emsp;
                    <a href = "https://www.barnesandnoble.com/s/%22Fausta%20Borja%22?Ntk=P_key_Contributor_List&Ns=P_Sales_Rank&Ntx=mode+matchall">
                    Buy on Barnes & Noble
                    </a>
                </p>
            </div>
        </div>
    </Layout>
)
