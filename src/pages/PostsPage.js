import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postsActions";
import { Post } from "../components/Posts";

const PostsPage = ({ dispatch, loading, posts, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  // Show loading, error, or success state
  const renderPosts = () => {
    if (loading) return <p> Loading posts... </p>;
    if (hasErrors) return <p> Unable to display posts </p>;
    return posts.map((post) => <Post key={post.id} post={post} />);
  };

  return (
    <section>
      <h1>Posts</h1>
      {renderPosts()}
    </section>
  );
};

// Map Redux state to React component props
// Map by connecting to the post in rootReducer and then to the state in postsReducer
const mapStateToProps = (state) => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
  hasErrors: state.posts.hasErrors,
});

// Connect Redux to React
export default connect(mapStateToProps)(PostsPage);
