"use client";

import React, { useState } from "react";

export default function SubmissionsList({ submissions }) {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div>
      {submissions.length === 0 && <p>No submissions found.</p>}

      {submissions.map((submission) => (
        <div
          key={submission._id}
          style={{
            border: "1px solid #ccc",
            margin: "10px 0",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <p>
            <strong>Name:</strong> {submission.fullName}
          </p>
          <p>
            <strong>Email:</strong> {submission.email}
          </p>
          <p>
            <strong>Role:</strong> {submission.role}
          </p>

          <button
            onClick={() => toggleExpand(submission._id)}
            style={{ marginBottom: "10px" }}
          >
            {expandedId === submission._id
              ? "Hide Message ▲"
              : "Show Message ▼"}
          </button>

          {expandedId === submission._id && (
            <div
              style={{
                marginBottom: "10px",
                whiteSpace: "pre-wrap",
                backgroundColor: "#f9f9f9",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              <strong>Message:</strong>
              <p>{submission.message || "No message provided."}</p>
            </div>
          )}

          <button
            style={{
              marginRight: "10px",
              backgroundColor: "green",
              color: "white",
              padding: "5px 10px",
              border: "none",
              borderRadius: "3px",
              cursor: "pointer",
            }}
          >
            Approve
          </button>

          <button
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "5px 10px",
              border: "none",
              borderRadius: "3px",
              cursor: "pointer",
            }}
          >
            Reject
          </button>
        </div>
      ))}
    </div>
  );
}
