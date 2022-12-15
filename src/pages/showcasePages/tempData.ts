
export const eminentImages = (num: number) => {
  const images = [];
  for(let x = 0; x < num; x++) {
    images.push(require(`../../common/projectsData/eminentStudio/${x}.png`))
  }
  return images;
}