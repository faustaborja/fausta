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
                    Short Stories
                    </h1>
                </div>
                <User
                username = "Cinderella"
                avatar = "https://i.imgur.com/iW5FvWL.jpg"
                excerpt = "Cinderella is lazy. Cinderella doesn't do her chores. The mistress disciplines Cinderella when she is lazy. The maids humiliate Cinderella when she won't do her chores. It's no wonder Cinderella enjoys being so naughty. But when an intriguing stranger and his dangerous men arrive, they decide they want Cinderella for their own. Now it's time for Cinderella to try something new: Decide what she wants. Work to get it. An erotic short story (8k words) with BDSM and multiple partners."
                />
                <User
                username = "Little Red Riding Hood"
                avatar = "https://i.imgur.com/Tywqbyj.jpg"
                excerpt = "Scarlet has her eye on the shy woodcutter next door. But the presence of a werewolf disrupts Scarlet's plan for a sweet seduction. Now the woodcutter must set free the dark instincts buried within himself and claim Scarlet for his own. An erotic short story (8k words) with consensual force and romance."
                />
                <User
                username = "The Red Shoes"
                avatar = "https://i.imgur.com/INiMbDW.jpg"
                excerpt = "Clara is the preacher's wife in a small hamlet in the Black Forest. She organizes bake sales and sings in the church choir and submits quietly to her husband's needs under the bedcovers with the lights out. One day at the market Clara sees a woman in a pair of red stiletto shoes and Clara is struck with a sense of yearning so deep it stuns her. Against all her better instincts, Clara buys her own pair of red shoes. The consequences of Clara's action will change her relationship with her husband and the inhabitants of their small hamlet forever. Can they survive with their sense of unity intact? Or will everything unravel to pieces because the preacher's wife coveted a pair of red shoes? An erotic novelette (11k words) with themes of BDSM, spanking, humiliation, voyeurism, exhibitionism, multiple partners, religion, spirituality, and romance."
                />


                <User
                username = "Alice and the White Rabbit"
                avatar = "https://images-na.ssl-images-amazon.com/images/I/410EolO8m-L._SY346_.jpg"
                excerpt = "The White Rabbit needs his gloves and fan! He sends Alice to fetch them but she can't even carry out this simple task. The White Rabbit is late for his meeting with the Duchess, but first, he's going to teach Alice a lesson. An erotic short story (4k words) with spanking and BDSM."
                />
                <User
                username = "Alice and the Caterpillar"
                avatar = "https://images-na.ssl-images-amazon.com/images/I/41kistZwHwL._SY346_.jpg"
                excerpt = "Alice needs to get to a tea party and only the Caterpillar knows how to get there! Alice is willing to pay the price for those directions but that's before she discovers the Caterpillar's dual personality and dual...other things. Now Alice will have to pay double the price. Can she get over her dislike of the Caterpillar to get what she wants? And is it the directions she wants, or her own sexual satisfaction? An erotic short story (4.5k words) featuring partners who both want and dislike each other, and unusual male anatomy."
                />
                <User
                username = "Alice and the Mad Tea Party"
                avatar = "https://images-na.ssl-images-amazon.com/images/I/41jAJVfmvvL.jpg"
                excerpt = "Alice has finally made it to the Mad Tea Party! But she makes a dreadful faux-pas as soon as she arrives. Now the Mad Hatter, the March Hare, and the Dormouse won't let Alice go till they've enjoyed every last bit of her. Can Alice satisfy three men and their demanding appetites? An erotic short story (6.5k words) featuring a ménage à quatre."
                />
                <User
                username = "Alice and the Duchess"
                avatar = "https://images-na.ssl-images-amazon.com/images/I/41JWGtS7UmL.jpg"
                excerpt = "The Duchess has summoned Alice! Alice's naughty antics all over Wonderland have riled its citizens. The Duchess is an exacting mistress: can Alice withstand all the punishments she has in store for her? Or will Alice end up begging for more? An erotic short story (4k words) featuring ladies only, and contains BDSM and spanking."
                />
                <User
                username = "Alice and the Cheshire Cat"
                avatar = "https://images-na.ssl-images-amazon.com/images/I/41wmAP85B-L.jpg"
                excerpt = "Alice is so close to discovering the truth! If only the infuriating Cheshire Cat would give her the answers she needs. What he needs is a firm lady's touch--and Alice intends to give it to him! An erotic short story (4k words) featuring a domineering woman, a single-minded tom, and peg play."
                />
                <User
                username = "Alice and the Pool of Tears"
                avatar = "https://images-na.ssl-images-amazon.com/images/I/41lgEPdI7dL.jpg"
                excerpt = "Secrets within secrets, enshrouded in mysteries and folded into time. Alice has done it now. After thoroughly goading the citizens of Wonderland, she is finally getting some answers! But the truth of where Alice comes from leads her to unexpected places. It's vital that Alice remember who she is, and what her plan is to defeat the Dark One, before he comes and destroys Wonderland once and for all. A short story (6k words) featuring a lost soul, an erotic lesbian encounter, and some major reveals of Alice's origins."
                />
            </Container>
    </Layout>
)