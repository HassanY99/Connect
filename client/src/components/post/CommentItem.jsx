import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteComment } from '../../actions/post';
import Moment from 'react-moment';

const CommentItem = ({
  postId,
  comment: { _id, text, name, avatar, user, date },
  auth,
  deleteComment
}) => (
  <div className="post bg-grey rounded-md p-4 my-3 flex">
    <div className='flex justify-start'>
      <Link to={`/profile/${user}`}>
        <img className="round-img p-1" src={avatar} alt="" />
        <h4 className='text-black mt-3'>{name}</h4>
      </Link>
    </div>
    <div>
      <p className="my-1 text-black">{text}</p>
      <p className="post-date text-dark-grey">Posted on <Moment format='YYYY/MM/DD'>{date}</Moment></p>
      {!auth.loading && user === auth.user._id && (
        <button
          onClick={() => deleteComment(postId, _id)}
          type="button"
          className="btn btn-danger bg-red"
        >
          <i className="fas fa-times" />
        </button>
      )}
    </div>
  </div>
);

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);