// src/components/githubRepoCard/GithubRepoCard.jsx
import "../../assets/font-awesome/css/project.css";
import React from "react";
import ProjectLanguages from "../../components/projectLanguages/ProjectLanguages";
import { Fade } from "react-reveal";

export default function GithubRepoCard({ repo, theme }) {
  function openRepoinNewTab(url) {
    const win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div
      className="repo-card-div"
      style={{ backgroundColor: theme.highlight }}
      onClick={() => openRepoinNewTab(repo.url)}
    >
      <Fade bottom duration={2000} distance="40px">
        {/* === Imagen del repositorio === */}
        <div className="repo-card__image-container">
          {repo.img ? (
            <img src={repo.img} alt={repo.name} className="repo-card__image" />
          ) : (
            <div className="repo-card__image-placeholder" />
          )}
        </div>

        {/* === Nombre y descripción === */}
        <div className="repo-name-div">
          <svg
            aria-hidden="true"
            className="octicon repo-svg"
            height="16"
            role="img"
            viewBox="0 0 12 16"
            width="12"
          >
            <path
              fillRule="evenodd"
              d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
            />
          </svg>
          <p className="repo-name" style={{ color: theme.text }}>
            {repo.name}
          </p>
        </div>
      </Fade>
    </div>
  );
}
