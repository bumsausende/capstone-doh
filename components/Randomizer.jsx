import React from 'react';
import { Link } from 'react-router';



/*const resultsEl = document.querySelector('#results');
const buttonEl = document.querySelector('#trigger');

const generateArrayAndRandomize = () => {
  const someArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  someArray.sort(() => Math.random() - 0.5);
  return someArray;
};

const renderResultsToDom = (results, el) => {
  el.innerHTML = results.join(' ');
};

buttonEl.addEventListener('click', () => renderResultsToDom(generateArrayAndRandomize(), resultsEl));
<h1>Randomize!</h1>
<button id="trigger">Generate</button>
<p id="results">0 1 2 3 4 5 6 7 8 9</p> */

const toDOH =[
    {
        id:1,
        name: "Male das Pony",
        condition: "drinnen",
        description1: "Hol dir ein Blatt Papier und einen Stift und male ein Pony, das eine Möhre Kaut und einen Hut auf hat",
        description2: "Setze deinen Handy-Timer auf 15 Minuten"
    },
    {
        id:2,
        name: "Putze dein Küchenfenster",
        condition: "drinnen",
        description1: "Schnapp dir einen Lappen, Glasspiritus und einen Abzieher und gönn dir den Putz",
        description2: "Setze deinen Handy-Timer auf 15 Minuten"
    },
    {
        id:3,
        name: "Hüpf nach draußen und bringe drei kleine Blumen wiedeer mit",
        condition: "draußen",
        description1: "Hol dir ein Blatt Papier und einen Stift und male ein Pony, das eine Möhre Kaut und einen Hut auf hat",
        description2: "Setze deinen Handy-Timer auf 15 Minuten und pack die armen Blumen in die Vase!"
    }
];
function shuffleArray(toDOH) {
    let i = toDOH.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = toDOH[i];
      array[i] = toDOH[j];
      array[j] = temp;
    }
    return toDOH;
    console.log(toDOH)
  }

  class RecommendedPosts extends React.Component {
    render() {
      const shuffledPosts = shuffleArray(this.props.posts);
      return (
        <ul>
          {shuffledPosts.map((post) => {
            return (
              <li key={post.id}>
                <p>{post.title}</p>
                <p>{post.text}</p>
                <p>{post.category}</p>
                <Link to={`/blog/post-1/:${post.id}`}>Weiter lesen</Link>
              </li>
            );
          })}
        </ul>
      );
    }
  }
  RecommendedPosts.propTypes = {
    posts: React.PropTypes.array,
  };
  export default RecommendedPosts;