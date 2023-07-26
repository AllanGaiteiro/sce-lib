export function formatFileName(className) {
  const response = className.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  return response;
}

export function formatFileFolder(className) {
  return formatFileName(className).split("-")[0];
}
