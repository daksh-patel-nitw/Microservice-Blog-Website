import React from 'react';

export default function CommentList({ comments }) {
  const renderedComments = comments.map((comment) => {
    let content;
    let badgeClass = 'secondary';

    if (comment.status === 'approved') {
      content = comment.content;
      badgeClass = 'success';
    }

    if (comment.status === 'pending') {
      content = 'Awaiting moderation';
      badgeClass = 'warning';
    }

    if (comment.status === 'rejected') {
      content = 'Rejected';
      badgeClass = 'danger';
    }

    return (
      <li
        key={comment.id}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        {content}
        <span className={`badge bg-${badgeClass}`}>{comment.status}</span>
      </li>
    );
  });

  return <ul className="list-group mb-3">{renderedComments}</ul>;
}
