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
                    Novels
                    </h1>
                </div>
                <User
                username = "Beauty and the Beast"
                avatar = "https://images-na.ssl-images-amazon.com/images/I/51wV8kZsgaL._SY346_.jpg"
                excerpt = "Fausta Borja’s Beauty and the Beast is a steamy gothic romance novel based on the classic fairy tale."
                />
            </Container>
    </Layout>
)