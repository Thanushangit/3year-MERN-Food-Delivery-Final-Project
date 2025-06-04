export function formatSrilankaPrice(price) {
    if (typeof price !== "number") {
        price = Number(String(price).replace(/[^0-9]/g, ""));
    }

    return price.toLocaleString("en-IN");
}
