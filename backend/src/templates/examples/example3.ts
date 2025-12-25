import type { CreateCVDto } from "src/cvs/dto/create-cv.dto";

export function cvExample3Template(dto: CreateCVDto): string {
  const fullName = [dto.firstName, dto.middleName, dto.lastName]
    .filter(Boolean)
    .join(" ");

  const date = (v?: string | number | null): string =>
    v ? new Date(v).toLocaleDateString() : "";

  return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8" />
<title>${dto.cVName}</title>

<style>
  :root {
    --primary: #1a1a2e;
    --secondary: #16213e;
    --accent: #0f3460;
    --highlight: #e94560;
    --text: #2c3e50;
    --text-muted: #7f8c8d;
    --border: #bdc3c7;
    --bg-light: #ecf0f1;
  }

  * {
    box-sizing: border-box;
    font-family: "Helvetica Neue", "Arial", sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    background: white;
    color: var(--text);
    font-size: 14px;
    line-height: 1.6;
  }

  .container {
    max-width: 850px;
    margin: 0 auto;
    padding: 0;
  }

  /* HEADER BANNER */
  .header-banner {
    background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
    color: white;
    padding: 50px 60px;
    position: relative;
  }

  .header-content {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 30px;
    align-items: center;
  }

  .avatar-section {
    text-align: center;
  }

  .avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid rgba(255, 255, 255, 0.3);
  }

  .header-info {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .full-name {
    font-size: 38px;
    font-weight: 700;
    margin: 0;
    letter-spacing: 1px;
  }

  .nickname-header {
    font-size: 16px;
    opacity: 0.9;
    font-style: italic;
  }

  .contact-info {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    margin-top: 12px;
    font-size: 14px;
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 6px;
    opacity: 0.95;
  }

  .contact-item::before {
    content: "▸";
    color: var(--highlight);
  }

  /* MAIN CONTENT */
  .main-content {
    padding: 40px 60px;
  }

  .section {
    margin-bottom: 35px;
    page-break-inside: avoid;
  }

  .section-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 2px solid var(--accent);
  }

  .section-icon {
    width: 8px;
    height: 8px;
    background: var(--highlight);
    border-radius: 50%;
  }

  .section-title {
    font-size: 20px;
    font-weight: 700;
    color: var(--primary);
    text-transform: uppercase;
    letter-spacing: 1.5px;
    margin: 0;
  }

  .entry {
    margin-bottom: 22px;
    padding-left: 20px;
    border-left: 3px solid var(--bg-light);
  }

  .entry:hover {
    border-left-color: var(--accent);
  }

  .entry-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 6px;
    gap: 15px;
  }

  .entry-title {
    font-size: 16px;
    font-weight: 700;
    color: var(--primary);
  }

  .entry-period {
    font-size: 13px;
    color: var(--text-muted);
    white-space: nowrap;
    font-style: italic;
  }

  .entry-subtitle {
    font-size: 14px;
    color: var(--accent);
    font-weight: 600;
    margin-bottom: 4px;
  }

  .entry-location {
    font-size: 13px;
    color: var(--text-muted);
    margin-bottom: 6px;
  }

  .entry-description {
    font-size: 14px;
    color: var(--text);
    line-height: 1.6;
  }

  /* SKILLS GRID */
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 15px;
  }

  .skill-card {
    background: var(--bg-light);
    padding: 12px 16px;
    border-radius: 6px;
    border-left: 4px solid var(--accent);
  }

  .skill-name {
    font-weight: 700;
    color: var(--primary);
    display: block;
  }

  .skill-level {
    font-size: 12px;
    color: var(--text-muted);
  }

  /* LANGUAGES */
  .languages-list {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  .language-badge {
    background: var(--accent);
    color: white;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 600;
  }

  .language-proficiency {
    opacity: 0.8;
    font-weight: 400;
  }

  /* LINKS */
  .links-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 10px;
  }

  .link-item {
    color: var(--accent);
    text-decoration: none;
    padding: 8px 12px;
    background: var(--bg-light);
    border-radius: 4px;
    display: block;
    transition: all 0.2s;
  }

  .link-item:hover {
    background: var(--accent);
    color: white;
  }

  /* HOBBIES */
  .hobbies-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .hobby-tag {
    background: var(--bg-light);
    color: var(--text);
    padding: 6px 14px;
    border-radius: 16px;
    font-size: 13px;
    border: 1px solid var(--border);
  }

  /* REFERENCES */
  .reference-card {
    background: var(--bg-light);
    padding: 15px 20px;
    border-radius: 6px;
    margin-bottom: 12px;
    border-left: 4px solid var(--highlight);
  }

  .reference-name {
    font-weight: 700;
    color: var(--primary);
    font-size: 15px;
  }

  .reference-details {
    font-size: 13px;
    color: var(--text-muted);
    margin-top: 4px;
  }

  /* FOOTER */
  .footer {
    background: var(--bg-light);
    padding: 20px 60px;
    text-align: center;
    font-size: 11px;
    color: var(--text-muted);
    border-top: 3px solid var(--accent);
  }

  @media print {
    .main-content {
      padding: 30px 50px;
    }
    .header-banner {
      padding: 40px 50px;
    }
  }
</style>
</head>

<body>
<div class="container">

<!-- HEADER BANNER -->
<div class="header-banner">
  <div class="header-content">
    ${
      dto.avatar
        ? `
    <div class="avatar-section">
      <img src="${dto.avatar}" class="avatar" alt="${fullName}" />
    </div>`
        : ""
    }
    <div class="header-info">
      <h1 class="full-name">${fullName}</h1>
      ${dto.nickname ? `<div class="nickname-header">"${dto.nickname}"</div>` : ""}
      <div class="contact-info">
        ${dto.contacts.email ? `<div class="contact-item">${dto.contacts.email}</div>` : ""}
        ${dto.contacts.phone ? `<div class="contact-item">${dto.contacts.phone}</div>` : ""}
        ${dto.address ? `<div class="contact-item">${dto.address}</div>` : ""}
      </div>
    </div>
  </div>
</div>

<!-- MAIN CONTENT -->
<div class="main-content">

<!-- SUMMARY -->
${
  dto.summary
    ? `
<div class="section">
  <div class="section-header">
    <div class="section-icon"></div>
    <h2 class="section-title">Resumo</h2>
  </div>
  <div class="entry-description">${dto.summary}</div>
</div>`
    : ""
}

<!-- OBJECTIVES -->
${
  dto.objectives
    ? `
<div class="section">
  <div class="section-header">
    <div class="section-icon"></div>
    <h2 class="section-title">Objetivos</h2>
  </div>
  <div class="entry-description">${dto.objectives}</div>
</div>`
    : ""
}

<!-- EXPERIENCE -->
${
  dto.experience.length
    ? `
<div class="section">
  <div class="section-header">
    <div class="section-icon"></div>
    <h2 class="section-title">Experiência</h2>
  </div>
  ${dto.experience
    .map(
      (e) => `
  <div class="entry">
    <div class="entry-header">
      <div class="entry-title">${e.position}</div>
      <div class="entry-period">
        ${e.startDate} ${e.endDate ? `– ${e.endDate}` : "– Presente"}
      </div>
    </div>
    <div class="entry-subtitle">${e.company}</div>
    ${e.location ? `<div class="entry-location">📍 ${e.location}</div>` : ""}
    ${e.responsibilities ? `<div class="entry-description">${e.responsibilities}</div>` : ""}
  </div>`,
    )
    .join("")}
</div>`
    : ""
}

<!-- EDUCATION -->
${
  dto.education.length
    ? `
<div class="section">
  <div class="section-header">
    <div class="section-icon"></div>
    <h2 class="section-title">Educação</h2>
  </div>
  ${dto.education
    .map(
      (e) => `
  <div class="entry">
    <div class="entry-header">
      <div class="entry-title">${e.degree} em ${e.fieldOfStudy}</div>
      <div class="entry-period">
        ${e.startDate} ${e.endDate ? `– ${e.endDate}` : ""}
      </div>
    </div>
    <div class="entry-subtitle">${e.institution}</div>
    ${e.location ? `<div class="entry-location">📍 ${e.location}</div>` : ""}
    ${e.grade ? `<div class="entry-description">Nota: ${e.grade}</div>` : ""}
    ${e.description ? `<div class="entry-description">${e.description}</div>` : ""}
  </div>`,
    )
    .join("")}
</div>`
    : ""
}

<!-- SKILLS -->
${
  dto.skills.length
    ? `
<div class="section">
  <div class="section-header">
    <div class="section-icon"></div>
    <h2 class="section-title">Habilidades</h2>
  </div>
  <div class="skills-grid">
    ${dto.skills
      .map(
        (s) => `
    <div class="skill-card">
      <span class="skill-name">${s.name}</span>
      ${s.level ? `<div class="skill-level">${s.level}</div>` : ""}
    </div>`,
      )
      .join("")}
  </div>
</div>`
    : ""
}

<!-- LANGUAGES -->
${
  dto.languages.length
    ? `
<div class="section">
  <div class="section-header">
    <div class="section-icon"></div>
    <h2 class="section-title">Idiomas</h2>
  </div>
  <div class="languages-list">
    ${dto.languages
      .map(
        (l) => `
    <div class="language-badge">
      ${l.name} <span class="language-proficiency">• ${l.proficiency}</span>
    </div>`,
      )
      .join("")}
  </div>
</div>`
    : ""
}

<!-- PROJECTS -->
${
  dto.projects.length
    ? `
<div class="section">
  <div class="section-header">
    <div class="section-icon"></div>
    <h2 class="section-title">Projetos</h2>
  </div>
  ${dto.projects
    .map(
      (p) => `
  <div class="entry">
    <div class="entry-header">
      <div class="entry-title">${p.name}</div>
      <div class="entry-period">
        ${p.startDate} ${p.endDate ? `– ${p.endDate}` : ""}
      </div>
    </div>
    ${p.location ? `<div class="entry-location">📍 ${p.location}</div>` : ""}
    <div class="entry-description">${p.description}</div>
    ${p.link ? `<div style="margin-top: 8px;"><a href="${p.link}" class="link-item" style="display: inline-block;">${p.link}</a></div>` : ""}
  </div>`,
    )
    .join("")}
</div>`
    : ""
}

<!-- CERTIFICATIONS -->
${
  dto.certifications.length
    ? `
<div class="section">
  <div class="section-header">
    <div class="section-icon"></div>
    <h2 class="section-title">Certificações</h2>
  </div>
  ${dto.certifications
    .map(
      (c) => `
  <div class="entry">
    <div class="entry-header">
      <div class="entry-title">${c.name}</div>
      <div class="entry-period">
        ${c.issueDate}${c.expirationDate ? ` – ${c.expirationDate}` : ""}
      </div>
    </div>
    <div class="entry-subtitle">${c.issuingOrganization}</div>
    ${c.credentialID ? `<div class="entry-description">ID: ${c.credentialID}</div>` : ""}
    ${c.credentialURL ? `<div style="margin-top: 6px;"><a href="${c.credentialURL}" class="link-item" style="display: inline-block;">${c.credentialURL}</a></div>` : ""}
  </div>`,
    )
    .join("")}
</div>`
    : ""
}

<!-- OTHER EXPERIENCES -->
${
  dto.otherExperiences.length
    ? `
<div class="section">
  <div class="section-header">
    <div class="section-icon"></div>
    <h2 class="section-title">Outras Experiências</h2>
  </div>
  ${dto.otherExperiences
    .map(
      (o) => `
  <div class="entry">
    <div class="entry-header">
      <div class="entry-title">${o.title}</div>
      <div class="entry-period">
        ${o.startDate ?? ""} ${o.endDate ? `– ${o.endDate}` : ""}
      </div>
    </div>
    ${o.location ? `<div class="entry-location">📍 ${o.location}</div>` : ""}
    <div class="entry-description">${o.description}</div>
  </div>`,
    )
    .join("")}
</div>`
    : ""
}

<!-- HOBBIES -->
${
  dto.hobbies.length
    ? `
<div class="section">
  <div class="section-header">
    <div class="section-icon"></div>
    <h2 class="section-title">Hobbies</h2>
  </div>
  <div class="hobbies-list">
    ${dto.hobbies.map((h) => `<div class="hobby-tag">${h.description}</div>`).join("")}
  </div>
</div>`
    : ""
}

<!-- LINKS -->
${
  dto.links.length
    ? `
<div class="section">
  <div class="section-header">
    <div class="section-icon"></div>
    <h2 class="section-title">Links</h2>
  </div>
  <div class="links-grid">
    ${dto.links.map((l) => `<a href="${l.url}" class="link-item">${l.label}</a>`).join("")}
  </div>
</div>`
    : ""
}

<!-- REFERENCES -->
${
  dto.references.length
    ? `
<div class="section">
  <div class="section-header">
    <div class="section-icon"></div>
    <h2 class="section-title">Referências</h2>
  </div>
  ${dto.references
    .map(
      (r) => `
  <div class="reference-card">
    <div class="reference-name">${r.name}</div>
    <div class="reference-details">
      ${r.relationship ? `${r.relationship}` : ""}
      ${r.contactInfo ? ` • ${r.contactInfo}` : ""}
    </div>
  </div>`,
    )
    .join("")}
</div>`
    : ""
}

<!-- ADDITIONAL INFO -->
${
  dto.additionalInfo
    ? `
<div class="section">
  <div class="section-header">
    <div class="section-icon"></div>
    <h2 class="section-title">Informações Adicionais</h2>
  </div>
  <div class="entry-description">${dto.additionalInfo}</div>
</div>`
    : ""
}

</div>

<!-- FOOTER -->
<div class="footer">
  CV ID: ${dto.id} | Criado: ${date(dto.createdAt)} | Atualizado: ${date(dto.updatedAt)}
</div>

</div>
</body>
</html>
`;
}
