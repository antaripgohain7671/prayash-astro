export default function generateSummary(markdown, wordLimit = 32) {
    if (!markdown || markdown.trim() === "") {
      return "No content available."; // Handle empty content case
    }
  
    return markdown
      .replace(/!\[.*?\]\(.*?\)/g, "") // Remove inline images
      .replace(/!\[.*?\]\[.*?\]/g, "") // Remove referenced images
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // Keep only text for links
      .replace(/#+\s/g, "") // Remove Markdown headings (#, ##, etc.)
      .split("\n") // Convert to array
      .filter(line => line.trim() !== "") // Remove empty lines
      .join(" ") // Convert back to string
      .split(" ") // Convert to words array
      .slice(0, wordLimit) // Take first `wordLimit` words
      .join(" ") + "..."; // Convert back to string and add ellipsis
  }
  