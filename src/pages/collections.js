import React from "react"
import Layout from "../components/layout"
import styles from "./books.module.css"
import Container from "../components/container"

console.log(styles)

const User = props => 
(
    <div className={styles.user}>
      <img src={props.avatar} className={styles.avatar} alt="" />
      <div className={styles.description}>
        <h2 className={styles.username}>{props.username}</h2>
        <p className={styles.excerpt}>{props.excerpt}</p>
      </div>
    </div>
)

export default () =>
(
    <Layout>
            <Container>
                <div>
                    <h1>
                    Collections
                    </h1>
                </div>
                <User
                username = "Erotic Tales from the Black Forest"
                avatar = "https://images-na.ssl-images-amazon.com/images/I/41-uw2cgL4L._SY346_.jpg"
                excerpt = "A collection of shorts including Cinderella, Little Red Riding Hood, and the Red Shoes."
                />
                <User
                username = "The Erotic Adventures of Alice in Wonderland: I-III"
                avatar = "https://images-na.ssl-images-amazon.com/images/I/41ULgaH2hLL.jpg"
                excerpt = "A collection of shorts including Alice and the White Rabbit, Alice and the Caterpillar, and Alice and the Mad Tea Party."
                />
            </Container>
    </Layout>
)