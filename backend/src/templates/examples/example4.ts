import type { CreateCVDto } from "src/cvs/dto/create-cv.dto";

export function cvExample4Template(dto: CreateCVDto): string {
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
    --primary: #2d3748;
    --secondary: #4a5568;
    --accent: #667eea;
    --accent-light: #7c3aed;
    --success: #48bb78;
    --text: #1a202c;
    --text-light: #718096;
    --bg: #ffffff;
    --bg-accent: #f7fafc;
    --border: #e2e8f0;
    --timeline: #cbd5e0;
  }

  * {
    box-sizing: border-box;
    font-family: "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif;
  }

  body {
    margin: 0;
    padding: 0;
    background: var(--bg);
    color: var(--text);
    font-size: 14px;
    line-height: 1.7;
  }

  .page {
    max-width: 900px;
    margin: 0 auto;
    background: white;
  }

  /* TOP BAR */
  .top-bar {
    height: 8px;
    background: linear-gradient(90deg, var(--accent) 0%, var(--accent-light) 100%);
  }

  /* PROFILE SECTION */
  .profile-section {
    padding: 50px 70px 40px;
    background: var(--bg-accent);
    position: relative;
  }

  .profile-grid {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 35px;
    align-items: start;
  }

  .profile-avatar {
    width: 150px;
    height: 150px;
    border-radius: 12px;
    object-fit: cover;
    border: 4px solid white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .profile-info {
    padding-top: 10px;
  }

  .profile-name {
    font-size: 40px;
    font-weight: 800;
    color: var(--primary);
    margin: 0 0 8px 0;
    letter-spacing: -0.5px;
  }

  .profile-nickname {
    font-size: 18px;
    color: var(--text-light);
    font-weight: 500;
    margin-bottom: 20px;
  }

  .contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 12px;
    margin-top: 16px;
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 0;
    font-size: 14px;
    color: var(--secondary);
  }

  .contact-icon {
    width: 18px;
    height: 18px;
    background: var(--accent);
    border-radius: 50%;
    flex-shrink: 0;
  }

  /* CONTENT AREA */
  .content-area {
    padding: 40px 70px 50px;
  }

  .content-section {
    margin-bottom: 45px;
  }

  .section-heading {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 25px;
  }

  .section-heading::before {
    content: "";
    width: 4px;
    height: 28px;
    background: linear-gradient(180deg, var(--accent), var(--accent-light));
    border-radius: 2px;
  }

  .section-heading h2 {
    font-size: 22px;
    font-weight: 700;
    color: var(--primary);
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .text-block {
    padding: 20px;
    background: var(--bg-accent);
    border-radius: 8px;
    border-left: 4px solid var(--accent);
    line-height: 1.8;
  }

  /* TIMELINE ITEMS */
  .timeline {
    position: relative;
    padding-left: 35px;
  }

  .timeline::before {
    content: "";
    position: absolute;
    left: 8px;
    top: 8px;
    bottom: 8px;
    width: 2px;
    background: var(--timeline);
  }

  .timeline-item {
    position: relative;
    padding-bottom: 30px;
  }

  .timeline-item::before {
    content: "";
    position: absolute;
    left: -31px;
    top: 6px;
    width: 12px;
    height: 12px;
    background: white;
    border: 3px solid var(--accent);
    border-radius: 50%;
    z-index: 1;
  }

  .timeline-item:hover::before {
    background: var(--accent);
  }

  .timeline-content {
    background: white;
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    transition: all 0.2s;
  }

  .timeline-content:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-color: var(--accent);
  }

  .timeline-header {
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin-bottom: 10px;
    gap: 20px;
  }

  .timeline-title {
    font-size: 17px;
    font-weight: 700;
    color: var(--primary);
    line-height: 1.3;
  }

  .timeline-date {
    font-size: 13px;
    color: white;
    background: var(--accent);
    padding: 4px 12px;
    border-radius: 12px;
    white-space: nowrap;
    font-weight: 600;
  }

  .timeline-subtitle {
    font-size: 15px;
    color: var(--accent);
    font-weight: 600;
    margin-bottom: 6px;
  }

  .timeline-location {
    font-size: 13px;
    color: var(--text-light);
    margin-bottom: 10px;
  }

  .timeline-description {
    font-size: 14px;
    color: var(--secondary);
    line-height: 1.7;
  }

  .timeline-link {
    display: inline-block;
    margin-top: 10px;
    color: var(--accent);
    text-decoration: none;
    font-weight: 600;
    font-size: 13px;
  }

  .timeline-link:hover {
    text-decoration: underline;
  }

  /* GRID LAYOUTS */
  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 16px;
  }

  .card {
    background: var(--bg-accent);
    border: 2px solid var(--border);
    border-radius: 8px;
    padding: 16px;
    transition: all 0.2s;
  }

  .card:hover {
    border-color: var(--accent);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .card-title {
    font-weight: 700;
    color: var(--primary);
    font-size: 15px;
    margin-bottom: 4px;
  }

  .card-subtitle {
    font-size: 13px;
    color: var(--text-light);
  }

  /* BADGES */
  .badge-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 16px;
    background: white;
    border: 2px solid var(--accent);
    color: var(--accent);
    border-radius: 20px;
    font-size: 14px;
    font-weight: 600;
    transition: all 0.2s;
  }

  .badge:hover {
    background: var(--accent);
    color: white;
  }

  .badge-dot {
    width: 6px;
    height: 6px;
    background: currentColor;
    border-radius: 50%;
  }

  /* LINKS SECTION */
  .link-card {
    display: block;
    padding: 14px 18px;
    background: white;
    border: 1px solid var(--border);
    border-radius: 8px;
    text-decoration: none;
    color: var(--primary);
    margin-bottom: 10px;
    transition: all 0.2s;
  }

  .link-card:hover {
    border-color: var(--accent);
    background: var(--bg-accent);
    transform: translateX(4px);
  }

  .link-label {
    font-weight: 600;
    color: var(--accent);
  }

  .link-url {
    font-size: 13px;
    color: var(--text-light);
    margin-top: 2px;
  }

  /* FOOTER */
  .footer {
    background: var(--bg-accent);
    padding: 25px 70px;
    text-align: center;
    font-size: 12px;
    color: var(--text-light);
    border-top: 1px solid var(--border);
  }

  @media print {
    .content-area {
      padding: 30px 60px;
    }
    .profile-section {
      padding: 40px 60px 30px;
    }
  }
</style>
</head>

<body>
<div class="page">

<!-- TOP BAR -->
<div class="top-bar"></div>

<!-- PROFILE SECTION -->
<div class="profile-section">
  <div class="profile-grid">
    ${
      dto.avatar
        ? `
    <div>
      <img src="${dto.avatar}" class="profile-avatar" alt="${fullName}" />
    </div>`
        : ""
    }
    <div class="profile-info">
      <h1 class="profile-name">${fullName}</h1>
      ${dto.nickname ? `<div class="profile-nickname">${dto.nickname}</div>` : ""}
      
      <div class="contact-grid">
        ${
          dto.contacts.email
            ? `
        <div class="contact-item">
          <div class="contact-icon"></div>
          <span>${dto.contacts.email}</span>
        </div>`
            : ""
        }
        ${
          dto.contacts.phone
            ? `
        <div class="contact-item">
          <div class="contact-icon"></div>
          <span>${dto.contacts.phone}</span>
        </div>`
            : ""
        }
        ${
          dto.address
            ? `
        <div class="contact-item">
          <div class="contact-icon"></div>
          <span>${dto.address}</span>
        </div>`
            : ""
        }
      </div>
    </div>
  </div>
</div>

<!-- CONTENT AREA -->
<div class="content-area">

<!-- SUMMARY -->
${
  dto.summary
    ? `
<div class="content-section">
  <div class="section-heading">
    <h2>Sobre</h2>
  </div>
  <div class="text-block">${dto.summary}</div>
</div>`
    : ""
}

<!-- OBJECTIVES -->
${
  dto.objectives
    ? `
<div class="content-section">
  <div class="section-heading">
    <h2>Objetivos</h2>
  </div>
  <div class="text-block">${dto.objectives}</div>
</div>`
    : ""
}

<!-- EXPERIENCE -->
${
  dto.experience.length
    ? `
<div class="content-section">
  <div class="section-heading">
    <h2>Experiência</h2>
  </div>
  <div class="timeline">
    ${dto.experience
      .map(
        (e) => `
    <div class="timeline-item">
      <div class="timeline-content">
        <div class="timeline-header">
          <div class="timeline-title">${e.position}</div>
          <div class="timeline-date">
            ${e.startDate} ${e.endDate ? `– ${e.endDate}` : "– Atual"}
          </div>
        </div>
        <div class="timeline-subtitle">${e.company}</div>
        ${e.location ? `<div class="timeline-location">📍 ${e.location}</div>` : ""}
        ${e.responsibilities ? `<div class="timeline-description">${e.responsibilities}</div>` : ""}
      </div>
    </div>`,
      )
      .join("")}
  </div>
</div>`
    : ""
}

<!-- EDUCATION -->
${
  dto.education.length
    ? `
<div class="content-section">
  <div class="section-heading">
    <h2>Educação</h2>
  </div>
  <div class="timeline">
    ${dto.education
      .map(
        (e) => `
    <div class="timeline-item">
      <div class="timeline-content">
        <div class="timeline-header">
          <div class="timeline-title">${e.degree} em ${e.fieldOfStudy}</div>
          <div class="timeline-date">
            ${e.startDate} ${e.endDate ? `– ${e.endDate}` : ""}
          </div>
        </div>
        <div class="timeline-subtitle">${e.institution}</div>
        ${e.location ? `<div class="timeline-location">📍 ${e.location}</div>` : ""}
        ${e.grade ? `<div class="timeline-description">Nota: ${e.grade}</div>` : ""}
        ${e.description ? `<div class="timeline-description">${e.description}</div>` : ""}
      </div>
    </div>`,
      )
      .join("")}
  </div>
</div>`
    : ""
}

<!-- SKILLS -->
${
  dto.skills.length
    ? `
<div class="content-section">
  <div class="section-heading">
    <h2>Habilidades</h2>
  </div>
  <div class="card-grid">
    ${dto.skills
      .map(
        (s) => `
    <div class="card">
      <div class="card-title">${s.name}</div>
      ${s.level ? `<div class="card-subtitle">${s.level}</div>` : ""}
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
<div class="content-section">
  <div class="section-heading">
    <h2>Idiomas</h2>
  </div>
  <div class="badge-container">
    ${dto.languages
      .map(
        (l) => `
    <div class="badge">
      <div class="badge-dot"></div>
      ${l.name} — ${l.proficiency}
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
<div class="content-section">
  <div class="section-heading">
    <h2>Projetos</h2>
  </div>
  <div class="timeline">
    ${dto.projects
      .map(
        (p) => `
    <div class="timeline-item">
      <div class="timeline-content">
        <div class="timeline-header">
          <div class="timeline-title">${p.name}</div>
          <div class="timeline-date">
            ${p.startDate} ${p.endDate ? `– ${p.endDate}` : ""}
          </div>
        </div>
        ${p.location ? `<div class="timeline-location">📍 ${p.location}</div>` : ""}
        <div class="timeline-description">${p.description}</div>
        ${p.link ? `<a href="${p.link}" class="timeline-link">Ver projeto →</a>` : ""}
      </div>
    </div>`,
      )
      .join("")}
  </div>
</div>`
    : ""
}

<!-- CERTIFICATIONS -->
${
  dto.certifications.length
    ? `
<div class="content-section">
  <div class="section-heading">
    <h2>Certificações</h2>
  </div>
  <div class="timeline">
    ${dto.certifications
      .map(
        (c) => `
    <div class="timeline-item">
      <div class="timeline-content">
        <div class="timeline-header">
          <div class="timeline-title">${c.name}</div>
          <div class="timeline-date">
            ${c.issueDate}${c.expirationDate ? ` – ${c.expirationDate}` : ""}
          </div>
        </div>
        <div class="timeline-subtitle">${c.issuingOrganization}</div>
        ${c.credentialID ? `<div class="timeline-description">ID: ${c.credentialID}</div>` : ""}
        ${c.credentialURL ? `<a href="${c.credentialURL}" class="timeline-link">Ver credencial →</a>` : ""}
      </div>
    </div>`,
      )
      .join("")}
  </div>
</div>`
    : ""
}

<!-- OTHER EXPERIENCES -->
${
  dto.otherExperiences.length
    ? `
<div class="content-section">
  <div class="section-heading">
    <h2>Outras Experiências</h2>
  </div>
  <div class="timeline">
    ${dto.otherExperiences
      .map(
        (o) => `
    <div class="timeline-item">
      <div class="timeline-content">
        <div class="timeline-header">
          <div class="timeline-title">${o.title}</div>
          <div class="timeline-date">
            ${o.startDate ?? ""} ${o.endDate ? `– ${o.endDate}` : ""}
          </div>
        </div>
        ${o.location ? `<div class="timeline-location">📍 ${o.location}</div>` : ""}
        <div class="timeline-description">${o.description}</div>
      </div>
    </div>`,
      )
      .join("")}
  </div>
</div>`
    : ""
}

<!-- HOBBIES -->
${
  dto.hobbies.length
    ? `
<div class="content-section">
  <div class="section-heading">
    <h2>Hobbies</h2>
  </div>
  <div class="badge-container">
    ${dto.hobbies
      .map(
        (h) => `
    <div class="badge">
      <div class="badge-dot"></div>
      ${h.description}
    </div>`,
      )
      .join("")}
  </div>
</div>`
    : ""
}

<!-- LINKS -->
${
  dto.links.length
    ? `
<div class="content-section">
  <div class="section-heading">
    <h2>Links</h2>
  </div>
  ${dto.links
    .map(
      (l) => `
  <a href="${l.url}" class="link-card">
    <div class="link-label">${l.label}</div>
    <div class="link-url">${l.url}</div>
  </a>`,
    )
    .join("")}
</div>`
    : ""
}

<!-- REFERENCES -->
${
  dto.references.length
    ? `
<div class="content-section">
  <div class="section-heading">
    <h2>Referências</h2>
  </div>
  ${dto.references
    .map(
      (r) => `
  <div class="card" style="margin-bottom: 12px;">
    <div class="card-title">${r.name}</div>
    ${r.relationship || r.contactInfo ? `<div class="card-subtitle">${r.relationship ? r.relationship : ""}${r.relationship && r.contactInfo ? " • " : ""}${r.contactInfo ? r.contactInfo : ""}</div>` : ""}
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
<div class="content-section">
  <div class="section-heading">
    <h2>Informações Adicionais</h2>
  </div>
  <div class="text-block">${dto.additionalInfo}</div>
</div>`
    : ""
}

</div>

<!-- FOOTER -->
<div class="footer">
  CV ID: ${dto.id} • Criado em: ${date(dto.createdAt)} • Atualizado em: ${date(dto.updatedAt)}
</div>

</div>
</body>
</html>
`;
}
