export function getSlug(v) {
    return v.replace(/ /g,"_").replace(/\./g,"_").toLowerCase();
}