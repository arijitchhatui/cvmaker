import type { CreateCVDto } from "src/cvs-module/dto/create-cv.dto";

export function cvExample1Template(dto: CreateCVDto): string {
  const fullName = [dto.firstName, dto.middleName, dto.lastName]
    .filter(Boolean)
    .join(" ");

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <title>Currículo - ${fullName}</title>

  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; font-family: Segoe UI, sans-serif; }
    body { background: #f4f6f8; padding: 40px; }
    .container { max-width: 800px; margin: auto; background: #fff; padding: 40px; }
    header { display: flex; justify-content: space-between; border-bottom: 2px solid #eee; padding-bottom: 20px; }
    h1 { font-size: 32px; }
    h2 { font-size: 18px; color: #777; }
    section { margin-top: 30px; }
    section h3 { border-left: 4px solid #3498db; padding-left: 10px; margin-bottom: 10px; }
    .item-title { font-weight: bold; }
    .item-subtitle { color: #777; font-size: 14px; }
    ul.skills { list-style: none; display: flex; flex-wrap: wrap; gap: 10px; }
    ul.skills li { background: #3498db; color: #fff; padding: 6px 12px; border-radius: 20px; }
  </style>
</head>

<body>
  <div class="container">

    <!-- HEADER -->
    <header>
      <div>
        <h1>${fullName}</h1>
      </div>

      <div>
        ${dto.contacts?.email ? `<p>📧 ${dto.contacts.email}</p>` : ""}
        ${dto.contacts?.phone ? `<p>📱 ${dto.contacts.phone}</p>` : ""}
        ${dto.address ? `<p>📍 ${dto.address}</p>` : ""}
      </div>
    </header>

    <!-- PERFIL -->
    ${
      dto.summary
        ? `
    <section>
      <h3>Perfil Profissional</h3>
      <p>${dto.summary}</p>
    </section>`
        : ""
    }

    <!-- EXPERIÊNCIA -->
    ${
      dto.experience?.length
        ? `
    <section>
      <h3>Experiência Profissional</h3>
      ${dto.experience
        .map(
          (exp) => `
        <div>
          <p class="item-title">${exp.position}</p>
          <p class="item-subtitle">
            ${exp.company} • ${exp.startDate} - ${exp.endDate || "Atual"}
          </p>
          ${exp.responsibilities ? `<p>${exp.responsibilities}</p>` : ""}
        </div>
      `,
        )
        .join("")}
    </section>`
        : ""
    }

    <!-- EDUCAÇÃO -->
    ${
      dto.education?.length
        ? `
    <section>
      <h3>Formação Acadêmica</h3>
      ${dto.education
        .map(
          (edu) => `
        <div>
          <p class="item-title">${edu.degree} - ${edu.fieldOfStudy}</p>
          <p class="item-subtitle">
            ${edu.institution} • ${edu.startDate} - ${edu.endDate || "Atual"}
          </p>
          ${edu.description ? `<p>${edu.description}</p>` : ""}
        </div>
      `,
        )
        .join("")}
    </section>`
        : ""
    }

    <!-- SKILLS -->
    ${
      dto.skills?.length
        ? `
    <section>
      <h3>Habilidades</h3>
      <ul class="skills">
        ${dto.skills
          .map(
            (skill) => `
          <li>${skill.name}${skill.level ? ` (${skill.level})` : ""}</li>
        `,
          )
          .join("")}
      </ul>
    </section>`
        : ""
    }

    <!-- PROJETOS -->
    ${
      dto.projects?.length
        ? `
    <section>
      <h3>Projetos</h3>
      ${dto.projects
        .map(
          (p) => `
        <div>
          <p class="item-title">${p.name}</p>
          <p class="item-subtitle">${p.startDate} - ${p.endDate || "Atual"}</p>
          <p>${p.description}</p>
          ${p.link ? `<p>🔗 ${p.link}</p>` : ""}
        </div>
      `,
        )
        .join("")}
    </section>`
        : ""
    }

    <!-- FOOTER -->
    <footer style="margin-top:40px;text-align:center;font-size:12px;color:#999;">
      Currículo gerado automaticamente
    </footer>

  </div>
</body>
</html>`;
}
