import React from 'react';
import PttPosts from "./components/PttPosts";
import PttPostContent from "./components/PttPostContent"

function App() {
  return (
      <div>
          <div>
              <PttPosts />
          </div>
          <div>
              <PttPostContent />
          </div>
      </div>
  );
}

export default App;
