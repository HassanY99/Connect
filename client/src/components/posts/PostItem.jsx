import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { addLike, removeLike, deletePost } from '../../actions/post';

const PostItem = ({
  auth,
  addLike,
  removeLike,
  deletePost,
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions
}) => (
  <div className="post bg-grey rounded-md p-4 my-3 flex">
    <div>
      <Link to={`/profile/${user}`}>
        <img className="round-img p-1" src={avatar} alt="" />
        <h4 className='text-black mt-3'>{name}</h4>
      </Link>
    </div>
    <div>
      <p className="my-1 text-black">{text}</p>
      <p className="post-date text-dark-grey">Posted on <Moment format='YYYY/MM/DD'>{date}</Moment></p>

      {showActions && (
        <Fragment>
          <button
            type="button"
            className="btn bg-blue-300"
            onClick={e => addLike(_id)}
          >
            <i className="fas fa-thumbs-up" />{' '}
            <span className='text-black'>{likes.length > 0 && <span className='text-black'>{likes.length}</span>}</span>
          </button>
          <button
            type="button"
            className="btn text-black bg-pink-400"
            onClick={e => removeLike(_id)}
          >
            <i className="fas fa-thumbs-down" />
          </button>
          <Link to={`/posts/${_id}`} className="btn btn-primary">
            Discussion{' '}
            {comments.length > 0 && (
              <span className="comment-count">{comments.length}</span>
            )}
          </Link>
          {!auth.loading && user === auth.user._id && (
            <button
              type="button"
              className="btn btn-danger bg-red"
              onClick={e => deletePost(_id)}
            >
              <i className="fas fa-times" />
            </button>
          )}
        </Fragment>
      )}
    </div>
  </div>
);

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);