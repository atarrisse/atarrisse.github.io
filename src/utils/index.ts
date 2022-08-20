import { TEducation, TJob, TSectionItem } from "~/types";

export const formatDate = (date: Date | null): string => {
  if (!date || date === null) return "Now";

  const _date = new Date(date);
  const year = _date.toLocaleString('default', { year: 'numeric' });
  const month = _date.toLocaleString('default', { month: 'short' });
  return `${month}/${year}`;
}

export const parseEducationExperience = (education: TEducation): TSectionItem => {
  const {
    dates,
    institution: {
      fullName,
      acronym
    },
    description,
    degreeLevel,
    course,
    grade,
    extracurricular
  } = education;

  return {
    dates,
    description,
    title: `${degreeLevel} ${course}`,
    subtitle: acronym || fullName,
    grade,
    extracurricular
  }
}
export const parseJobExperience = (job: TJob): TSectionItem => {
  const {
    title,
    company,
    dates,
    description,
    skills,
    presentations,
    extracurricular
  } = job;

  return {
    title,
    subtitle: company,
    dates,
    description,
    skills,
    presentations,
    extracurricular
  }
}

export const parseEducation = (education: TEducation): TSectionItem => {
  const {
    institution: {
      fullName,
      acronym
    },
    degreeLevel,
    course,
    dates,
    grade,
    description,
    extracurricular
  } = education;

  return {
    title: acronym || fullName,
    subtitle: `${degreeLevel} ${course}`,
    dates,
    description,
    grade,
    extracurricular
  }
}

/**
 *  https://gist.github.com/codeguy/6684588
 */
export const slugify = (value: string) => {
  let slugged = value.replace(/^\s+|\s+$/g, ''); // trim
  slugged = slugged.toLowerCase();

  // remove accents, swap ñ for n, etc
  const from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  const to = "aaaaeeeeiiiioooouuuunc------";
  for (let i = 0, l = from.length; i < l; i++) {
    slugged = slugged.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  slugged = slugged.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-'); // collapse dashes

  return slugged;
}