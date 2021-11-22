export const sanitizeToDOH = ({ name, content, description, isInside, isDone }) => {
  return {
    name: name ? String(name) : undefined,
    content: content ? String(content) : undefined,
    description: description ? String(description) : undefined,
    isInside: isInside ? Boolean(isInside):undefined,
    isDone: isDone ? Boolean(isDone):undefined,
  };
};