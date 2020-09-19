import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchPosts } from '../actions/postActions';
const Posts = ({ posts: { items }, fetchPosts }) => {
  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <h1>posts</h1>
      {items.map((item) => (
        <div key={item.id}>
          <h4>{item.title}</h4>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};
Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  posts: state.posts,
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
