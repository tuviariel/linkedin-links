export const dateDisplay = (ts: number) => {
    const date = new Date(ts);
    return date.toLocaleDateString("he-IL");
};
