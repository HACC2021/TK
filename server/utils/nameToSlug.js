//Function that converts given text into a slug text
export function nameToSlug(Text) {
    return Text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
}