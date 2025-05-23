"use client";

import React, { useState } from "react";

export default function SubmissionsList({ submissions }) {
  const [expandedId, setExpandedId] = useState(null);
  const [submissionList, setSubmissionList] = useState(submissions);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Function to handle the action (approve/reject)
  const handleAction = async (userId, action) => {
    const res = await fetch("/api/submissions/respond", {
      method: "POST",
      body: JSON.stringify({ userId, action }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    if (data.success) {
      alert("Action completed!");
      setSubmissionList(submissionList.filter((s) => s._id !== userId));
    } else {
      alert("Error: " + data.error);
    }
  };

  return (
    <div>
      {submissions.length === 0 && <p>No submissions found.</p>}

      {submissionList.map((submission) => (
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
            onClick={() => handleAction(submission._id, "approve")}
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
            onClick={() => handleAction(submission._id, "reject")}
          >
            Reject
          </button>
        </div>
      ))}
    </div>
  );
}
