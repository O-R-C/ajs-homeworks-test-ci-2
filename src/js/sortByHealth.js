export default function sortByHealth(arr) {
  return arr.sort((a, b) => a.health > b.health);
}
