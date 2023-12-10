export function multiPartData(data, type = "") {
    const multiPart = new FormData();
    for (const [key, value] of Object.entries(data)) {
      if (type === "multiple" && key === "blogImage") {
        value.forEach((file) => multiPart.append(key, file));
      } else if (key !== "blogImage") {
        multiPart.append(key, value);
      }
    }
    return multiPart;
  }