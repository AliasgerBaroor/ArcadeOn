export function formatCardNumber(num: string) {
    return num
        .replace(/\D/g, '')
        .replace(/(.{4})/g, '$1 ')
        .trim();
}
