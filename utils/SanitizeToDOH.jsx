export const sanitizeToDOH = ({
  _id,
  name,
  content,
  description,
  isInside,
  isDone,
}) => {
  return {
    _id,
    name: name ? String(name) : undefined,
    content: content ? String(content) : undefined,
    description: description ? String(description) : undefined,
    isInside: isInside ? Boolean(isInside) : undefined,
    isDone: isDone ? Boolean(isDone) : undefined,
  };
};
