export default function sortByHealth(arr) {
  return arr.sort((a, b) => b.health - a.health);
}
