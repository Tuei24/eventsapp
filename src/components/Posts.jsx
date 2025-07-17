import { useState, useEffect } from 'react';
import '../App.css';

function Card({ title, body }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>

  );
}

function Posts() {
  const [posts, setPosts] = useState([]);
  const [showPosts, setShowPosts] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);


  return (
    <>
      <div className="custom-control custom-switch">
        <input className="custom-control-input" type="checkbox" id="customSwitch"
          checked={showPosts}
          onChange={() => setShowPosts(!showPosts)}
        />
        <label className="custom-control-label" htmlFor="customSwitch">
          Show posts
        </label>
      </div>

      {showPosts && (

        <div className="card-container">
          {posts.map(post => (
            <Card key={post.id} title={post.title} body={post.body} />
          ))}
        </div>
      )}
    </>
  );
}

export default Posts;

//<div className="form-check form-switch">
//<input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked"
  //checked={showPosts}
  //onChange={() => setShowPosts(!showPosts)}
///>
//<label className="form-check-label" htmlFor="flexSwitchCheckChecked">
  //Show posts
//</label>
//</div>